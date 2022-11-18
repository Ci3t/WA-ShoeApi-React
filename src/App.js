import React, { useEffect, useState } from "react";

import "./App.css";
import { Route, Routes, Link, useParams } from "react-router-dom";
import axios from "axios";
import HomePage from "./jsx/HomePage";
import ShoesList from "./jsx/ShoesList";
import ShoeDescription from "./jsx/ShoeDescription";
import CreateShoeProduct from "./jsx/CreateShoeProduct";
import { Nav } from "./jsx/Nav";
import styled from "styled-components";


function App() {
  const [shoesList, setShoesList] = useState([]);
  const [titleInput, setTitleInput] = useState("");
  const [brandInput, setBrandInput] = useState("");
  const [imageInput, setImageInput] = useState("");
  const [priceInput, setPriceInput] = useState("");
  const [sizeInput, setSizeInput] = useState("");
  const [colorInput, setColorInput] = useState("");
  const [Loading,setLoading] = useState(true)
  const [postMsg,setPostMsg] = useState('')

const {id} = useParams()
  useEffect(() => {
    setLoading(true)
    const fetchGetShoesApi = async () => {
      const { data } = await axios.get(
        "https://63738f8d0bb6b698b60f9519.mockapi.io/Shoes",
      );
      
      setShoesList(data);
      
      setLoading(false)
    };
    fetchGetShoesApi();
  }, []);




  const setCreateProduct = async () => {
    if (
      titleInput.trim().length &&
      brandInput.trim().length &&
      priceInput.trim().length &&
      imageInput.trim().length &&
      sizeInput.trim().length &&
      colorInput.trim().length !== 0
    ) {
      const { data } = await axios.post(
        "https://63738f8d0bb6b698b60f9519.mockapi.io/Shoes",
        {
          brand: brandInput,
          title: titleInput,
          image: imageInput,
          color: colorInput,
          price: priceInput,
          size: sizeInput,
        },
        setPostMsg('Shoe Added to List Page Press Back to see Changes'),
        setTitleInput(''),
        setBrandInput(''),
        setPriceInput(''),
        setSizeInput(''),
        setColorInput(''),
        setImageInput(''),
        );
      setShoesList([...shoesList,data])
    } else {
      setPostMsg('Please Fill All Fields')
      
    }
  };

  const setDeleteProduct = async(id)=>{

   
    const { data } = await axios.delete(
      `https://63738f8d0bb6b698b60f9519.mockapi.io/Shoes/${id}`)

      setShoesList(shoesList.filter(product=>{
        return id !== product.id
      }))
  }

  const setUpdateProduct = async(id)=>{
    const { data } = await axios.put(
      `https://63738f8d0bb6b698b60f9519.mockapi.io/Shoes/${id}`,{
        brand: brandInput,
        title: titleInput,
        image: imageInput,
        color: colorInput,
        price: priceInput,
        size: sizeInput,

      })

      setShoesList(prevData=>{
      
        return prevData.map(shoe=>data.id===shoe.id?data:shoe)
        // return [...prevData,res.data]
        
      })


  }

 const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    
    `
 

  return (
    <div>
      <Nav />

      <Routes>
        <Route path="/" element={<HomePage />} />
        </Routes>
        <Container>

        
        <Routes>
        <Route
        
        path="/ShoesList"
        element={
          
          shoesList.map((shoe) => {
            return (
          
              <ShoesList setLoading={setLoading}
                Loading={Loading}
                key={shoe.id}
                setShoesList={setShoesList}
                shoe={shoe}
                setDeleteProduct={setDeleteProduct}
                
                />
               
            );
          })}
        />
        </Routes>
        </Container>
        <Routes>
        <Route path="/ShoesList/:id" element={
           <ShoeDescription  setDeleteProduct={setDeleteProduct} shoesList={shoesList} setShoesList={setShoesList} />
        }/>
        <Route
          path="/CreateShoeProduct"
          element={
            <CreateShoeProduct
              setCreateProduct={setCreateProduct}
              titleInput={titleInput}
              brandInput={brandInput}
              imageInput={imageInput}
              colorInput={colorInput}
              priceInput={priceInput}
              postMsg={postMsg}
              sizeInput={sizeInput}
              setPostMsg={setPostMsg}
              setTitleInput={setTitleInput}
              setBrandInput={setBrandInput}
              setImageInput={setImageInput}
              setColorInput={setColorInput}
              setPriceInput={setPriceInput}
              setSizeInput={setSizeInput}
            />
          }
        />
      
      </Routes>
    </div>
  );
}

export default App;

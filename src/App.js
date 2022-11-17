import React, { useEffect, useState } from "react";

import "./App.css";
import { Route, Routes, Link, useParams } from "react-router-dom";
import axios from "axios";
import HomePage from "./jsx/HomePage";
import ShoesList from "./jsx/ShoesList";
import ShoeDescription from "./jsx/ShoeDescription";
import CreateShoeProduct from "./jsx/CreateShoeProduct";
import { Nav } from "./jsx/Nav";

function App() {
  const [shoesList, setShoesList] = useState([]);
  const [titleInput, setTitleInput] = useState("");
  const [brandInput, setBrandInput] = useState("");
  const [imageInput, setImageInput] = useState("");
  const [priceInput, setPriceInput] = useState("");
  const [sizeInput, setSizeInput] = useState("");
  const [colorInput, setColorInput] = useState("");

const {id} = useParams()
  useEffect(() => {
    const fetchGetShoesApi = async () => {
      const { data } = await axios.get(
        "https://63738f8d0bb6b698b60f9519.mockapi.io/Shoes",
      );
      
      setShoesList(data);

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
        console.log('Added')
      );
      setShoesList([...shoesList,data])
    } else {
      console.log("fill all");
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
 

  return (
    <div>
      <Nav />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/ShoesList"
          element={shoesList.map((shoe) => {
            return (
              <ShoesList
                key={shoe.id}
                setShoesList={setShoesList}
                shoe={shoe}
                setDeleteProduct={setDeleteProduct}
                
              />
            );
          })}
        />
      
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
              sizeInput={sizeInput}
              setTitleInput={setTitleInput}
              setBrandInput={setBrandInput}
              setImageInput={setImageInput}
              setColorInput={setColorInput}
              setPriceInput={setPriceInput}
              setSizeInput={setSizeInput}
            />
          }
        />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;

import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const ShoeDescription = ({setShoesList,shoesList,shoe,setUpdateProduct}) => {
  const [product, setProduct] = useState([]);
  const [editBrand, setEditBrand] = useState('');
  const [editTitle, setEditTitle] = useState('');
  const [editSize, setEditSize] = useState('');
  const [editPrice, setEditPrice] = useState('');
  const [editImg, setEditImg] = useState('');
  const { id }  = useParams();
  useEffect(() => {
    const fetchGetShoesApi = async () => {  
      const { data } = await axios.get(`https://63738f8d0bb6b698b60f9519.mockapi.io/Shoes/${id}`);
      setProduct(data);
    //   setProduct(data);
        // setShoesList(shoe=>data.id===shoe.id?data:shoe)
    };
    fetchGetShoesApi();
   

  },[id]);

  const setUpdateProductBrand = async(id)=>{
    const { data } = await axios.put(
      `https://63738f8d0bb6b698b60f9519.mockapi.io/Shoes/${id}`,{
        brand: editBrand,
      })
      setProduct(prev=>prev=data)
      setEditBrand("")
    }
  const setUpdateProductTitle = async(id)=>{
    const { data } = await axios.put(
      `https://63738f8d0bb6b698b60f9519.mockapi.io/Shoes/${id}`,{
        title: editTitle,
      })
      setProduct(prev=>prev=data)
      setEditTitle("")
    }
  const setUpdateProductSize = async(id)=>{
    const { data } = await axios.put(
      `https://63738f8d0bb6b698b60f9519.mockapi.io/Shoes/${id}`,{
        size: editSize,
      })
      setProduct(prev=>prev=data)
      setEditSize('')
    }
  const setUpdateProductPrice = async(id)=>{
    const { data } = await axios.put(
      `https://63738f8d0bb6b698b60f9519.mockapi.io/Shoes/${id}`,{
        price: editPrice,
      })
      setProduct(prev=>prev=data)
      setEditPrice('')
    }
  const setUpdateProductImg = async(id)=>{
    const { data } = await axios.put(
      `https://63738f8d0bb6b698b60f9519.mockapi.io/Shoes/${id}`,{
        image: editImg,
      })
      setProduct(prev=>prev=data)
      setEditImg("")
    }
    
    console.log(product);
  return (
      <div>
      
        {product.id &&  <div>
     
     <h3>{product.brand}</h3>
     <h3>{product.title}</h3>
     <h3>{product.size}</h3>
     <h3>{product.price}</h3>
     <img width={'200px'} src={product.image}/>
    {/* <button onClick={()=>{setDeleteProduct(product.id)}}>Delete</button> */}

        
        <input type="text" value={editBrand} onChange={(e)=>{setEditBrand(e.target.value)}}/>
        <button onClick={()=>{setUpdateProductBrand(product.id)}}>Edit Brand</button>

        <input type="text" value={editTitle} onChange={(e)=>{setEditTitle(e.target.value)}}/>
        <button onClick={()=>{setUpdateProductTitle(product.id)}}>Edit Title</button>

        <input type="number" value={editPrice} onChange={(e)=>{setEditPrice(e.target.value)}}/>
        <button onClick={()=>{setUpdateProductPrice(product.id)}}>Edit Price</button>

        <input type="number" value={editSize} onChange={(e)=>{setEditSize(e.target.value)}}/>
        <button onClick={()=>{setUpdateProductSize(product.id)}}>Edit Size</button>
        
        <input placeholder="img" type="text" value={editImg} onChange={(e)=>{setEditImg(e.target.value)}}/>
        <button  onClick={()=>{setUpdateProductImg(product.id)}}>Edit</button>
        

        


     <Link to={`/ShoesList/`} style={{ margin: '1rem' }}>
        Back
      </Link>
      
     
 </div>}
     
      </div>
    
  );
};

export default ShoeDescription;

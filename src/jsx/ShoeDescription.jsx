import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const ShoeDescription = ({setShoesList,shoesList,shoe,setUpdateProduct}) => {
  const [product, setProduct] = useState({});
  const [editBrand, setEditBrand] = useState('');
  const { id }  = useParams();
  useEffect(() => {
    const fetchGetShoesApi = async () => {  
      const { data } = await axios.get(`https://63738f8d0bb6b698b60f9519.mockapi.io/Shoes/${id}`);
      setProduct(data);
    //   setProduct(data);
        // setShoesList(shoe=>data.id===shoe.id?data:shoe)
    };
    fetchGetShoesApi();
   

  },[]);

  const setUpdateProductSingleName = async(id)=>{
    const { data } = await axios.put(
      `https://63738f8d0bb6b698b60f9519.mockapi.io/Shoes/${id}`,{

        brand: editBrand,

      })

      setShoesList(prev=>[...prev,data])
    //    setShoesList(prevData=>{
      
    //       return prevData.map(shoe=>{
    //         if(shoe.id === data.id){
    //             return data
    //         }else{
    //             return shoe
    //         }
    //       })
    //     // return [[...prevData],data]
    //     // return prevData.map(shoe=>data.id===shoe.id?data:shoe)
        
    //   })


  }

//   console.log(shoe);
//   const setDeleteProduct = async(id)=>{

   
//     const { data } = await axios.delete(
//       `https://63738f8d0bb6b698b60f9519.mockapi.io/Shoes/${id}`)

//       setProduct(shoesList.filter(product=>{
//         return id !== product.id
//       }))
//   }

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
        

        <button onClick={()=>{setUpdateProductSingleName(product.id)}}>Edit</button>


     <Link to={`/ShoesList/`} style={{ margin: '1rem' }}>
        Back
      </Link>
      
     
 </div>}
     
      </div>
    
  );
};

export default ShoeDescription;

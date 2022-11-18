import React from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import './Styles.jsx/shoeListStyle.css'
const ShoesList = ({setShoesList,shoe,shoesList,setDeleteProduct}) => {

   const {id} =  useParams()
//    console.log(params);
  return (
   
      <div className='shoeListContainer'>

     
         
           {/* <Link to='/ShoeLise' style={{ margin: '1rem' }}>
        Back
      </Link> */}
        {/* <h1>SHoeList</h1> */}
        <div className="shoeListBrandContainer">

        <h3>Brand: {shoe.brand}</h3>
        <button onClick={()=>{setDeleteProduct(shoe.id)}}>Delete</button>
        </div>
        <div><img className='shoeImagePreview'  width={'200px'} src={shoe.image}/></div>
        
        <div className='shoeListText'>
        <span>Price: ${shoe.price } </span>
        <span> Color: {shoe.color}</span>

        </div>
        <div className="shoeListLinkButton">
        <Link  to={`/ShoesList/${shoe.id}`} style={{ margin: '1rem' }}>
        More Info
      </Link>
      
      </div>
      </div>
   
  )
}

export default ShoesList
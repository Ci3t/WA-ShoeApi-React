import React from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

const ShoesList = ({setShoesList,shoe,shoesList,setDeleteProduct}) => {

   const {id} =  useParams()
//    console.log(params);
  return (
    <div >
         
           {/* <Link to='/ShoeLise' style={{ margin: '1rem' }}>
        Back
      </Link> */}
        {/* <h1>SHoeList</h1> */}
      
        <h3>{shoe.brand}</h3>
        <div><img width={'200px'} src={shoe.image}/></div>
        <div>{shoe.price}</div>
        <div>{shoe.color}</div>
        <Link  to={`/ShoesList/${shoe.id}`} style={{ margin: '1rem' }}>
        More Info
      </Link>
      <button onClick={()=>{setDeleteProduct(shoe.id)}}>Delete</button>
    </div>
  )
}

export default ShoesList
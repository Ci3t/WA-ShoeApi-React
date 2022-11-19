import React from 'react'

import { Link } from 'react-router-dom'
import './Styles/shoeListStyle.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan,faShoppingBag } from '@fortawesome/free-solid-svg-icons'




const ShoesList = ({setShoesList,shoe,shoesList,setDeleteProduct,setIsLoading,isLoading,errorMsg,isError}) => {

  setIsLoading(false)
  //  const {id} =  useParams()

   return (
     <>
    {isLoading && 
    <span className='loader'></span>}
    {isError && <p>errorMsg</p>}
      {!isLoading &&  <div className='shoeListContainer'>

  

         
<div className="shoeListBrandContainer">

<h3>Brand: {shoe.brand}</h3>
<span onClick={()=>{setDeleteProduct(shoe.id)}}>
<FontAwesomeIcon icon={faTrashCan} />




</span>
</div>
<div><img className='shoeImagePreview' alt="img"   width={'250px'} src={shoe.image}/></div>

<div className='shoeListText'>
<span>Price: <span className='priceTagColor'>${shoe.price } </span></span>
<span> Color: {shoe.color}<div className='green'></div></span>

</div>
<div className="shoeListLinkButton">

<Link  to={`/ShoesList/${shoe.id}`} style={{ margin: '1rem' }}>

<FontAwesomeIcon icon={faShoppingBag} />   More Info
</Link>


</div>
</div>}
     
   
      </>
  )
}

export default ShoesList
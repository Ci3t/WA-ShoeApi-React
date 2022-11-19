import React from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import './Styles/shoeListStyle.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan,fabrands,faShoppingBag } from '@fortawesome/free-solid-svg-icons'




const ShoesList = ({setShoesList,shoe,shoesList,setDeleteProduct,setIsLoading,isLoading}) => {

  setIsLoading(false)
   const {id} =  useParams()
   //    console.log(params);
   return (
     <>
    {isLoading && 
    <span className='loader'></span>}
      {!isLoading &&  <div className='shoeListContainer'>

     {console.log(isLoading)}

         
{/* <Link to='/ShoeLise' style={{ margin: '1rem' }}>
Back
</Link> */}
{/* <h1>SHoeList</h1> */}
<div className="shoeListBrandContainer">

<h3>Brand: {shoe.brand}</h3>
<span onClick={()=>{setDeleteProduct(shoe.id)}}>
<FontAwesomeIcon icon={faTrashCan} />




</span>
</div>
<div><img className='shoeImagePreview'  width={'250px'} src={shoe.image}/></div>

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
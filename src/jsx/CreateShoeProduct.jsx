import React from "react";
import { useState } from "react";
import './Styles/createShoe.css'

const CreateShoeProduct = ({
  titleInput,
  setTitleInput,
  brandInput,
  setBrandInput,
  setImageInput,
  imageInput,
  setColorInput,
  colorInput,
  setPriceInput,
  priceInput,
  setSizeInput,
  sizeInput,
  setCreateProduct,
  postMsg,
}) => {
  
  let prevImg = 'https://images.unsplash.com/photo-1512990414788-d97cb4a25db3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1415&q=80'


 
  
  const handleSubmit=(e)=>{
    e.preventDefault();
    }
  return (
    <div className="createProductWrapper">
      
    <img src={imageInput ? imageInput : prevImg}  width={'400px'}/>
    
    <form onSubmit={handleSubmit}>
      <div>
      
      <label htmlFor="Product-Title">
        <div>Product Title</div>
        <input
          className=".__field"
          value={titleInput}
          onChange={(e) => {
            setTitleInput(e.target.value);
          }}
          id="Product-Title"
          name="Product-Title"
          type="text"
          />
      </label>
          </div>
<div>

      <label htmlFor="Product-Brand">
        
        <div>  Product Brand</div>
        <input
        required 
        value={brandInput}
        onChange={(e) => {
          setBrandInput(e.target.value);
        }}
        id="Product-Brand"
          name="Product-Brand"
          type="text"
          />
      </label>
          </div>
        <div>

      <label htmlFor="Product-Image">
        <div>Product Image(URL)</div>
        <input
        required
        value={imageInput}
        onChange={(e) => {
            setImageInput(e.target.value);
          }}
          id="Product-Image"
          name="Product-Image"
          type="text"
          />
      </label>
          </div>
<div>

      <label htmlFor="Product-Color">
        <div>Product Color</div>
        <input
        required
          value={colorInput}
          onChange={(e) => {
            setColorInput(e.target.value);
          }}
          id="Product-Color"
          name="Product-Color"
          type="text"
          />
      </label>
          </div>
<div>

      <label htmlFor="Product-Price">
        <div>Product Price</div>
        <input
        required
        value={priceInput}
        onChange={(e) => {
          setPriceInput(e.target.value);
        }}
        id="Product-Price"
        min={"1"}
        name="Product-Price"
        type="number"
        />
      </label>
        </div>
<div>

      <label htmlFor="Shoe-Size">
        <div>Shoe Size</div>
        <input
          value={sizeInput}
          onChange={(e) => {
            setSizeInput(e.target.value);
          }}
          id="Shoe-Size"
          min={"1"}
          name="Shoe-Size"
          type="number"
          required/>
      </label>
          </div>
      <button className="button" onClick={setCreateProduct}>Add Product</button>
      <h1 className="ErrorOrSuccessMsg">{postMsg}</h1>
    </form>
    </div>
  );
};

export default CreateShoeProduct;

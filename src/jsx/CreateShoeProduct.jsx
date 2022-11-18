import React from "react";
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
}) => {

   const handleSubmit=(e)=>{
    e.preventDefault();
    }
  return (
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
    </form>
  );
};

export default CreateShoeProduct;

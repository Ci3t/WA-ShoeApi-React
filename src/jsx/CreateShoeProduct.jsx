import React from "react";


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
      <label htmlFor="Product-Title">
        Product Title
        <input
        
          value={titleInput}
          onChange={(e) => {
            setTitleInput(e.target.value);
          }}
          id="Product-Title"
          name="Product-Title"
          type="text"
        />
      </label>

      <label htmlFor="Product-Brand">
        Product Brand
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

      <label htmlFor="Product-Image">
        Product Image(URL)
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

      <label htmlFor="Product-Color">
        Product Color
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

      <label htmlFor="Product-Price">
        Product Price
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

      <label htmlFor="Shoe-Size">
        Shoe Size
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
      <button onClick={setCreateProduct}>Add Product</button>
    </form>
  );
};

export default CreateShoeProduct;

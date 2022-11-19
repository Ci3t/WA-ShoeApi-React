import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import "./Styles/shoeDesc.css";

const ShoeDescription = ({
  setShoesList,
  shoesList,
  shoe,
  setUpdateProduct,
}) => {
  const [product, setProduct] = useState([]);
  const [editBrand, setEditBrand] = useState("");
  const [editTitle, setEditTitle] = useState("");
  const [editSize, setEditSize] = useState("");
  const [editPrice, setEditPrice] = useState("");
  const [editImg, setEditImg] = useState("");
  const [isShown, setIsShown] = useState(false);
  const { id } = useParams();

  const isShownOnScreen = () => {
    setIsShown((shown) => !shown);
  };

  useEffect(() => {
    const fetchGetShoesApi = async () => {
      const { data } = await axios.get(
        `https://63738f8d0bb6b698b60f9519.mockapi.io/Shoes/${id}`,
      );
      setProduct(data);
      //   setProduct(data);
      // setShoesList(shoe=>data.id===shoe.id?data:shoe)
    };
    fetchGetShoesApi();
  }, [id]);

  const setUpdateProductBrand = async (id) => {
    if (editBrand.trim().length !== 0) {
      const { data } = await axios.put(
        `https://63738f8d0bb6b698b60f9519.mockapi.io/Shoes/${id}`,
        {
          brand: editBrand,
        },
      );
      setProduct((prev) => (prev = data));
      setEditBrand("");
    } else {
      return;
    }
  };
  const setUpdateProductTitle = async (id) => {
    if (editTitle.trim().length !== 0) {
      const { data } = await axios.put(
        `https://63738f8d0bb6b698b60f9519.mockapi.io/Shoes/${id}`,
        {
          title: editTitle,
        },
      );
      setProduct((prev) => (prev = data));
      setShoesList((prevData) => {
        return prevData.map((shoe) => (data.id === shoe.id ? data : shoe));
        // return [...prevData,data]
      });
      setEditTitle("");
    } else {
      return;
    }
  };
  const setUpdateProductSize = async (id) => {
    if (editSize.trim().length !== 0) {
      const { data } = await axios.put(
        `https://63738f8d0bb6b698b60f9519.mockapi.io/Shoes/${id}`,
        {
          size: editSize,
        },
      );
      setProduct((prev) => (prev = data));
      setEditSize("");
    } else {
      return;
    }
  };
  const setUpdateProductPrice = async (id) => {
    if (editPrice.trim().length !== 0) {
      const { data } = await axios.put(
        `https://63738f8d0bb6b698b60f9519.mockapi.io/Shoes/${id}`,
        {
          price: editPrice,
        },
      );
      setProduct((prev) => (prev = data));
      setEditPrice("");
    } else {
      return;
    }
  };
  const setUpdateProductImg = async (id) => {
    if (editImg.trim().length !== 0) {
      const { data } = await axios.put(
        `https://63738f8d0bb6b698b60f9519.mockapi.io/Shoes/${id}`,
        {
          image: editImg,
        },
      );
      setProduct((prev) => (prev = data));
      setEditImg("");
    } else {
      return;
    }
  };

  console.log(product);
  return (
    <div className="wrapperDesc">
      <div className="imgContainer">
      <img width={"500px"} src={product.image} alt="img" />
          {isShown && (
            <div className="brandImgContainer input">
              <input
              className="__field"
                placeholder="Place Image Url"
                type="text"
                value={editImg}
                onChange={(e) => {
                  setEditImg(e.target.value);
                }}
              />
              <button
                onClick={() => {
                  setUpdateProductImg(product.id);
                }}
              >
                Edit
              </button>
            </div>
          )}
      </div>
      <div className="containerWithoutImg input">
        <div className="linkRoute">

      <Link to={`/ShoesList/`} style={{ margin: "1rem" }}>
            Back
          </Link>
        </div>
      {product.id && (
        <div>
          <div className="brandTextContainer">
            <h3>Brand: {product.brand}</h3>
            {isShown && (
              <div>
                <label className="input">

                <input
                className="__field"
                  type="text"
                  value={editBrand}
                  onChange={(e) => {
                    setEditBrand(e.target.value);
                  }}
                  />
                <span className="input__label"></span>
                <button
                  onClick={() => {
                    setUpdateProductBrand(product.id);
                    isShownOnScreen();
                  }}
                  >
                  Submit Name
                </button>
                  </label>
              </div>
            )}
          </div>
          <h3>Shoe Title: {product.title}</h3>
          {isShown && (
            <div className="brandTitleContainer input">
              <input
              className="__field"
                type="text"
                value={editTitle}
                onChange={(e) => {
                  setEditTitle(e.target.value);
                }}
              />
              <button
              className=""
                onClick={() => {
                  setUpdateProductTitle(product.id);
                }}
              >
                Edit Title
              </button>
            </div>
          )}
          
          <h3>Price: ${product.price}</h3>
          {isShown && (
            <div className="brandSizeContainer">
              <input
              className="__field"
                type="number"
                value={editPrice}
                onChange={(e) => {
                  setEditPrice(e.target.value);
                }}
              />
              <button
                onClick={() => {
                  setUpdateProductPrice(product.id);
                }}
              >
                Edit Price
              </button>
            </div>
          )}

        <h3>Size: {product.size}</h3>
          {isShown && (
            <div className="brandPriceContainer">
              <input
              className="__field"
                type="number"
                value={editSize}
                onChange={(e) => {
                  setEditSize(e.target.value);
                }}
              />
              <button
                onClick={() => {
                  setUpdateProductSize(product.id);
                }}
              >
                Edit Size
              </button>
            </div>
          )}
          
          

          {/* <button onClick={()=>{setDeleteProduct(product.id)}}>Delete</button> */}

        </div>
      )}
          <button onClick={isShownOnScreen}>{isShown?'Close':'Edit'}</button>
          
      </div>
    </div>
  );
};

export default ShoeDescription;

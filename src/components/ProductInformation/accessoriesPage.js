import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import heart from "../../assets/images/heart.png";
import "../../assets/scss/productPage.css";
import { useDispatch, useSelector } from "react-redux";
import {
  setProductswishlist,
  setProducts,
} from "../../redux/actions/productsActions";
import WishListHelper from "../WishListHelper/WishListHelper";

const AccessoriesProductPage = () => {
  const products = useSelector((state) => state.allProducts.products);
  const wishList = useSelector((state) => state.allProducts.wishList);
  const dispatch = useDispatch();
  const categoryList = products.filter(
    (value) => value.category === "electronics"
  );

  const [categoryListupdated, setcategoryListupdated] = useState([]);

  useEffect(() => {
    setcategoryListupdated(categoryList);
  }, [products]);

  const handleChecked = (key) => {
    const res = categoryListupdated.map((item) => {
      if (item.id === key) {
        return { ...item, isChecked: !item.isChecked };
      }
      return item;
    });
    setcategoryListupdated(res);
    // dispatch(setProducts(res));
    const categoryCheckedList = res.filter((value) => value.isChecked === true);

    // dispatch(setProductswishlist(categoryCheckedList));
    dispatch(setProductswishlist([...wishList, categoryCheckedList]));
  };
  const renderList = categoryList.map((product) => {
    const { id, title, image, price } = product;
    return (
      <>
        <div className="col-md-4 col-xs-6" key={id}>
          <div key={product.id}>
            <Link to={`/product/${product.id}`}>
              <div className="product__card">
                <div className="product__image">
                  <img src={image} alt={title} />
                </div>
                <h4 className="product__title">{title}</h4>
                <div className="product__price">${price}</div>
                {/* <div
                  className="checkBoxWrapper"
                  style={{ position: "relative" }}
                >
                  {product.isChecked ? (
                    <Link className="hello" to="#">
                      <img
                        src={heart}
                        style={{ background: "red" }}
                        alt="heart"
                        onClick={() => handleChecked(product.id)}
                      />
                    </Link>
                  ) : (
                    <Link className="hello" to="#">
                      <img
                        src={heart}
                        alt="heart"
                        onClick={() => handleChecked(product.id)}
                      />
                    </Link>
                  )}
                </div> */}
                <WishListHelper />
              </div>
            </Link>
          </div>
        </div>
      </>
    );
  });
  return <>{renderList}</>;
};

export default AccessoriesProductPage;

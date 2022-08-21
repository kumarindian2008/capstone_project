import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { Link } from 'react-router-dom';

function WishList() {
    const wishList = useSelector((state) => state.allProducts.wishList);
    const [wishlistproducts,setwishlistproducts]=useState([])

    useEffect(()=>{
        const updatedList = [...new Set(wishList.flat())]
        setwishlistproducts(updatedList )
      },[wishList])

    console.log( 'categoryList--wishlistproducts',wishlistproducts)

    const renderList = wishlistproducts.map((product) => {
        const { id, title, image, price } = product;
        return (
          <div>
            <div className="col-md-4 col-xs-6" key={id}>
              <div key={product.id}>
                <Link to={`/product/${product.id}`}>
                  <div className="product__card">
                    <div className="product__image">
                      <img src={image} alt={title} />
                    </div>
                    <h4 className="product__title">{title}</h4>
                    <div className="product__price">${price}</div>
    
                  </div>
                </Link>
                
              </div>
            </div>
          </div>
        );
      });
      return <>{renderList}</>;
}

export default WishList
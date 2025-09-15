import React, { useContext } from 'react';
import './CartItem.css';
import { ShopContext } from '../../Context/ShopContext';
import remove_icon from '../../assets/cart_cross_icon.png';

const CartItem = () => {
  const { all_product, cartItem, removeFromCart } = useContext(ShopContext);

  return (
    <div className='cartitem'>
      <div className="cartitem-format-main">
        <p>Product</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((product) => {
        const quantity = cartItem[product.id];
        if (quantity > 0) {
          return (
            <div key={product.id}>
              <div className="cartitem-format cartitem-format-main">
                <img src={product.image} className='cartitem-product-icon' alt={product.name} />
                <p>{product.name}</p>
                <p>${product.new_price}</p>
                <button className='cartitem-quantity'>{quantity}</button>
                <p>${product.new_price * quantity}</p>
                <img
                  src={remove_icon}
                  onClick={() => removeFromCart(product.id)}
                  alt="remove"
                  className="cartitem-remove-icon"
                />
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}
    </div>
  );
};

export default CartItem;
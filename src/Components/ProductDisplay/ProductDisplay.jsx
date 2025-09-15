import React, { useContext } from 'react'
import './ProductDisplay.css'   // 👈 correct relative import
import star_icon from '../../assets/star_icon.png'
import star_dull_icon from '../../assets/star_dull_icon.png'
import { ShopContext } from '../../Context/ShopContext'

const ProductDisplay = (props) => {
  const { product } = props;   // 👈 now props works
  const {addToCart} = useContext(ShopContext);

  return (
    <div className='productdisplay'>
      <div className="productdisplay-left">
       <div className="productdisplay-img-list">
          {[...Array(4)].map((_, i) => (
            <img key={i} src={product.image} alt={product.name} />
          ))}
        </div>

        <div className="productdisplay-img">
          <img className='productdisplay-main-img' src={product.image} alt={product.name} />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-star">
          {[...Array(4)].map((_, i) => <img key={i} src={star_icon} alt="star" />)}
          <img src={star_dull_icon} alt="dull star" />
          <p>122</p>
        </div>
        <div className="productdisplay-right-prices">
            <div className="productdisplay-right-price-old">
                ${product.old_price}
            </div>
            
            <div className="productdisplay-right-price-new">
                ${product.new_price}
            </div>

        </div>
        <div className="productdisplay-right-description">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa quod fugiat ratione, quam quas cupiditate ad corporis esse voluptas omnis reprehenderit dicta, quibusdam, architecto odit alias cum! Hic, cum repellendus.</p>
        </div>
        <div className="producdisplay-right-size">
            <h1>Select Size</h1>
           
         <div className="productdisplay-right-sizes">
            {['S', 'M', 'L', 'XL', 'XXL'].map(size => <div key={size}>{size}</div>)}
          </div>
        </div>
        <button onClick={() =>{addToCart(product.id)}}>Add to cart</button>
        <p className='productdisplay-right-category'> <span>category :</span> women , T-shirt , Crop top</p>
        <p className='productdisplay-right-category'> <span>Tags :</span> Morden , Latest</p>
      </div>
    </div>
  )
}

export default ProductDisplay

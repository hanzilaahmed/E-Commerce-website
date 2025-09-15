import React from 'react'
import './RelatedProduct.css'
import data_product from '../../assets/data.js'
import Item from '../Item/Item.jsx'

const RelatedProduct = () => {
  return (
    <div className='relatedproduct'>
      <h1>Related Product</h1>
      <hr />
      <div className="relatedproduct-item">
        {data_product.map((item , index )=>{
                return <Item key={index} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />

        })}
      </div>
    </div>
  )
}

export default RelatedProduct

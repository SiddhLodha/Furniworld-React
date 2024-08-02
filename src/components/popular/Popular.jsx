import React from 'react'
import './Popular.css'
import data_product from '../assets/data'
import Item from '../item/Item'

const popular = () => {
  return (
    <div className='popular'>
      <h1>Popular in Modern Times</h1>
      <hr />
      <div className="popular-item">
        {data_product.map((item,i) => {
          return <Item key={i} id={item.id} p_name={item.p_name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
        } )}
      </div>
    </div>
  )
}

export default popular

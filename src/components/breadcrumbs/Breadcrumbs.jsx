import React from 'react'
import './Breadcrumbs.css'
import arrow_icon from '../assets/breadcrum_arrow.png'

const Breadcrumbs = (props) => {
    const {product} = props;
  return (
    <div className='breadcrumbs'>
        HOME <img src={arrow_icon} alt="" /> 
        {product.category} <img src={arrow_icon} alt="" />
        {product.p_name}
    </div>
  )
}

export default Breadcrumbs

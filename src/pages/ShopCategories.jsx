import React, { useContext, useState } from 'react'
import './css/ShopCategories.css'
import { ShopContext } from '../context/ShopContext'
import dropdown_icon from '../components/assets/dropdown_icon.png'
import Item from '../components/item/Item'

const ShopCategories = (props) => {
  const { all_product } = useContext(ShopContext)
  const [selectedCategories, setSelectedCategories] = useState(new Set())
  const [selectedPriceRanges, setSelectedPriceRanges] = useState(new Set())

  // Determine price ranges based on product prices
  const priceRanges = [
    { min: 0, max: 1000 },
    { min: 1000, max: 5000 },
    { min: 5000, max: 10000 },
    { min: 10000, max: 20000 },
    { min: 20000, max: 50000 }
  ]

  // Filter products based on selected categories and price ranges
  const filteredProducts = all_product.filter(item => {
    const inCategory = selectedCategories.size === 0 || selectedCategories.has(item.category)
    const inPriceRange = selectedPriceRanges.size === 0 || Array.from(selectedPriceRanges).some(range => item.new_price >= range.min && item.new_price <= range.max)
    return inCategory && inPriceRange
  })

  const categories = [...new Set(all_product.map(item => item.category))]

  const handleCategoryChange = (e) => {
    const category = e.target.value
    setSelectedCategories(prev => {
      const newSet = new Set(prev)
      if (newSet.has(category)) {
        newSet.delete(category)
      } else {
        newSet.add(category)
      }
      return newSet
    })
  }

  const handlePriceChange = (range) => {
    setSelectedPriceRanges(prev => {
      const newSet = new Set(prev)
      if (newSet.has(range)) {
        newSet.delete(range)
      } else {
        newSet.add(range)
      }
      return newSet
    })
  }

  return (
    <div className='shop-categories'>
      <div className='shop-categories-left-pane'>
        <h3>Filters</h3>
        <div className='filter-category'>
          <h4>Category Filter</h4>
          {categories.map(category => (
            <label key={category}>
              <input
                type='checkbox'
                value={category}
                onChange={handleCategoryChange}
                checked={selectedCategories.has(category)}
              />
              {category}
            </label>
          ))}
        </div>
        <div className='filter-price'>
          <h4>Price Range Filter</h4>
          {priceRanges.map(range => (
            <label key={`${range.min}-${range.max}`}>
              <input
                type='checkbox'
                value={`${range.min},${range.max}`}
                onChange={() => handlePriceChange(range)}
                checked={selectedPriceRanges.has(range)}
              />
              ₹{range.min} - ₹{range.max}
            </label>
          ))}
        </div>
      </div>
      <div className='shop-categories-main'>
        <img className='shopcategories-banner' src={props.banner} alt="" />
        <div className="shopcategories-indexSort">
          <p>
            <span>Showing {filteredProducts.length}</span> products
          </p>
          <div className="shopcategories-sort">
            Sort by <img src={dropdown_icon} alt="" />
          </div>
        </div>
        <div className="shopcategories-products">
          {filteredProducts.map((item, i) => (
            <Item
              key={i}
              id={item.id}
              p_name={item.p_name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          ))}
        </div>
        <div className="shopcategories-loadmore">
          Explore More
        </div>
      </div>
    </div>
  )
}

export default ShopCategories

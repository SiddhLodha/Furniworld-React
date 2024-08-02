import React, { useContext, useState } from 'react';
import './Navbar.css';
import logo from '../assets/furniworld-2.png';
import cart_icon from '../assets/cart_icon.png';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../context/ShopContext';
import all_product from '../assets/all_product'; // Adjust the path as needed

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const [showCategories, setShowCategories] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const { getTotalCartItems } = useContext(ShopContext);

  const categories = [
    { name: 'Chair', path: '/Chair' },
    { name: 'Table', path: '/Table' },
    { name: 'Desk', path: '/Desk' },
    { name: 'Bed', path: '/Bed' },
    { name: 'DiningTable', path: '/DiningTable' },
    { name: 'Sofa', path: '/Sofa' },
  ];

  const handleMouseEnter = () => {
    setShowCategories(true);
  };

  const handleMouseLeave = () => {
    setShowCategories(false);
  };

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    const results = all_product.filter(product =>
      product.p_name.toLowerCase().includes(query)
    );
    setSearchResults(results);
  };

  return (
    <div className='navbar'>
      <div className="nav-logo">
        <Link to="/"><img src={logo} alt="FurniWorld Logo" /></Link>
      </div>
      <ul className='nav-menu'>
        <li onClick={() => setMenu("home")}>
          <Link to='/'>Home</Link>
          {menu === 'home' ? <hr /> : null}
        </li>
        <li 
          onMouseEnter={handleMouseEnter} 
          onMouseLeave={handleMouseLeave}
          className={showCategories ? "show" : ""}
        >
          <Link to='/categories' onClick={() => setMenu("Categories")}>Products</Link>
          {menu === 'Categories' ? <hr /> : null}
          <ul className={`dropdown-menu ${showCategories ? 'show' : ''}`}>
            {categories.map((category, index) => (
              <li key={index}>
                <Link to={category.path}>{category.name}</Link>
              </li>
            ))}
          </ul>
        </li>
        <li onClick={() => setMenu("AboutUs")}>
          <Link to='/aboutus'>About Us</Link>
          {menu === 'AboutUs' ? <hr /> : null}
        </li>
        <li onClick={() => setMenu("ContactUs")}>
          <Link to='/contactus'>Contact Us</Link>
          {menu === 'ContactUs' ? <hr /> : null}
        </li>
      </ul>
      <div className="nav-search-cart">
        <div className="nav-search">
          <input 
            type="text" 
            value={searchQuery}
            onChange={handleSearch}
            placeholder="Search products..."
          />
          {searchQuery && searchResults.length > 0 && (
            <div className="search-results">
              <ul>
                {searchResults.map(product => (
                  <li key={product.id}>
                    <Link to={`/product/${product.id}`}>
                      <img src={product.image} alt={product.p_name} />
                      <span>{product.p_name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <div className="nav-login-cart">
          <Link to='/cart'>
            <img src={cart_icon} alt="Cart Icon" />
          </Link>
          <div className="nav-cart-count">{getTotalCartItems()}</div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

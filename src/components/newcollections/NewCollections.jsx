import React from 'react';
import './NewCollections.css';
import new_collection from '../assets/new_collections';
import Item from '../item/Item';
import Slider from "react-slick";

const NewCollections = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplayspeed: 3000,
  };

  return (
    <div className='newcollections'>
      <h1>New Collections</h1>
      <hr />
      <div className="newcollections-slider">
        <Slider {...settings}>
          {new_collection.map((item, i) => {
            return (
              <div key={i}>
                <Item
                  id={item.id}
                  p_name={item.p_name}
                  image={item.image}
                  new_price={item.new_price}
                  old_price={item.old_price}
                />
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}

export default NewCollections;

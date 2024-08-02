import React from 'react';
import Slider from 'react-slick';
import './css/AboutUs.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import hero_image from '../../src/components/assets/furniworld-2.png';
import customer_1 from '../components/assets/customer-1.png';
import customer_2 from '../components/assets/customer-2.png';
import customer_3 from '../components/assets/customer-1.png';

const AboutUs = () => {
  const testimonials = [
    {
      name: 'John Doe',
      text: 'FurniWorld has the best furniture I have ever bought! Highly recommend their services.',
      image: customer_1
    },
    {
      name: 'Jane Smith',
      text: 'Amazing quality and fantastic customer service. My home looks beautiful thanks to FurniWorld.',
      image: customer_2
    },
    {
      name: 'Alice Johnson',
      text: 'Affordable prices and stylish designs. FurniWorld is my go-to for all furniture needs.',
      image: customer_3
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000
  };

  return (
    <div className="about-us">
      <div className="hero-section">
        <img src={hero_image} alt="FurniWorld Hero" className="hero-image" />
        <h1>Your premier destination for quality furniture</h1> 
      </div>
      <section className="our-story">
        <h2>Our Story</h2>
        <p>
          Founded in 2020, FurniWorld has been committed to providing our customers with high-quality, stylish, and affordable furniture. Our journey began with a simple idea: to make beautiful furniture accessible to everyone. Over the years, we have grown into a trusted name in the furniture industry, known for our exceptional customer service and a wide range of products that cater to all tastes and preferences.
        </p>
      </section>
      <section className="mission-vision">
        <div className="mission">
          <h2>Our Mission</h2>
          <p>
            At FurniWorld, our mission is to enhance the living spaces of our customers by offering unique, high-quality furniture pieces that combine functionality with style. We strive to provide an exceptional shopping experience, from browsing our online store to the delivery of your furniture.
          </p>
        </div>
        <div className="vision">
          <h2>Our Vision</h2>
          <p>
            Our vision is to be a global leader in the furniture industry, known for our innovative designs, sustainable practices, and commitment to customer satisfaction. We aim to inspire and enable people to create beautiful, comfortable homes that reflect their personal style.
          </p>
        </div>
      </section>
      <section className="values">
        <h2>Our Values</h2>
        <ul>
          <li><strong>Quality:</strong> We prioritize quality in every piece of furniture we offer.</li>
          <li><strong>Customer Satisfaction:</strong> Our customers are at the heart of everything we do.</li>
          <li><strong>Innovation:</strong> We embrace creativity and innovation in our designs.</li>
          <li><strong>Sustainability:</strong> We are committed to sustainable practices and materials.</li>
        </ul>
      </section>
      <section className="team">
        <h2>Meet Our Team</h2>
        <p>
          Our dedicated team of designers, craftsmen, and customer service representatives work tirelessly to ensure that you receive the best furniture and service. We believe that a strong team is the backbone of our success, and we are proud of the talented individuals who make FurniWorld a great place to shop.
        </p>
      </section>
      <section className="testimonials-slider">
        <h2>What Our Customers Say</h2>
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial">
              <img src={testimonial.image} alt={testimonial.name} className="testimonial-image" />
              <p>"{testimonial.text}"</p>
              <h3>{testimonial.name}</h3>
            </div>
          ))}
        </Slider>
      </section>
      <section className="contact-us">
        <h2>Contact Us</h2>
        <p>
          Have any questions or need assistance? Our customer service team is here to help. Reach out to us at <a href="mailto:furniworld2023@gmail.com">furniworld2023@gmail.com</a> or call us at (123) 456-7890.
        </p>
      </section>
    </div>
  );
};

export default AboutUs;

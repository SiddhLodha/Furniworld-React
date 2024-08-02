import brooke from './brooke.jpg';
import table1 from './table1.jpg';
import mt from './mt-01.jpg';
import ksp from './ksp.jpg';
import shittydesk from './shittydesk.jpg';
import bed from './bed.jpg';
import gaming from './gamingdesk.jpg';
import p_1 from './1.jpg';
import p_2 from './2.jpg';
import p_3 from './3.jpg';
import p_4 from './4.jpg';
import p_5 from './5.jpg';
import p_6 from './6.jpg';
import p_7 from './7.jpg';
import p_8 from './8.jpg';
import p_9 from './9.jpg';
import p_10 from './10.jpg';
import p_11 from './11.jpg';
import p_12 from './12.jpg';
import p_13 from './13.jpg';
import p_14 from './14.jpg';
import p_15 from './15.jpg';
import p_16 from './16.jpg';
import p_17 from './17.jpg';

const all_product = [
  {
    id: 1,
    p_name: 'Swivel Chair Brooke',
    image: brooke,
    category: 'Chair',
    old_price: 3950,
    new_price: 3590,
    available: 1,
    description: 'The Swivel Chair Brooke combines comfort and style with a sleek design. Perfect for home or office use, it features a 360-degree swivel mechanism and adjustable height.'
  },
  {
    id: 2,
    p_name: 'MARIEDAMM Table',
    image: table1,
    category: 'Table',
    old_price: 16390,
    new_price: 14899,
    available: 1,
    description: 'The MARIEDAMM Table offers a sophisticated touch to any dining area. Made from high-quality materials, it features a contemporary design and ample space for family gatherings.'
  },
  {
    id: 3,
    p_name: 'Modern Table',
    image: mt,
    category: 'Table',
    old_price: 8530,
    new_price: 7759,
    available: 1,
    description: 'Add a touch of modern elegance to your home with the Modern Table. Its clean lines and minimalist design make it a versatile choice for various interiors.'
  },
  {
    id: 4,
    p_name: 'Kasparov Modern Chair',
    image: ksp,
    category: 'Chair',
    old_price: 5200,
    new_price: 4720,
    available: 1,
    description: 'The Kasparov Modern Chair combines ergonomic design with contemporary aesthetics. It features a comfortable seat and stylish frame, making it a perfect addition to any modern workspace.'
  },
  {
    id: 5,
    p_name: 'Table Blake',
    image: shittydesk,
    category: 'Table',
    old_price: 7700,
    new_price: 6999,
    available: 1,
    description: 'The Table Blake offers a practical and stylish solution for your home office or dining room. Its sturdy build and clean design make it a reliable and attractive choice.'
  },
  {
    id: 6,
    p_name: 'Bed Elegant Semi Double',
    image: bed,
    category: 'Bed',
    old_price: 23100,
    new_price: 20998,
    available: 1,
    description: 'Experience luxury and comfort with the Bed Elegant Semi Double. Its plush mattress and elegant design ensure a restful night’s sleep and a touch of sophistication to your bedroom.'
  },
  {
    id: 7,
    p_name: 'NEO Gaming Desk',
    image: gaming,
    category: 'Desk',
    old_price: 13710,
    new_price: 12459,
    available: 1,
    description: 'The NEO Gaming Desk is designed for the ultimate gaming experience. With ample space for your gaming setup and a sleek, modern design, it’s the perfect choice for any serious gamer.'
  },
  {
    id: 8,
    p_name: 'Dining Comet-192',
    image: p_1,
    category: 'Dining Table',
    old_price: 18260,
    new_price: 16599,
    available: 1,
    description: 'The Dining Comet-192 is a stunning addition to your dining area. Its elegant design and durable construction make it ideal for both everyday meals and special occasions.'
  },
  {
    id: 9,
    p_name: 'Chinese Calligraphy Table',
    image: p_2,
    category: 'Table',
    old_price: 3130,
    new_price: 2849,
    available: 1,
    description: 'Infuse your space with cultural charm with the Chinese Calligraphy Table. This unique piece features intricate details and a beautiful design inspired by traditional calligraphy.'
  },
  {
    id: 10,
    p_name: 'Modern Dining Table',
    image: p_3,
    category: 'Dining Table',
    old_price: 38330,
    new_price: 34845,
    available: 1,
    description: 'The Modern Dining Table is perfect for those who appreciate contemporary design. With its sleek finish and spacious surface, it’s ideal for both family dinners and entertaining guests.'
  },
  {
    id: 11,
    p_name: 'Fabric Wooden Chair',
    image: p_4,
    category: 'Chair',
    old_price: 6600,
    new_price: 5999,
    available: 1,
    description: 'The Fabric Wooden Chair blends classic wooden construction with a soft fabric seat. It offers both comfort and style, making it a great addition to any dining or living area.'
  },
  {
    id: 12,
    p_name: 'Vintage Velvet Chair',
    image: p_5,
    category: 'Chair',
    old_price: 4480,
    new_price: 3990,
    available: 1,
    description: 'Add a touch of vintage elegance to your space with the Velvet Chair. Its plush velvet upholstery and timeless design make it a stylish choice for any room.'
  },
  {
    id: 13,
    p_name: 'Black Office Chair',
    image: p_6,
    category: 'Chair',
    old_price: 5500,
    new_price: 4999,
    available: 1,
    description: 'The Black Office Chair is designed for comfort and functionality. Its ergonomic design ensures support during long work hours, while its sleek black finish adds a professional touch.'
  },
  {
    id: 14,
    p_name: 'Sofa Set Comfort',
    image: p_7,
    category: 'Sofa',
    old_price: 33190,
    new_price: 29999,
    available: 1,
    description: 'The Sofa Set Comfort provides ultimate relaxation with its plush cushions and spacious seating. Its stylish design makes it a perfect centerpiece for your living room.'
  },
  {
    id: 15,
    p_name: 'Metal Sofa Set',
    image: p_8,
    category: 'Sofa',
    old_price: 43790,
    new_price: 39999,
    available: 1,
    description: 'The Metal Sofa Set features a modern design with a sturdy metal frame and plush seating. It’s a durable and stylish choice for enhancing your living space.'
  },
  {
    id: 16,
    p_name: 'Leather Sofa Set',
    image: p_9,
    category: 'Sofa',
    old_price: 47200,
    new_price: 44999,
    available: 1,
    description: 'Indulge in luxury with the Leather Sofa Set. Its high-quality leather and elegant design offer both comfort and sophistication, making it a standout piece for any home.'
  },
  {
    id: 17,
    p_name: 'Recliner Chair',
    image: p_10,
    category: 'Chair',
    old_price: 9820,
    new_price: 8999,
    available: 1,
    description: 'The Recliner Chair offers exceptional comfort with its adjustable reclining feature. Ideal for relaxing at home, it combines plush cushioning with a sleek design.'
  },
  {
    id: 18,
    p_name: 'Contemporary Lounge Chair',
    image: p_11,
    category: 'Chair',
    old_price: 7230,
    new_price: 6499,
    available: 1,
    description: 'Enhance your living space with the Contemporary Lounge Chair. Its modern design and comfortable seating make it perfect for lounging and entertaining.'
  },
  {
    id: 19,
    p_name: 'Classic Wooden Chair',
    image: p_12,
    category: 'Chair',
    old_price: 3200,
    new_price: 2999,
    available: 1,
    description: 'The Classic Wooden Chair features timeless craftsmanship with its solid wood construction and classic design. Ideal for traditional and modern interiors alike.'
  },
  {
    id: 20,
    p_name: 'Luxury Recliner Chair',
    image: p_13,
    category: 'Chair',
    old_price: 8250,
    new_price: 7499,
    available: 1,
    description: 'Experience the height of comfort with the Luxury Recliner Chair. Its plush cushioning and luxurious finish make it perfect for unwinding after a long day.'
  },
  {
    id: 21,
    p_name: 'Office Leather Chair',
    image: p_14,
    category: 'Chair',
    old_price: 5940,
    new_price: 5499,
    available: 1,
    description: 'The Office Leather Chair combines executive style with ergonomic support. Its high-quality leather and adjustable features provide comfort and professionalism in any office setting.'
  },
  {
    id: 22,
    p_name: 'Wooden Dining Chair',
    image: p_15,
    category: 'Chair',
    old_price: 3500,
    new_price: 3299,
    available: 1,
    description: 'The Wooden Dining Chair offers classic charm and durability. With its solid wood construction and timeless design, it complements any dining room decor.'
  },
  {
    id: 23,
    p_name: 'Modern Leather Chair',
    image: p_16,
    category: 'Chair',
    old_price: 5400,
    new_price: 4999,
    available: 1,
    description: 'The Modern Leather Chair features sleek lines and premium leather upholstery. Its contemporary design and comfort make it an ideal choice for any modern home or office.'
  },
  {
    id: 24,
    p_name: 'Elegant Lounge Chair',
    image: p_17,
    category: 'Chair',
    old_price: 7150,
    new_price: 6699,
    available: 1,
    description: 'The Elegant Lounge Chair combines sophistication with comfort. Its refined design and plush seating make it a perfect addition to any stylish living space.'
  }
];

export default all_product;

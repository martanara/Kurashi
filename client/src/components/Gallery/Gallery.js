import React from 'react';

import Container from '../Container/Container';
import GalleryItem from '../GalleryItem/GalleryItem';

import styles from './Gallery.module.scss';

const Gallery = () => {
  const galleryItems = [
    {
      category: 'Home',
      alt: 'woods',
      img: '/images/featured/karen-OeU_hJuxv0E-unsplash.jpg',
      banner: 'small',
      line1: 'New Arrivals',
      line2: 'everything for your plants',
    },
    {
      category: 'Kitchen',
      alt: 'tea ceremony',
      img: '/images/featured/pexels-charlotte-may-5946632.jpg',
      banner: 'large',
      line1: 'Tea Ceremony',
    },
    {
      category: 'Stationery',
      alt: 'stationery',
      img: '/images/featured/pexels-polina-kovaleva-8101480.jpg',
      banner: 'small',
      line1: 'Back in Stock',
      line2: 'elegant stationery',
    },
    {
      category: 'Fashion',
      alt: 'girl with sandals',
      img: '/images/featured/pexels-alena-darmel-8989556.jpg',
      banner: 'small',
      line1: 'Summer fashion',
      line2: 'linen, cotton and more',
    },
    {
      category: 'Home',
      alt: 'ikebana',
      img: '/images/featured/linh-le-uP2QOCUBu7A-unsplash.jpg',
      banner: 'large',
      line1: 'Ikebana',
    },
    {
      category: 'Home',
      alt: 'clay potterys',
      img: '/images/featured/pexels-tara-winstead-6692149.jpg',
      banner: 'small',
      line1: 'New Arrivals',
      line2: 'minimalistic clay pottery',
    },
  ];

  return (
    <Container>
      <div className={styles.root}>
        {
          galleryItems.map(item => (
            <GalleryItem 
              key={item.img}
              category={item.category}
              alt={item.alt}
              img={item.img}
              banner={item.banner}
              line1={item.line1}
              line2={item.line2}
            />))
        }
      </div>
    </Container>
  );
};

export default Gallery;



import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CategoryFilter from '../../components/CategoryFilter';
import { imageData } from '../../components/Data/ImageData';
import './Gallery.css';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const navigate = useNavigate();

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('user'));
    if (!storedData) {
      alert('No user data found. Please sign up first.');
      navigate('/signup');
    }
  }, [navigate]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const filteredImages =
    selectedCategory === 'All'
      ? imageData
      : imageData.filter((image) => image.category === selectedCategory);

  return (
    <div className="galleryWrapper">
      <h1 className="imageGallery_heading">Music Gallery</h1>
      <div className="viewSwitcher">
        <CategoryFilter
          selectedCategory={selectedCategory}
          onCategoryChange={handleCategoryChange}
        />
      </div>
      <div className="gridContainer">
        {filteredImages.map((image) => (
          <div className="gridItem" key={image.image_id}>
            <img src={image.url} alt={image.name} className="galleryImage" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;

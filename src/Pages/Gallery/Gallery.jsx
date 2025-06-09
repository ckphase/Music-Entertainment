import React, { useState } from 'react';
import CategoryFilter from '../../components/CategoryFilter';
import { imageData } from '../../components/Data/ImageData';  
import './Gallery.css';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Update the selected category when user chooses a new one
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  // Filter images based on selected category or show all if 'All' selected
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

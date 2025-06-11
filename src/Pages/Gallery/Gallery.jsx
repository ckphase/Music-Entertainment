import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CategoryFilter from '../../components/CategoryFilter';
import { imageData } from '../../components/Data/ImageData';
import './Gallery.css';
import Modal from '../../components/Modal/Modal';


const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState();
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

  const handleImageClick = (image) => {
    setSelectedImage(image);
  }

  const handleClose = () => {
    setSelectedImage(null);
  }
  const filteredImages =
    selectedCategory === 'All'
      ? imageData
      : imageData.filter((image) => image.category === selectedCategory);

  return (
    <div className="galleryWrapper">
      {/* <h1 className="imageGallery_heading">Music Gallery</h1> */}
      <div className="viewSwitcher">
        <CategoryFilter
          selectedCategory={selectedCategory}
          onCategoryChange={handleCategoryChange}
        />
      </div>
      <div className="gridContainer">
        {filteredImages.map((image) => (
          <div className="gridItem" key={image.image_id} onClick={() => handleImageClick(image)}>
            <img src={image.url} alt={image.name} className="galleryImage" />
          </div>
        ))}
      </div>
      {selectedImage && (
        <Modal image={selectedImage} onClose={handleClose} />
      )}
    </div>
  );
};

export default Gallery;

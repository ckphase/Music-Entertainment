import React from 'react';
import './CategoryFilter.css';

const CategoryFilter = ({ selectedCategory, onCategoryChange }) => {
  return (
    <div className="category-filter">
      <h1 className="category-title">Know About Details of You Favourite Songs</h1>
      <div className="category-select-wrapper">
        <select
          className="category-select"
          onChange={(e) => onCategoryChange(e.target.value)}
          value={selectedCategory}
        >
          <option value="All">All</option>
          <option value="Healing">Healing</option>
          <option value="Emotional">Emotional</option>
          <option value="Heartfelt">Heartfelt</option>
          <option value="Confident">Confident</option>
          <option value="Playful">Playful</option>
          <option value="Romantic">Romantic</option>
          <option value="Reflective">Reflective</option>
          <option value="Cheeky">Cheeky</option>
          <option value="Relaxed">Relaxed</option>
          <option value="Beginner">Beginner</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Advanced">Advanced</option>
        </select>
      </div>
    </div>
  );
};

export default CategoryFilter;

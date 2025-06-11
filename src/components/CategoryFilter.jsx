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
          <option value="K-pop / Rap / Lyricism">K-pop / Rap / Lyricism</option>
          <option value="K-pop / Ballad / Vocal">K-pop / Ballad / Vocal</option>
          <option value="K-pop / Hip-Hop / Production">K-pop / Hip-Hop / Production</option>
          <option value="K-pop / Dance / Hip-Hop">K-pop / Dance / Hip-Hop</option>
          <option value="K-pop / Vocal / Contemporary Dance">K-pop / Vocal / Contemporary Dance</option>
          <option value="K-pop / Soul / Jazz">K-pop / Soul / Jazz</option>
          <option value="K-pop / Pop / R&B">K-pop / Pop / R&B</option>
          <option value="K-pop / Vocal / Visual">K-pop / Vocal / Visual</option>
          <option value="K-pop / Rap / Dance">K-pop / Rap / Dance</option>
          <option value="K-pop / Hip-Hop / R&B">K-pop / Hip-Hop / R&B</option>
          <option value="K-pop / Pop / Dance">K-pop / Pop / Dance</option>
        </select>
      </div>
    </div>
  );
};

export default CategoryFilter;

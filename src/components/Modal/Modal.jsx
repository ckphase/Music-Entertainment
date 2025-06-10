import React from 'react';
import './Modal.css';

const Modal = ({ image, onClose }) => {
  // If no image is selected, don't render the modal
  if (!image) return null;

  // Handle overlay click to close the modal
  const handleOverlayClick = () => {
    onClose();
  };

  // Prevent modal content from closing on internal clicks
  const handleContentClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-content" onClick={handleContentClick}>
        <button
          className="modal-close"
          aria-label="Close Modal"
          onClick={onClose}
        >
          ×
        </button>
        <div className="modal-body">
          <img
            src={image.url}
            alt={image.name || 'Modal'}
            className="modal-image"
          />
          <div className="modal-details">
            <h2 className="modal-title">{image.name}</h2>
            <p className="modal-description">{image.description}</p>
            {image.awards && (
              <p className="modal-awards">
                <strong>Awards:</strong> {image.awards}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;

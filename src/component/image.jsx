import React, { useState } from 'react';

const image = ({ item }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <div className="card-body">
        <p>asdsd</p>
        <img
          src="./src/assets/Logo/logoIYSA.WebP"
          alt=""
          style={{ cursor: 'pointer' }}
          onClick={openModal}
        />
      </div>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <img src="./src/assets/Logo/logoIYSA.WebP" alt="" />
          </div>
        </div>
      )}
    </div>
  );
};

export default image;

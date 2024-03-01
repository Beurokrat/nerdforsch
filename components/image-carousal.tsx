// components/MasonryGrid.tsx

import React, { useState } from 'react';

interface MasonryGridProps {
  images: string[];
}

const MasonryGrid: React.FC<MasonryGridProps> = ({ images }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  const openModal = (image: string) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {images.map((image, index) => (
        <div key={index} className="relative cursor-pointer" onClick={() => openModal(image)}>
          <img src={image} alt={`Masonry item ${index}`} className="w-full h-full object-cover" />
        </div>
      ))}
      {isModalOpen && (
        <div className="md:mt-10 fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
          <div className="flex items-center justify-center min-h-screen">
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
            <div className="inline-block align-middle bg-black rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:w-1/2 sm:h-1/2">
              <div className="bg-black px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <img src={selectedImage} alt="Selected" className="w-full h-auto" />
                  </div>
                </div>
              </div>
              <div className="bg-blackpx-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button type="button" className="mt-3 cursor-pointer sm:text-xl font-bold text-center sm:m-5 md:m-10 md:ml-auto p-2 md:px-5 border-2 border-white text-white" onClick={closeModal}>
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MasonryGrid;

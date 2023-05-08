import React, { useState } from 'react';
import Modal from './lib/Modal';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onCloseModal = () => {
    setIsModalOpen(false);
  };

  const onAfterOpen = () => {
    console.log('i am Open');
  };

  const onAfterClose = () => {
    console.log('i am Close');
  };

  return (
    <div>
      <button onClick={() => setIsModalOpen(true)}>open</button>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={onCloseModal}
        shouldCloseOnEsc={true}
        onAfterOpen={onAfterOpen}
        onAfterClose={onAfterClose}
        zIndex={2}
      />
    </div>
  );
}

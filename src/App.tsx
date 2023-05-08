import React, { useState } from "react";
import { Modal } from "react-wus-modal";
import styled from "styled-components";

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onCloseModal = () => {
    setIsModalOpen(false);
  };

  const onAfterOpen = () => {
    console.log("i am Open");
  };

  const onAfterClose = () => {
    console.log("i am Close");
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
      >
        <Form>
          <button onClick={onCloseModal}>close</button>
          <input type="text" />
        </Form>
      </Modal>
    </div>
  );
}

const Form = styled.form`
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  display: fixed;
  width: 380px;
  height: 600px;
  position: absolute;
  padding: 30px;
  background-color: white;
  z-index: 3;
`;

# React-Wus-Modal

## Installation

```
$ npm i --save react-wus-modal
$ yarn add react-wus-modal
```

## API documentation

---

### Documentation

#### isOpen : 모달이 활성화 되어 있는 지 Boolean 값으로 확인합니다.

#### onAfterOpen?: 모달이 켜진 후 실행되는 함수를 받습니다.

#### onAfterClose?: 모달이 꺼진 후 실행되는 함수를 받습니다.

#### onRequestClose?: 모달을 비활성화 하는 함수를 받습니다.

#### ariaLabel?: 콘텐츠가 무엇을 의미하는 지 String 값으로 받습니다.

#### zIndex?: CSS의 z-index을 Number 값으로 받습니다.

#### shouldCloseOnEsc?: Esc로 모달을 끌 수 있도록 활성화 할 지 Boolean 값으로 확인합니다.

---

### Props interface

```jsx
  isOpen: boolean;
  onAfterOpen?: () => void;
  onAfterClose?: () => void;
  onRequestClose?: () => void;
  ariaLabel?: string;
  zIndex?: number;
  shouldCloseOnEsc?: boolean;
```

---

## Examples

```jsx
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
```

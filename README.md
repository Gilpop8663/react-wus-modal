# React-Wus-Modal

## Installation

```
$ npm i --save react-wus-modal
$ yarn add react-wus-modal
```

## API documentation

---

### Documentation

#### isOpen : Boolean describing if the modal should be shown or not.

#### onAfterOpen: Function that will be run after the modal has opened.

#### onAfterClose: Function that will be run after the modal has closed.

#### onRequestClose?: Function that will be run when the modal is requested to be closed (either by clicking on overlay or pressing ESC).

#### ariaLabel?: Content Description

#### zIndex?: Set z-index

#### shouldCloseOnEsc?: Boolean indicating if pressing the esc key should close the modal

---

### Props interface

```
  isOpen: boolean;
  onAfterOpen?: () => void;
  onAfterClose?: () => void;
  onRequestClose?: () => void;
  ariaLabel?: string;
  zIndex?: number;
  shouldCloseOnEsc?: boolean;
```

---

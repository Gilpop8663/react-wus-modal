import styled from 'styled-components';

interface ModalWrapperProps {
  isOpen: boolean;
  zIndex?: number;
}

const DEFAULT_MODAL_Z_INDEX = 1;

export const Wrapper = styled.div<ModalWrapperProps>`
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: ${({ zIndex }) => (zIndex ? zIndex : DEFAULT_MODAL_Z_INDEX)};
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #000000b2;
  opacity: 0.5;
`;

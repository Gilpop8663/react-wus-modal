import React, { type PropsWithChildren } from 'react';
import ModalContent from './ModalContent';

interface ModalProps extends PropsWithChildren {
  isOpen: boolean;
  onRequestClose?: () => void;
  ariaLabel?: string;
  zIndex?: number;
  shouldCloseOnEsc?: boolean;
  onAfterOpen?: () => void;
  onAfterClose?: () => void;
}

export default function Modal({
  isOpen,
  zIndex,
  ariaLabel,
  onRequestClose,
  onAfterOpen,
  onAfterClose,
  shouldCloseOnEsc,
  children,
}: ModalProps) {
  return (
    <>
      {isOpen && (
        <ModalContent
          onRequestClose={onRequestClose}
          shouldCloseOnEsc={shouldCloseOnEsc}
          ariaLabel={ariaLabel}
          onAfterOpen={onAfterOpen}
          onAfterClose={onAfterClose}
          zIndex={zIndex}>
          {children}
        </ModalContent>
      )}
    </>
  );
}

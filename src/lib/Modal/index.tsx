import React, { type PropsWithChildren } from 'react';
import * as S from './styled';

interface ModalProps extends PropsWithChildren {
  isOpen: boolean;
  onClose?: () => void;
  ariaLabel?: string;
  zIndex?: number;
}

export default function Modal({
  isOpen,
  onClose,
  ariaLabel,
  children,
}: ModalProps) {
  return (
    <S.Wrapper isOpen={isOpen} aria-label={ariaLabel}>
      <S.Overlay onClick={onClose} />
      {children}
    </S.Wrapper>
  );
}

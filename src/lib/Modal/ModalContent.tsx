import React, { useEffect, type PropsWithChildren, useCallback } from 'react';
import * as S from './styled';

interface ModalProps extends PropsWithChildren {
  onAfterOpen?: () => void;
  onAfterClose?: () => void;
  onRequestClose?: () => void;
  ariaLabel?: string;
  zIndex?: number;
  shouldCloseOnEsc?: boolean;
}

export default function ModalContent({
  onRequestClose,
  onAfterOpen,
  onAfterClose,
  ariaLabel,
  shouldCloseOnEsc,
  children,
}: ModalProps) {
  const closeOnEsc = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === 'Escape' && onRequestClose) {
        onRequestClose();
      }
    },
    [onRequestClose]
  );

  useEffect(() => {
    if (shouldCloseOnEsc) {
      window.addEventListener('keydown', closeOnEsc);

      return () => window.removeEventListener('keydown', closeOnEsc);
    }
  }, [shouldCloseOnEsc, closeOnEsc]);

  useEffect(() => {
    if (onAfterOpen) {
      onAfterOpen();
    }
  }, [onAfterOpen]);

  useEffect(() => {
    if (onAfterClose) {
      return () => onAfterClose();
    }
  }, [onAfterClose]);

  return (
    <S.Wrapper aria-label={ariaLabel}>
      <S.Overlay onClick={onRequestClose} />
      {children}
    </S.Wrapper>
  );
}

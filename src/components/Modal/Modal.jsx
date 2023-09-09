import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Backdrop, StyledModal } from './Modal.styled';
import { ContactsForm } from 'components';
import { TiTimes } from 'react-icons/ti';

const modalRoot = document.getElementById('modal');

function Modal({ closeModal }) {
  const handleBackdropClose = event => {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  };

  useEffect(() => {
    const handleKeyDown = event => {
      if (event.code === 'Escape') {
        closeModal();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [closeModal]);

  return createPortal(
    <Backdrop onClick={handleBackdropClose}>
      <StyledModal>
        <button
          title="Close modal"
          className="closeModalBtn"
          type="button"
          onClick={closeModal}
        >
          <TiTimes size={20} />
        </button>
        <ContactsForm closeModal={closeModal} />
      </StyledModal>
    </Backdrop>,
    modalRoot
  );
}

export default Modal;

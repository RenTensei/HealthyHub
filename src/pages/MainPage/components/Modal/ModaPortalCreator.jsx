import { useCallback, useEffect } from 'react';
import ReactDOM from 'react-dom';

import styles from './ModalPortal.module.scss';

const ModalPortal = ({ isShowing, hide, children }) => {
  document.body.style.overflow = 'hidden';
  const handleBackdropClick = event => {
    if (event.target === event.currentTarget) {
      hide();
    }
  };

  const handleKeydown = useCallback(
    e => {
      if (e.code === 'Escape') {
        hide();
      }
    },
    [hide]
  );

  useEffect(() => {
    if (isShowing) {
      window.addEventListener('keydown', handleKeydown);
    }

    return () => {
      window.removeEventListener('keydown', handleKeydown);
    };
  }, [handleKeydown, isShowing]);

  if (!isShowing) {
    document.body.style.overflow = 'auto';

    return null;
  }

  return ReactDOM.createPortal(
    <div className={styles.modal_overlay} onClick={handleBackdropClick}>
      <div className={styles.modal_portal} />
      <div
        className="modal-wrapper"
        aria-modal
        aria-hidden
        tabIndex={-1}
        role="dialog"
      >
        <div className="modal">
          <div className="modal-header"></div>
          {children}
        </div>
      </div>
    </div>,
    document.body
  );
};

export default ModalPortal;

import ReactDOM from 'react-dom';

import styles from './ModalPortal.module.scss';
import { useCallback, useEffect } from 'react';

const ModalPortal = ({ isShowing, hide, children }) => {
  document.body.style.overflow = 'hidden';

  const handleKeydown = useCallback(
    e => {
      console.log(isShowing);
      if (e.code === 'Escape') {
        hide();
      }
    },
    [hide, isShowing]
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
    <div className={styles.modal_overlay}>
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
          <p>Hello, I`m a modal.</p>
          {children}
        </div>
      </div>
    </div>,
    document.body
  );
};

export default ModalPortal;

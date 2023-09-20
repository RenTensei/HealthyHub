import styles from '../DashboardPage.module.scss';
import PropTypes from 'prop-types';
import { useEffect } from "react";

const Modal = ({onClose, children}) => {
  useEffect(() => {
    const handleOnClose = e => {
      if (e.code === "Escape") {
        onClose();
      }
    };

    window.addEventListener('keydown', handleOnClose);

    return () => {
      window.removeEventListener('keydown', handleOnClose);
    };
    
  }, [onClose]);

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  return (
    <div  onClick={(e) => handleBackdropClick(e)}>
      <div className={styles.modal}>
        {children}
      </div>
    </div>
  );
};

Modal.propTypes = {
  onClose: PropTypes.func.isRequired
};

export default Modal;
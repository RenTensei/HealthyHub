import styles from './Modal.module.scss'
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

  return (
    <div className={styles.modal}>
      {children}
    </div>
  );
};

Modal.propTypes = {
  onClose: PropTypes.func.isRequired
};

export default Modal;
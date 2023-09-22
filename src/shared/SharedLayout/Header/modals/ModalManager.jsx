import { useModalContext } from '../../../../context/ModalContext';
import styles from './ModalManager.module.scss';
import ModalGoal from './ModalGoal';
import ModalWeight from './ModalWeight';
import ModalUser from './ModalUser';
import ModalMenuTablet from './ModalMenuTablet';

const ModalList = {
  ModalGoal,
  ModalWeight,
  ModalUser,
  ModalMenuTablet,
};

const ModalManager = () => {
  const { modal, open, closeModal } = useModalContext();

  if (!modal) {
    return null;
  }
  const Modal = ModalList[modal.name];

  return (
    <div className={styles.header_container}>
      <Modal open={open} onClose={closeModal} />
    </div>
  );
};

export default ModalManager;

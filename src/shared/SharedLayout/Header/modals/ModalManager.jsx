import styles from './ModalManager.module.scss';

import { AnimatePresence, motion } from 'framer-motion';
import ModalGoal from './ModalGoal';
import ModalWeight from './ModalWeight';
import ModalUser from './ModalUser';
import ModalMenuTablet from './ModalMenuTablet';
import ModalRecordMeal from '@/pages/MainPage/Modals/ModalRecordMeal/ModalRecordMeal';
import { useModalContext } from '@/hooks/useModalContext';

const ModalList = {
  ModalGoal,
  ModalWeight,
  ModalUser,
  ModalMenuTablet,
  ModalRecordMeal,
};

const ModalManager = () => {
  const { modal, open, closeModal } = useModalContext();

  const Modal = modal ? ModalList[modal?.name] : null;
  const className = modal?.mealType
    ? styles.header_container_fullscreen
    : styles.header_container;

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.3 }}
          className={className}
        >
          <Modal open={open} onClose={closeModal} mealType={modal.mealType} />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ModalManager;

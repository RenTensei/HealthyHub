import { AnimatePresence, motion } from 'framer-motion';

import ModalGoal from './ModalGoal';
import styles from './ModalManager.module.scss';
import ModalMenuTablet from './ModalMenuTablet';
import ModalUser from './ModalUser';
import ModalWeight from './ModalWeight';

import { useModalContext } from '@/hooks/useModalContext';
import ModalRecordMeal from '@/pages/MainPage/Modals/ModalRecordMeal/ModalRecordMeal';

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
          <Modal
            open={open}
            onClose={closeModal}
            mealType={modal.mealType}
            mealId={modal.mealId}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ModalManager;

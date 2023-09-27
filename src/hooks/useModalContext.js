import { useContext } from 'react';

import { ModalContext } from '@/context/ModalContext';

export const useModalContext = () => useContext(ModalContext);

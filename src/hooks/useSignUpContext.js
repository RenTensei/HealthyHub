import { useContext } from 'react';

import { SignUpContext } from '@/pages/SignUpPage/SignUpPage';

export const useSignUpContext = () => useContext(SignUpContext);

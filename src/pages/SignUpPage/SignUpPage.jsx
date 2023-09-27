import { createContext, useState } from 'react';

import BodyParameters from './components/BodyParameters';
import SelectGender from './components/SelectGender';
import SignUpFormPage from './components/SignUpFormPage';
import YourActivityPage from './components/YourActivityPage';
import YourGoal from './components/YourGoal';

const stages = [
  SignUpFormPage,
  YourGoal,
  SelectGender,
  BodyParameters,
  YourActivityPage,
];

export const SignUpContext = createContext();

const SignUpPage = () => {
  const [currentStage, setCurrentStage] = useState(0);
  const [signUpData, setSignUpData] = useState({
    name: undefined,
    email: undefined,
    password: undefined,
    goal: undefined,
    gender: undefined,
    age: undefined,
    height: undefined,
    weight: undefined,
    physicalActivityRatio: undefined,
  });
  console.log(signUpData);

  const prevStage = () => setCurrentStage(s => s - 1);
  const nextStage = () => setCurrentStage(s => s + 1);
  const addSignUpData = values => setSignUpData(s => ({ ...s, ...values }));

  const CurrentStage = stages[currentStage];

  return (
    <SignUpContext.Provider
      value={{ prevStage, nextStage, signUpData, addSignUpData }}
    >
      <CurrentStage />
    </SignUpContext.Provider>
  );
};

export default SignUpPage;

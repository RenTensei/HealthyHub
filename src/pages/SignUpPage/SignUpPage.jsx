import YourGoal from './components/YourGoal';
import SelectGender from './components/SelectGender';
import BodyParameters from './components/BodyParameters';
import YourActivityPage from './components/YourActivityPage';
import SignUpFormPage from './components/SignUpFormPage';
import { createContext, useState } from 'react';

const stages = [
  SignUpFormPage,
  YourGoal,
  SelectGender,
  BodyParameters,
  YourActivityPage,
];

export const SignUpContext = createContext();

// TODO: keep data in forms when switching pages
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

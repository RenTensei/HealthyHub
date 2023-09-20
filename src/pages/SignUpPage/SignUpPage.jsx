import YourGoal from './components/YourGoal';
import SelectGender from './components/SelectGender';
import BodyParameters from './components/BodyParameters';
import YourActivityPage from './components/YourActivityPage';
import SignUpFormPage from './components/SignUpFormPage';

const SignUpPage = () => {
  return (
    <>
      <SignUpFormPage />
      <YourGoal />
      <SelectGender />
      <BodyParameters />
      <YourActivityPage />
    </>
  );
};

export default SignUpPage;

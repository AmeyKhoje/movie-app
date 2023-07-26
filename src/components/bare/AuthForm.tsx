import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import Box from '@mui/material/Box';
import ControlledInput from '../form-elements/controlled-input/ControlledInput';
import useYupValidationResolver from 'src/hooks/useYupValidationResolver';
import userSchema from 'src/schemas/User';
import MovieAppInput from '../form-elements/input/MovieAppInput';
import Button from '../form-elements/button/Button';
import AuthContext from 'src/context/AuthContext';
import { User } from 'src/interfaces/Schemas';
import firebase from 'src/firebase/Config';

const AuthForm = () => {
  const resolver = useYupValidationResolver(userSchema);

  const { control, reset, handleSubmit } = useForm<User>({
    resolver,
  });

  const { mode, modeHandler } = useContext(AuthContext);

  const handleModeChange = () => {
    reset({
      email: '',
      password: '',
      userName: '',
    });
    modeHandler(mode);
  };

  const handleFormSubmit = (data: any) => {
    const database = firebase.firestore();
    const dbRef = database.collection('users').add(data);
    dbRef
      .then((success) => {
        reset({
          email: '',
          password: '',
          userName: '',
        });
      })
      .catch((error) => {
        console.log('error', error);
      });
  };

  return (
    <Box>
      <ControlledInput
        Component={MovieAppInput}
        control={control}
        name="userName"
        placeholder="Enter user name"
        type="text"
      />
      <ControlledInput
        Component={MovieAppInput}
        control={control}
        name="email"
        placeholder="Enter E-mail"
        type="email"
      />
      <ControlledInput
        Component={MovieAppInput}
        control={control}
        name="password"
        placeholder="Enter password"
        type="password"
      />
      <Box justifyContent={'center'} display={'flex'} width={'100%'}>
        <Button
          onClick={handleSubmit(handleFormSubmit)}
          title={mode === 'LOGIN' ? 'Login' : 'Register'}
          variant="PRIMARY"
        />
      </Box>
      <Button
        title={`Go to ${mode === 'LOGIN' ? 'Register' : 'Login'}`}
        variant="LIGHT"
        onClick={handleModeChange}
      />
    </Box>
  );
};

export default AuthForm;

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
import {
  collection,
  addDoc,
  getDocs,
  getDoc,
  doc,
  query,
  where,
  getFirestore,
} from 'firebase/firestore/lite';
import app, { db } from 'src/firebase/Config';
import { GlobalContextType } from 'src/interfaces/Component';
import GlobalContext from 'src/context/GlobalContext';
import { loginUser, saveUser } from 'src/utils/DbActions';
import { useNavigate } from 'react-router-dom';

const AuthForm = () => {
  const { handleOpenToast, toastState } =
    useContext<GlobalContextType>(GlobalContext);
  const resolver = useYupValidationResolver(userSchema);

  const { control, reset, handleSubmit } = useForm<User>({
    resolver,
  });

  const { mode, modeHandler } = useContext(AuthContext);
  const navigate = useNavigate();

  const resetForm = () => {
    reset({
      email: '',
      password: '',
      userName: '',
    });
  };

  const handleModeChange = () => {
    resetForm();
    modeHandler(mode);
  };

  const handleFormSubmit = async (data: any) => {
    if (mode === 'LOGIN') {
      const loginResponse = await loginUser(data);
      if (loginResponse.success) {
        handleOpenToast({
          toastState: {
            ...toastState,
            open: true,
            message: 'Logged in successfully',
          },
        });
        navigate('/home', {
          replace: true,
        });
      } else {
        handleOpenToast({
          toastState: {
            ...toastState,
            open: true,
            message:
              'Failed to Login. Please try again later or try registering in case you dont have account',
          },
        });
      }
      return;
    }
    saveUser(data)
      .then((response: any) => {
        if (response?.success) {
          resetForm();
          handleOpenToast({
            toastState: {
              ...toastState,
              open: true,
              message: 'User added successfully',
            },
          });
        }
        if (response?.success === false) {
          handleOpenToast({
            toastState: {
              ...toastState,
              open: true,
              message: 'Failed to add user. Please try again later',
            },
          });
        }
      })
      .catch((error: any) => {
        if (!error?.alreadyExists) {
          resetForm();
          handleOpenToast({
            toastState: {
              ...toastState,
              open: true,
              message: 'User already exists. Please login',
            },
          });
        }
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
      <Box
        justifyContent={'center'}
        display={'flex'}
        width={'100%'}
        paddingTop={'2rem'}
      >
        <Button
          title={`Go to ${mode === 'LOGIN' ? 'Register' : 'Login'}`}
          variant="LIGHT"
          onClick={handleModeChange}
        />
      </Box>
    </Box>
  );
};

export default AuthForm;

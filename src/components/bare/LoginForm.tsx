import { useForm } from 'react-hook-form';
import Box from '@mui/material/Box';
import ControlledInput from '../form-elements/controlled-input/ControlledInput';
import useYupValidationResolver from 'src/hooks/useYupValidationResolver';
import userSchema from 'src/schemas/User';
import MovieAppInput from '../form-elements/input/MovieAppInput';
import Button from '../form-elements/button/Button';

const LoginForm = () => {
  const resolver = useYupValidationResolver(userSchema);
  const { control } = useForm({ resolver });

  return (
    <Box>
      <ControlledInput
        Component={MovieAppInput}
        control={control}
        name="username"
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
        <Button title="Submit" variant="PRIMARY" />
      </Box>
    </Box>
  );
};

export default LoginForm;

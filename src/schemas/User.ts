import { object, string } from 'yup';

const userSchema = object({
  username: string().required('User name is required'),
  email: string().required('Email is required'),
  password: string()
    .required()
    .min(8, 'Password should be minimum 8 characters')
    .max(25, 'Password cannot be greater tan 25 characters'),
});

export default userSchema;

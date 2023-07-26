import userSchema from 'src/schemas/User';
import * as yup from 'yup';
// export type User = {
//   username: string;
//   email: string;
//   password: string;
// };

interface User extends yup.InferType<typeof userSchema> {}

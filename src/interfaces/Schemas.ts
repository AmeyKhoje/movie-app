import userSchema from 'src/schemas/User';
import * as yup from 'yup';
// export type User = {
//   username: string;
//   email: string;
//   password: string;
// };

export interface User extends yup.InferType<typeof userSchema> {}

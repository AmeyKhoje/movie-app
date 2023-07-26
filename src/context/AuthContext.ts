import { createContext } from 'react';
import { AuthModes } from 'src/interfaces/Component';

type AuthContextType = {
  mode: AuthModes;
  modeHandler: (mode: AuthModes) => void;
};

const AuthContext = createContext<AuthContextType>({
  mode: 'LOGIN',
  modeHandler: (mode: AuthModes) => {},
});

export default AuthContext;

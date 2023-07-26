import { createContext } from 'react';
import { AuthModes } from 'src/interfaces/Component';

type AuthContextType = {
  mode: AuthModes;
  authHandler: (mode: AuthModes) => void;
  modeHandler: (mode: AuthModes) => void;
};

const AuthContext = createContext<AuthContextType>({
  authHandler: (mode: AuthModes) => {},
  mode: 'LOGIN',
  modeHandler: (mode: AuthModes) => {},
});

export default AuthContext;

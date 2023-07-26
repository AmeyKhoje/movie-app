import { useCallback, useState } from 'react';
import AuthForm from 'src/components/bare/AuthForm';
import Button from 'src/components/form-elements/button/Button';
import AuthCard from 'src/components/ui-emenets/auth-card/AuthCard';
import AuthContext from 'src/context/AuthContext';
import { AuthModes } from 'src/interfaces/Component';

const Auth = () => {
  const [mode, setMode] = useState<AuthModes>('LOGIN');

  const modeHandler = useCallback(() => {
    setMode(mode === 'LOGIN' ? 'REGISTER' : 'LOGIN');
  }, [mode]);

  return (
    <AuthContext.Provider value={{ mode, modeHandler }}>
      <AuthCard>
        <AuthForm />
      </AuthCard>
    </AuthContext.Provider>
  );
};

export default Auth;

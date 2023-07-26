import { useContext } from 'react';
import Paper from '@mui/material/Paper';
import { withStyles } from '@mui/styles';
import authCardStyles from './AuthCardStyles';
import { AuthCardProps } from 'src/interfaces/FormComponents';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import AuthContext from 'src/context/AuthContext';

const AuthCard = ({ children, classes }: AuthCardProps) => {
  const { mode } = useContext(AuthContext);

  return (
    <Paper className={`${classes?.root}`}>
      <Box className={`${classes?.titleWrapper}`}>
        <Typography variant="h2" align="center" className={`${classes?.title}`}>
          {mode === 'LOGIN' ? 'Login' : 'Register'}
        </Typography>
      </Box>
      <Box>{children}</Box>
    </Paper>
  );
};

export default withStyles(authCardStyles)(AuthCard);

import Paper, { PaperOwnProps, PaperProps } from '@mui/material/Paper';
import { WithStyles, withStyles } from '@mui/styles';
import { ReactNode } from 'react';
import authCardStyles from './AuthCardStyles';
import movieAppInputStyles from 'src/components/form-elements/input/MovieAppInputStyles';
import { AuthCardProps } from 'src/interfaces/FormComponents';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const AuthCard = ({ children, classes }: AuthCardProps) => {
  return (
    <Paper className={`${classes?.root}`}>
      <Box className={`${classes?.titleWrapper}`}>
        <Typography variant="h2" align="center" className={`${classes?.title}`}>
          Login
        </Typography>
      </Box>
      <Box>{children}</Box>
    </Paper>
  );
};

export default withStyles(authCardStyles)(AuthCard);

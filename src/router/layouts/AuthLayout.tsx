import { Outlet } from 'react-router-dom';
import Box from '@mui/material/Box';
import { withStyles } from '@mui/styles';
import { LayoutProps } from 'src/interfaces/Component';
import layoutStyles from './LayoutStyles';

const AuthLayout = ({ classes }: LayoutProps) => {
  return (
    <Box className={`${classes?.authRoot}`}>
      <Outlet />
    </Box>
  );
};

export default withStyles(layoutStyles)(AuthLayout);

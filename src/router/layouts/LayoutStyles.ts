import { Theme } from '@mui/material';
import { createStyles } from '@mui/styles';

const layoutStyles = (theme: Theme) =>
  createStyles({
    authRoot: {
      width: '100%',
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
    },
  });

export default layoutStyles;

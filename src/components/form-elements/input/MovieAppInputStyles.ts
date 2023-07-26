import { Theme } from '@mui/material';
import { createStyles } from '@mui/styles';

const movieAppInputStyles = (theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      padding: theme.spacing('1rem', '0.8rem'),
      background: theme.palette.grey.A100,
      color: theme.palette.common.black,
      fontSize: theme.typography.subtitle1.fontSize,
      fontFamily: 'Roboto, sans-serif',
      borderRadius: '0.5rem',
    },
    muiContainer: {
      width: '100%',
    },
    container: {
      paddingBottom: '2.5rem',
      '&:lastChild': {
        paddingBottom: '0',
      },
    },
  });

export default movieAppInputStyles;

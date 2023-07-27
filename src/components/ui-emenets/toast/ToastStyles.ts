import { createStyles } from '@mui/styles';
import { Theme } from '@mui/material/styles';

const toastStyles = ({ typography, palette, spacing }: Theme) =>
  createStyles({
    root: {
      fontSize: typography.subtitle1.fontSize,
      fontWeight: typography.fontWeightLight,
      backgroundColor: palette.secondary.light,
      color: palette.common.black,
      display: 'flex',
      justifyContent: 'center',
      borderRadius: '1rem',
      boxShadow: '0 0 1rem 0 rgba(0,0,0,0.1)',
      padding: spacing('0.7rem', '2rem'),
      minWidth: '5rem',
    },
  });

export default toastStyles;

import { Theme, createStyles } from '@mui/material';
import { WithStyles } from '@mui/styles';

export const buttonStyles = ({ palette, typography, spacing }: Theme) =>
  createStyles({
    root: {
      backgroundColor: palette.grey.A100,
      color: palette.common.black,
      fontSize: typography.subtitle1.fontSize,
      fontWeight: typography.fontWeightMedium,
      padding: spacing('1rem', '2rem'),
      borderRadius: '0.5rem',
    },
    primary: {
      backgroundColor: palette.primary.main,
      color: palette.common.white,
    },
    secondary: {
      backgroundColor: palette.secondary.main,
      color: palette.common.black,
    },
  });

interface Props extends WithStyles<typeof buttonStyles> {}

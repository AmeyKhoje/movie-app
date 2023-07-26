import { Theme } from '@mui/material';
import { createStyles } from '@mui/styles';

const authCardStyles = ({ spacing, palette, typography }: Theme) =>
  createStyles({
    root: {
      width: '50rem',
      padding: spacing('5rem', '3rem'),
      backgroundColor: palette.primary.light,
      marginTop: '10rem',
      borderRadius: '0.8rem',
      boxShadow: 'none',
    },
    titleWrapper: {
      paddingBottom: '2rem',
    },
    title: {
      fontWeight: typography.fontWeightBold,
    },
  });

export default authCardStyles;

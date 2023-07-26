import { useMemo } from 'react';
import { ButtonBase } from '@mui/material';
import { ButtonProps } from 'src/interfaces/FormComponents';
import { buttonStyles } from './ButtonStyles';
import withStyles from '@mui/styles/withStyles/withStyles';
import { VARIANTS } from 'src/utils/constants';

const Button = ({
  title,
  onClick,
  variant = 'PRIMARY',
  className,
  classes,
}: ButtonProps) => {
  const classNames = useMemo(() => {
    let str = '';
    if (classes && variant) {
      if (variant === VARIANTS.PRIMARY) {
        str = str + classes.primary;
      }
      if (variant === VARIANTS.SECONDARY) {
        str = str + classes.secondary;
      }
    }
    return str;
  }, [classes, variant]);

  return (
    <ButtonBase className={`${classes.root} ${classNames}`} onClick={onClick}>
      {title}
    </ButtonBase>
  );
};

export default withStyles(buttonStyles)(Button);

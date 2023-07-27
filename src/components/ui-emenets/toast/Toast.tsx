import { useContext } from 'react';
import Snackbar from '@mui/material/Snackbar/Snackbar';
import { GlobalContextType, ToastProps } from 'src/interfaces/Component';
import GlobalContext from 'src/context/GlobalContext';
import { WithStyles, withStyles } from '@mui/styles';
import toastStyles from './ToastStyles';

const Toast = ({ classes }: WithStyles<typeof toastStyles>) => {
  const {
    toastState: { open, message, anchorOrigin, onClose, autoHideDuration },
  } = useContext<GlobalContextType>(GlobalContext);
  return (
    <Snackbar
      open={open}
      onClose={onClose}
      autoHideDuration={autoHideDuration}
      message={message}
      anchorOrigin={anchorOrigin}
      ContentProps={{
        className: `${classes.root}`,
      }}
    />
  );
};

export default withStyles(toastStyles)(Toast);

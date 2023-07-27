import { createContext } from 'react';
import { GlobalContextType } from 'src/interfaces/Component';

const GlobalContext = createContext<GlobalContextType>({
  toastState: {
    open: false,
    message: 'Test Notification',
    onClose: () => {},
    anchorOrigin: {
      horizontal: 'right',
      vertical: 'top',
    },
    autoHideDuration: 5000,
  },
  handleOpenToast: (state: Pick<GlobalContextType, 'toastState'>) => {},
  isMainLoader: false,
});

export default GlobalContext;

import { ReactNode, useState, useCallback } from 'react';
import GlobalContext from 'src/context/GlobalContext';
import { GlobalContextType } from 'src/interfaces/Component';

const GlobalContextProvider = ({ children }: { children: ReactNode }) => {
  const [globalState, setGlobalState] = useState<
    Omit<GlobalContextType, 'onClose' | 'handleOpenToast'>
  >({
    toastState: {
      anchorOrigin: {
        horizontal: 'center',
        vertical: 'top',
      },
      autoHideDuration: 5000,
      message: 'In app notification',
      open: false,
    },
    isMainLoader: false,
  });

  const onToastClose = () => {
    setGlobalState({
      ...globalState,
      toastState: {
        ...globalState.toastState,
        open: false,
      },
    });
  };

  const handleOpenToast = useCallback(
    ({ toastState }: Pick<GlobalContextType, 'toastState'>) => {
      setGlobalState({
        ...globalState,
        toastState,
      });
    },
    []
  );

  return (
    <GlobalContext.Provider
      value={{
        toastState: { ...globalState.toastState, onClose: onToastClose },
        isMainLoader: globalState.isMainLoader,
        handleOpenToast,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;

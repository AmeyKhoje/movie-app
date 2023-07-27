import { ReactNode } from 'react';
import { BoxProps, SnackbarProps } from '@mui/material';
import { WithStyles } from '@mui/styles';
import layoutStyles from 'src/router/layouts/LayoutStyles';

export type LayoutProps = BoxProps & WithStyles<typeof layoutStyles> & {};

export type AuthModes = 'LOGIN' | 'REGISTER';

export type ToastProps = SnackbarProps & {};

export type GlobalContextType = {
  toastState: Pick<
    SnackbarProps,
    'open' | 'message' | 'onClose' | 'anchorOrigin' | 'autoHideDuration'
  >;
  isMainLoader: boolean;
  handleOpenToast: (state: Pick<GlobalContextType, 'toastState'>) => void;
};

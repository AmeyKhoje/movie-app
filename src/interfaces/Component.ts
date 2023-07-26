import { ReactNode } from 'react';
import { BoxProps } from '@mui/material';
import { WithStyles } from '@mui/styles';
import layoutStyles from 'src/router/layouts/LayoutStyles';

export type LayoutProps = BoxProps & WithStyles<typeof layoutStyles> & {};

export type AuthModes = 'LOGIN' | 'REGISTER';

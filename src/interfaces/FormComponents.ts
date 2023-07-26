import { ReactNode } from 'react';
import {
  ButtonBaseProps,
  InputProps,
  PaperOwnProps,
  InputBaseProps,
} from '@mui/material';
import { WithStyles } from '@mui/styles';
import { buttonStyles } from 'src/components/form-elements/button/ButtonStyles';
import { FieldError } from 'react-hook-form';
import movieAppInputStyles from 'src/components/form-elements/input/MovieAppInputStyles';
import authCardStyles from 'src/components/ui-emenets/auth-card/AuthCardStyles';

export type ButtonProps = Omit<ButtonBaseProps, 'color' | 'size'> &
  WithStyles<typeof buttonStyles> & {
    variant?: 'PRIMARY' | 'SECONDARY' | 'DARK' | 'LIGHT';
  };

export type ControlledInputProps = InputProps & {
  name: string;
  Component: any;
  control: any;
};

export type MovieAppInputProps = InputBaseProps &
  WithStyles<typeof movieAppInputStyles> & {
    errorList: FieldError;
  };

export type AuthCardProps = PaperOwnProps &
  WithStyles<typeof authCardStyles> & {
    children: ReactNode;
  };

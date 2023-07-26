import { Input } from '@mui/material';
import { withStyles } from '@mui/styles';
import { MovieAppInputProps } from 'src/interfaces/FormComponents';
import movieAppInputStyles from './MovieAppInputStyles';

const MovieAppInput = ({
  errorList,
  name,
  onChange,
  value,
  placeholder,
  className,
  autoFocus,
  classes,
  ...rest
}: MovieAppInputProps) => {
  console.log(errorList);

  return (
    <div className={`${classes.container}`}>
      <Input
        name={name}
        value={value}
        placeholder={placeholder || ''}
        className={`${className} ${classes?.muiContainer}`}
        autoFocus={autoFocus}
        inputProps={{
          className: `${classes?.root}`,
        }}
        onChange={onChange}
        {...rest}
      />
      {errorList && <span>{errorList.message}</span>}
    </div>
  );
};

export default withStyles(movieAppInputStyles)(MovieAppInput);

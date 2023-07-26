import { memo } from 'react';
import { Controller } from 'react-hook-form';
import { ControlledInputProps } from 'src/interfaces/FormComponents';

const ControlledInput = memo(
  ({ Component, name, control, placeholder, type }: ControlledInputProps) => {
    return (
      <Controller
        name={name}
        control={control}
        render={({ field: { name, onChange, value }, fieldState }) => {
          console.log(fieldState);

          return (
            <Component
              name={name}
              onChange={onChange}
              value={value}
              error={fieldState?.error}
              placeholder={placeholder}
              type={type}
            />
          );
        }}
      />
    );
  }
);

export default ControlledInput;

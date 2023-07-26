import { memo } from 'react';
import { Controller } from 'react-hook-form';
import { ControlledInputProps } from 'src/interfaces/FormComponents';

const ControlledInput = memo(
  ({ Component, name, control, placeholder, type }: ControlledInputProps) => {
    return (
      <Controller
        name={name}
        render={({
          field: { name, onChange, value },
          fieldState: { error },
        }) => (
          <Component
            name={name}
            onChange={onChange}
            value={value}
            error={error}
            placeholder={placeholder}
            type={type}
          />
        )}
        control={control}
      />
    );
  }
);

export default ControlledInput;

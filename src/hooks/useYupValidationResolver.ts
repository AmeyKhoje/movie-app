import { useCallback } from 'react';
import * as yup from 'yup';

const useYupValidationResolver = <T extends Object>(
  validationSchema: yup.ObjectSchema<T>
) =>
  useCallback(
    async (data: Object) => {
      try {
        const values = await validationSchema.validate(data, {
          abortEarly: true,
        });

        return {
          values,
          errors: {},
        };
      } catch (errors: yup.ValidationError | any) {
        return {
          values: {},
          errors: errors?.inner?.reduce(
            (allErrors: any, currentError: any) => ({
              ...allErrors,
              [currentError?.path]: {
                type: currentError?.type ?? 'validation',
                message: currentError?.message,
              },
            })
          ),
        };
      }
    },
    [validationSchema]
  );

export default useYupValidationResolver;

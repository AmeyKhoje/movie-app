import { useCallback } from 'react';
import * as yup from 'yup';

const useYupValidationResolver = <T extends Object>(
  validationSchema: yup.ObjectSchema<T>
) =>
  useCallback(
    async (data: Object) => {
      try {
        const values = await validationSchema.validate(data, {
          abortEarly: false,
        });

        // validationSchema
        //   .validate(data, {
        //     abortEarly: false,
        //   })
        //   .then((val) => {
        //     console.log('e', val);
        //   })
        //   .catch((re) => {
        //     console.log('e', re?.inner);
        //   });

        return {
          values: values,
          errors: {},
        };
      } catch (errors: any) {
        console.log(errors?.inner);

        return {
          values: {},
          errors: errors?.inner?.length
            ? errors?.inner?.reduce((allErrors: any, currentError: any) => ({
                ...allErrors,
                [currentError?.path]: {
                  type: currentError?.type ?? 'validation',
                  message: currentError?.message,
                },
              }))
            : [],
        };
      }
    },
    [validationSchema]
  );

export default useYupValidationResolver;

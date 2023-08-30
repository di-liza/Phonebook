import * as yup from 'yup';

const contactSchema = yup.object({
  name: yup
    .string()
    .trim()
    .min(2, 'Name must be at least 2 characters')
    .max(32, 'Name must be no more than 32 characters')
    .required('Name is required')
    .matches(
      /^[a-zA-Z0-9\s]*$/,
      'Name can only contain letters, numbers, and spaces'
    ),
  number: yup
    .string()
    .trim()
    .min(2, 'Number must be at least 10 characters')
    .max(32, 'Number must be no more than 10 characters')
    .required('Number is required')
    .matches(
      /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/,
      'Number can only contain numbers and spaces'
    ),
});

export default contactSchema;

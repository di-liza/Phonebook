import { RiLockPasswordFill, RiMailFill } from 'react-icons/ri';

const initialValues = {
  email: '',
  password: '',
};
const loginInputs = [
  {
    label: 'E-mail',
    type: 'text',
    name: 'email',
    placeholder: 'Enter your e-mail address',
    icon: <RiMailFill size={17} />,
  },
  {
    label: 'Password',
    type: 'password',
    name: 'password',
    placeholder: 'Enter your password',
    icon: <RiLockPasswordFill size={17} />,
  },
];

const loginFormData = {
  loginInputs,
  initialValues,
};

export default loginFormData;

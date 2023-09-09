import {
  RiLockPasswordFill,
  RiLoginCircleFill,
  RiMailFill,
} from 'react-icons/ri';

const initialValues = {
  name: '',
  email: '',
  password: '',
};

const registerInputs = [
  {
    label: 'E-mail',
    type: 'text',
    name: 'email',
    placeholder: 'Enter your e-mail address',
    icon: <RiMailFill size={17} />,
  },
  {
    label: 'Name',
    type: 'text',
    name: 'name',
    placeholder: 'Enter your name',
    icon: <RiLoginCircleFill size={17} />,
  },
  {
    label: 'Password',
    type: 'password',
    name: 'password',
    placeholder: 'Enter your password',
    icon: <RiLockPasswordFill size={17} />,
  },
];

const registerFormData = {
  initialValues,
  registerInputs,
};

export default registerFormData;

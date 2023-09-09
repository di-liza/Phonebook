import { FiUser, FiPhone } from 'react-icons/fi';

const initialValues = {
  name: '',
  number: '(123)',
};
const contactInputs = [
  {
    label: 'Name',
    type: 'text',
    name: 'name',
    placeholder: 'Enter contact name',
    icon: <FiUser size={15} />,
  },
  {
    label: 'Number',
    type: 'tel',
    name: 'number',
    placeholder: 'Enter contact number',
    icon: <FiPhone size={15} />,
  },
];

const contactsFormData = {
  initialValues,
  contactInputs,
};

export default contactsFormData;

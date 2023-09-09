import { Container, FormTemplate } from 'components';
import { TiArrowRight } from 'react-icons/ti';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operation';
import { registerSchema } from 'components/schemas';
import { Formik } from 'formik';
import registerFormData from './registerFormData';

function RegisterForm() {
  const dispatch = useDispatch();

  const handleFormSubmit = async (values, { resetForm }) => {
    await dispatch(register(values));
    resetForm();
  };

  return (
    <Container>
      <Formik
        onSubmit={handleFormSubmit}
        initialValues={registerFormData.initialValues}
        validationSchema={registerSchema}
      >
        <FormTemplate
          title={'Sign up'}
          regBtnText={'Create account'}
          inputs={registerFormData.registerInputs}
          linkText={' Sign in'}
          welcomeMessage={' Already have an account?'}
          linkTo={'/login'}
          linkIcon={<TiArrowRight size={17} />}
        />
      </Formik>
    </Container>
  );
}

export default RegisterForm;

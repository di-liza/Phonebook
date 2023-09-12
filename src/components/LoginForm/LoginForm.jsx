import { Container, FormTemplate } from 'components';
import { loginSchema } from 'components/schemas';
import { Formik } from 'formik';
import { TiArrowRight } from 'react-icons/ti';
import { useDispatch } from 'react-redux';
import { login } from 'redux/auth/operation';
import loginFormData from './loginFormData.js';

function LoginForm() {
  const dispatch = useDispatch();

  const handleFormSubmit = async (values, { resetForm }) => {
    await dispatch(login(values));
    resetForm();
  };

  return (
    <Container>
      <Formik
        initialValues={loginFormData.initialValues}
        validationSchema={loginSchema}
        onSubmit={handleFormSubmit}
      >
        <FormTemplate
          title={'Sing in'}
          inputs={loginFormData.loginInputs}
          welcomeMessage={'New to Phone Book?'}
          linkText={'Create an account'}
          linkTo={'/register'}
          linkIcon={<TiArrowRight size={20} />}
        />
      </Formik>
    </Container>
  );
}

export default LoginForm;

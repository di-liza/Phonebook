import { Container } from 'components';
import { TiArrowRight } from 'react-icons/ti';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operation';
import { FormStyled, InputStyled, StyledLink } from './RegisterForm.styled';

import { registerSchema } from 'components/schemas';
import { ErrorMessage, Formik } from 'formik';
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
        initialValues={initialValues}
        validationSchema={registerSchema}
      >
        <FormStyled>
          <h2 className="title">Sign up</h2>
          <label className="styled-label">
            <span>
              <RiMailFill size={17} />
              E-mail
            </span>
            <ErrorMessage
              name="email"
              render={message => <p className="errorMessage">{message}</p>}
            />
            <InputStyled
              type="e-mail"
              name="email"
              placeholder="Enter your e-mail adress"
              required
            />
          </label>
          <label className="styled-label">
            <span>
              <RiLoginCircleFill size={17} />
              Name
            </span>
            <ErrorMessage
              name="name"
              render={message => <p className="errorMessage">{message}</p>}
            />
            <InputStyled
              type="text"
              name="name"
              placeholder="Think of your username"
              required
            />
          </label>
          <label className="styled-label">
            <span>
              <RiLockPasswordFill size={17} />
              Password
            </span>
            <ErrorMessage
              name="password"
              render={message => <p className="errorMessage">{message}</p>}
            />
            <InputStyled
              type="password"
              name="password"
              placeholder="Think of a strong password of at least 7 characters"
              required
            />
          </label>
          <button className="regBtn" type="submit">
            Create account
          </button>
          <p className="welcomeMessage">
            Already have an account?
            <StyledLink to="/login">
              Sign in <TiArrowRight size={17} />{' '}
            </StyledLink>
          </p>
        </FormStyled>
      </Formik>
    </Container>
  );
}

export default RegisterForm;

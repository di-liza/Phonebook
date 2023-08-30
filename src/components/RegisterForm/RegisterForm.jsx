import { Container } from 'components';
import React from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operation';
import { FormStyled, InputStyled, StyledLink } from './RegisterForm.styled';
import { TiArrowRight } from 'react-icons/ti';

import {
  RiLockPasswordFill,
  RiLoginCircleFill,
  RiMailFill,
} from 'react-icons/ri';
import { ErrorMessage, Formik } from 'formik';
import { registerSchema } from 'components/schemas';

const initialValues = {
  name: '',
  email: '',
  password: '',
};

function RegisterForm() {
  const dispatch = useDispatch();

  const handleFormSubmit = (values, { resetForm }) => {
    dispatch(register(values));
    resetForm();
  };
  return (
    <Container>
      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={registerSchema}
      >
        <FormStyled onSubmit={handleFormSubmit}>
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
              Login
            </span>
            <ErrorMessage
              name="email"
              render={message => <p className="errorMessage">{message}</p>}
            />
            <InputStyled
              type="text"
              name="email"
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

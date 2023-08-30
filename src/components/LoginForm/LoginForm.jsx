import { Container } from 'components';
import { useDispatch } from 'react-redux';
import { login } from 'redux/auth/operation';
import { FormStyled, InputStyled, StyledLink } from './LoginForm.styled';

import { Formik } from 'formik';
import { RiLockPasswordFill, RiMailFill } from 'react-icons/ri';
import { TiArrowRight } from 'react-icons/ti';

function LoginForm() {
  const dispatch = useDispatch();
  const handleFormSubmit = e => {
    e.preventDefault();
    const email = e.currentTarget.elements.email.value;
    const password = e.currentTarget.elements.password.value;
    dispatch(login({ email, password }));

    e.currentTarget.reset();
  };

  return (
    <Container>
      <Formik>
        <FormStyled onSubmit={handleFormSubmit}>
          <h2 className="title">Sing in</h2>
          <label className="styled-label">
            <span>
              <RiMailFill size={17} />
              E-mail
            </span>
            <InputStyled
              type="text"
              name="email"
              placeholder="Enter your e-mail adress"
              required
            />
          </label>
          <label className="styled-label">
            <span>
              <RiLockPasswordFill size={17} />
              Password
            </span>
            <InputStyled
              type="password"
              name="password"
              placeholder="Enter your password"
            />
          </label>
          <button className="loginBtn" type="submit">
            Sing in
          </button>
          <p className="welcomeMessage">
            New to Phone Book?
            <StyledLink to="/register">
              Create an account <TiArrowRight size={20} />
            </StyledLink>
          </p>
        </FormStyled>
      </Formik>
    </Container>
  );
}

export default LoginForm;

import { Container } from 'components';
import { useDispatch } from 'react-redux';
import { login } from 'redux/auth/operation';
import { FormStyled, InputStyled, StyledLink } from './LoginForm.styled';

import { ErrorMessage, Formik } from 'formik';
import { RiLockPasswordFill, RiMailFill } from 'react-icons/ri';
import { TiArrowRight } from 'react-icons/ti';
import { loginSchema } from 'components/schemas';

const initialValues = {
  login: '',
  password: '',
};

function LoginForm() {
  const dispatch = useDispatch();
  const handleFormSubmit = (values, { resetForm }) => {
    console.log('values:', values);
    const email = values.login.value;
    const password = values.password.value;
    dispatch(login({ email, password }));
    resetForm();
  };

  return (
    <Container>
      <Formik
        initialValues={initialValues}
        validationSchema={loginSchema}
        onSubmit={{ handleFormSubmit }}
      >
        <FormStyled>
          <h2 className="title">Sing in</h2>
          <label className="styled-label">
            <span>
              <RiMailFill size={17} />
              E-mail
            </span>
            <ErrorMessage
              name="login"
              render={message => <p className="errorMessage">{message}</p>}
            />
            <InputStyled
              type="text"
              name="login"
              placeholder="Enter your e-mail adress"
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

import React from 'react';
import { FormStyled, InputStyled, StyledLink } from './FormTemplate';
import { ErrorMessage } from 'formik';

function FormTemplate({
  title,
  regBtnText,
  inputs,
  addBtnText,
  linkText,
  welcomeMessage,
  linkTo,
  linkIcon,
}) {
  return (
    <FormStyled>
      <h2 className="formTitle">{title}</h2>
      {inputs.map((input, index) => (
        <label className="formLabel" key={index}>
          {input.icon}
          <span>{input.label}</span>
          <ErrorMessage
            name={input.name}
            render={message => <p className="errorMessage">{message}</p>}
          />
          <InputStyled
            type={input.type}
            name={input.name}
            placeholder={input.placeholder}
            required
          />
        </label>
      ))}
      <button className="submitButton" type="submit">
        {addBtnText ?? regBtnText ?? title}
      </button>
      {welcomeMessage && (
        <p className="welcomeMessage">
          {welcomeMessage}
          <StyledLink to={linkTo}>
            {linkText} {linkIcon}
          </StyledLink>
        </p>
      )}
    </FormStyled>
  );
}

export default FormTemplate;

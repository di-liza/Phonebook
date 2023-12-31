import styled from '@emotion/styled';
import { mixins } from 'constants';
import { Field, Form } from 'formik';
import { NavLink } from 'react-router-dom';

export const FormStyled = styled(Form)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 225px;
  height: 436px;
  padding: 30px 20px 0 20px;

  text-align: center;

  font-size: 25px;
  font-family: 'Poppins', sans-serif;
  color: #ffffff;
  letter-spacing: 0.5px;

  border-radius: ${({ theme }) => theme.cardBg.borderRadius};
  background-color: ${({ theme }) => theme.cardBg.backgroundColor};
  backdrop-filter: ${({ theme }) => theme.cardBg.backdropFilter};
  border: ${({ theme }) => theme.cardBg.border};
  box-shadow: ${({ theme }) => theme.cardBg.boxShadow};
  outline: none;
  border: none;

  ${mixins.mobile} {
    width: 300px;
  }
  ${mixins.tablet} {
    width: 360px;
    padding-bottom: 10px;
  }

  .inputInfoWrapp {
    display: flex;
    align-items: center;
    gap: 5px;
    margin-bottom: 5px;
  }
  .formTitle {
    font-size: 30px;
    ${mixins.tablet} {
      font-size: 40px;
    }
  }

  .formLabel {
    display: block;
    font-size: 15px;
    font-weight: 500;
    text-align: left;

    ${mixins.mobile} {
      width: 260px;
    }
    ${mixins.tablet} {
      width: 300px;
    }

    span {
      display: inline-flex;

      align-items: center;
      gap: 5px;
    }
  }
  .submitButton {
    width: 194px;
    height: 40px;
    border: none;
    outline: none;
    font-size: 20px;
    border-radius: 13px;
    overflow: hidden;
    background: ${({ theme }) => theme.mainButton.baseBgColor};
    color: ${({ theme }) => theme.colors.white};
    box-shadow: 0 6px 20px -5px rgba(0, 0, 0, 0.4);
    overflow: hidden;
    transition: ${({ theme }) => theme.transition};

    :hover {
      background-color: ${({ theme }) => theme.mainButton.activeBgColor};
    }

    ${mixins.mobile} {
      width: 100%;
    }

    ${mixins.tablet} {
      width: 305px;
      height: 55px;
    }
  }
  .welcomeMessage {
    font-size: 15px;
  }
  .errorMessage {
    color: #df5d5d;
    font-size: 12px;
    width: 195px;
    margin: 0;
    text-transform: capitalize;
  }
`;
export const StyledLink = styled(NavLink)`
  color: #e72eff;
  font-size: 15px;
  position: relative;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 2px;
  font-weight: 700;
  margin-left: 10px;
  transition: ${({ theme }) => theme.transition};

  :hover {
    color: #fd219d;
  }
`;

export const InputStyled = styled(Field)`
  display: block;
  height: 35px;
  background-color: rgba(255, 255, 255, 0.07);
  border-radius: 13px;
  padding: 0 10px;
  font-size: 14px;
  font-weight: 300;
  color: white;
  transition: ${({ theme }) => theme.transition};

  ${mixins.mobile} {
    width: 235px;
  }

  ${mixins.tablet} {
    width: 280px;
    height: 45px;
  }

  ::placeholder {
    color: rgb(255 255 255 / 69%);
  }

  :focus {
    outline: none;
    box-shadow: inset 2px 2px 4px rgba(0, 0, 0, 0.4),
      inset -2px -2px 4px rgba(255, 255, 255, 0.5);
  }
`;

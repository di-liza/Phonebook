import styled from '@emotion/styled';
import { mixins } from 'constants';

export const FilterWrapp = styled.div`
  position: relative;
  width: 204px;
  margin: 20px auto;

  ${mixins.tablet} {
    width: 354px;
  }
  ${mixins.desktop} {
    width: 700px;
    margin: 0 auto 50px auto;
  }
  .input {
    display: block;
    height: 25px;

    width: 150px;
    background-color: rgba(255, 255, 255, 0.07);
    border-radius: 10px;
    padding: 0 25px;
    font-size: 14px;
    font-weight: 300;
    color: white;
    transition: all 0.3s ease;

    ${mixins.tablet} {
      height: 25px;
      margin: 25px auto;
      width: 300px;
    }
    ${mixins.desktop} {
      font-size: 25px;
      height: 50px;
      width: 650px;
      margin: 30px auto;
      padding: 0 35px;
    }

    ::placeholder {
      color: rgb(255 255 255 / 69%);
    }
    :focus {
      outline: none;
      box-shadow: inset 2px 2px 4px rgba(0, 0, 0, 0.4),
        inset -2px -2px 4px rgba(255, 255, 255, 0.5);
    }
  }
  .icon {
    top: 7px;
    left: 7px;
    position: absolute;
    ${mixins.tablet} {
      top: 5px;
      left: 7px;
    }
    ${mixins.desktop} {
      width: 20px;
      height: 25px;
      top: 16px;
      left: 10px;
    }
  }
`;

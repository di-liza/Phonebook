import styled from '@emotion/styled';
import { mixins } from 'constants';

export const FilterWrapp = styled.div`
  position: relative;
  margin: 0 auto;
  width: 204px;

  ${mixins.tablet} {
    width: 354px;
  }
  .input {
    display: block;
    height: 30px;
    margin: 20px auto;
    width: 150px;
    background-color: rgba(255, 255, 255, 0.07);
    border-radius: 10px;
    padding: 0 25px;
    margin: 1;
    font-size: 14px;
    font-weight: 300;
    color: white;
    transition: all 0.3s ease;

    ${mixins.tablet} {
      height: 25px;
      margin: 24px auto;
      width: 300px;
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
  }
`;

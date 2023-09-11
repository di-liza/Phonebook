import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import { mixins } from 'constants';

const slideIn = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`;

export const Item = styled.li`
  width: 210px;
  border-bottom: 1px solid #aeaeae;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  margin: 0 auto;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  padding-bottom: 5px;
  :nth-last-of-type() {
    margin-bottom: 0px;
  }
  animation: ${slideIn} 0.3s ease-in-out forwards;

  ${mixins.tablet} {
    width: 455px;
    flex-wrap: nowrap;
  }

  ${mixins.desktop} {
    width: 900px;
    padding-bottom: 15px;
    font-size: 30px;
  }

  .inputWrapp {
    display: flex;
    text-align: left;
    gap: 5px;
    flex-wrap: nowrap;
    ${mixins.desktop} {
      gap: 65px;
    }
  }
  .contactInfoWrap {
    display: flex;
    text-align: left;
    gap: 25px;
    width: 210px;
    margin: 0;
    justify-content: space-between;
    align-items: center;

    ${mixins.tablet} {
      width: 330px;
    }
    ${mixins.desktop} {
      width: 700px;
    }
  }
  .button {
    display: block;
    display: flex;
    align-items: center;
    border: none;
    outline: none;
    color: #988989;
    font-size: 15px;
    border-radius: 5px;
    text-align: center;
    transition: all 0.3s ease;
    width: 20px;
    padding: 0;
    height: 20px;
    justify-content: center;
    transition: ${({ theme }) => theme.transition};
    ${mixins.desktop} {
      width: 30px;
      height: 30px;
    }
  }
  .deleteBtn {
    :hover {
      background-color: ${({ theme }) => theme.colors.grey};
      color: red;
    }
    .icon {
      width: 30px;
      height: 30px;
    }
  }
  .editBtn {
    :hover {
      background-color: ${({ theme }) => theme.colors.grey};
      color: ${({ theme }) => theme.colors.blue};
    }
    .icon {
      width: 30px;
      height: 30px;
    }
  }
  .saveBtn {
    :hover {
      background-color: ${({ theme }) => theme.colors.grey};
      color: ${({ theme }) => theme.colors.green};
    }
  }
  .callLink {
    width: 20px;
    height: 20px;
    justify-content: center;
    background-color: #fff;
    display: flex;
    align-items: center;
    border: none;
    outline: none;
    color: #988989;
    font-size: 15px;
    border-radius: 5px;
    text-align: center;
    transition: all 0.3s ease;

    :hover {
      background-color: ${({ theme }) => theme.colors.grey};
      color: ${({ theme }) => theme.colors.green};
    }

    ${mixins.desktop} {
      width: 30px;
      height: 30px;
    }
    .icon {
      width: 20px;
      height: 20px;
      ${mixins.desktop} {
        width: 25px;
        height: 25px;
      }
    }
  }
  .textWrapper {
    display: flex;
    text-align: left;
    gap: 30px;
  }

  .buttonsWrapper {
    display: flex;
    gap: 10px;
    width: 100px;
    justify-content: flex-end;
    width: 200px;
  }

  .input {
    display: block;
    height: 20px;
    padding: 0;
    width: 100px;
    padding: 0;
    background-color: ${({ theme }) => theme.colors.inputBgColor};
    border-radius: 10px;
    padding: 0 5px;
    /* margin-top: 8px; */
    font-size: 10px;
    font-weight: 300;
    color: white;
    border-top: none;
    border-left: none;
    border-right: none;
    transition: ${({ theme }) => theme.transition};
    border-bottom: ${({ theme }) =>
      `2px  ${theme.colors.inputBorderColor} solid`};

    ::placeholder {
      color: ${({ theme }) => theme.colors.inputPlaceholderColor};
    }
    :focus {
      outline: none;
      box-shadow: ${({ theme }) => theme.colors.baseBoxShadow};
    }

    ${mixins.tablet} {
      width: 170px;
      padding: 2px 5px;
      font-size: 15px;
    }
    ${mixins.desktop} {
      width: 350px;
      padding: 2px 5px;
      font-size: 26px;
      height: 40px;
    }
  }
  .number {
    text-align: right;
    width: 102px;
    ${mixins.desktop} {
      width: 280px;
    }
  }
`;

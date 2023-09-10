import { mixins } from 'constants';
const { default: styled } = require('@emotion/styled');

export const UserMenuStyled = styled.div`
  display: flex;
  align-items: flex-end;
  width: 160px;
  gap: 5px;
  font-size: 15px;
  justify-content: flex-end;

  ${mixins.tablet} {
    width: 195px;
    font-size: 20px;
    gap: 20px;
  }
  .userInfo {
    display: flex;
    gap: 5px;
    align-items: flex-end;
  }
  .userName {
    text-transform: capitalize;
  }
  .logOutBtn {
    border: none;
    display: flex;
    outline: none;
    color: white;
    font-size: 15px;
    background-color: transparent;
    overflow: hidden;
    border-radius: 17px;
    align-items: center;
    justify-content: center;
    gap: 5px;
    transition: ${({ theme }) => theme.transition};

    :hover {
      background-color: ${({ theme }) => theme.mainButton.activeBgColor};
    }
  }
  .welcomeMessage {
    display: flex;
    align-items: center;
    gap: 5px;
  }
  .icon {
    width: 15px;
    height: 15px;
    ${mixins.tablet} {
      width: 20px;
      height: 20px;
    }
  }
`;

import { mixins } from 'constants';
import { NavLink } from 'react-router-dom';
const { default: styled } = require('@emotion/styled');

export const StyledHeader = styled.header`
  padding: 0;
  display: flex;
  justify-content: center;
  width: 100%;
  transition: ${({ theme }) => theme.transition};

  ::after {
    content: '';
    width: 100%;
    height: 1px;
    background-color: #fefefe5c;
    top: 80px;
    position: absolute;
    z-index: -10;
  }
  .navigation {
    width: 250px;

    display: flex;
    padding: 16px;
    position: relative;
    justify-content: space-between;

    align-items: center;

    ${mixins.tablet} {
      width: 700px;
    }
    ${mixins.desktop} {
      width: 1200px;
    }
  }
  .links-box {
    display: flex;
    align-items: center;
    gap: 5px;

    ${mixins.tablet} {
      gap: 15px;
    }
  }
  .linksWrapper {
    display: flex;
    gap: 10px;
    justify-content: center;
    align-items: center;
  }
`;

export const StyledLink = styled(NavLink)`
  color: white;
  font-size: 30px;
  /* position: relative; */
  text-decoration: none;

  transition: ${({ theme }) => theme.transition};

  &.active {
    color: rgb(212 66 213);
  }
  :hover {
    color: rgb(212 66 213);
  }

  .icon {
    width: 30px;
    height: 30px;

    ${mixins.tablet} {
      width: 40px;
      height: 40px;
    }
  }
`;

export const AuthLink = styled(NavLink)`
  /* color: white;
  font-size: 15px;

  text-decoration: none;
  padding: 5px 10px;

  border: 2px solid grey;
  border-radius: 5px; */

  color: white;
  font-size: 15px;
  text-decoration: none;
  padding: 3px 10px;
  border: 2px solid grey;
  border-radius: 5px;

  transition: ${({ theme }) => theme.transition};

  ${mixins.tablet} {
    padding: 5px 15px;
  }
  &.active {
    color: rgb(212 66 213);
    border: 2px solid #6240a9;
  }
  :hover {
    color: rgb(212 66 213);
  }
  /* .linksWrapper {
    display: flex;
    gap: 20px;
  } */
`;

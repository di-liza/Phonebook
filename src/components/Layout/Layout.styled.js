import styled from '@emotion/styled';
import { mixins } from 'constants';
import { NavLink } from 'react-router-dom';
import backgroundImages from '../images';

export const StyledHeader = styled.header`
  padding: 0;
  position: fixed;
  z-index: 1000;
  top: 0;
  display: flex;
  justify-content: center;
  width: 100%;
  transition: ${({ theme }) => theme.transition};

  ::after {
    content: '';
    width: 100%;
    height: 1px;
    background-color: #fefefe5c;
    top: 70px;
    position: absolute;
    z-index: -10;
    ${mixins.desktop} {
      top: 125px;
    }
  }
  .navigation {
    width: 250px;

    display: flex;
    padding: 16px;
    justify-content: space-between;

    align-items: center;

    ${mixins.tablet} {
      width: 700px;
    }
    ${mixins.desktop} {
      width: 1200px;
      padding: 25px;
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
  .headerBckrd {
    background-color: #6240a9;
  }
`;

export const StyledLink = styled(NavLink)`
  color: white;
  font-size: 30px;
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

    ${mixins.desktop} {
      width: 100px;
      height: 65px;
    }
  }
`;

export const AuthLink = styled(NavLink)`
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
`;
export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: #15151580;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${backgroundImages.mobile1x});

  color: #fff;

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
      url(${backgroundImages.mobile2x});
  }
  @media screen and (min-width: 370px) {
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
      url(${backgroundImages.tablet1x});

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
        url(${backgroundImages.tablet2x});
    }
  }

  @media screen and (min-width: 760px) {
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
      url(${backgroundImages.desktop1x});

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
        url(${backgroundImages.desktop2x});
    }
  }
`;

import styled from '@emotion/styled';
import { mixins } from 'constants';
import { NavLink } from 'react-router-dom';

export const HomeContainer = styled.div`
  padding-top: 10px;
  width: 250px;
  margin: 0px auto;
  text-align: center;
  font-size: 15px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  z-index: 100;

  ${mixins.tablet} {
    width: 700px;
  }
  ${mixins.desktop} {
    padding-top: 0px;
    font-size: 30px;
    width: 1200px;
  }

  .titlesWrapp {
    display: flex;
    flex-wrap: wrap;
    width: 130px;
    gap: 5px;
    justify-content: center;

    margin-bottom: 25px;

    ${mixins.tablet} {
      width: 230px;
    }
    ${mixins.desktop} {
      font-size: 30px;
      width: 330px;
    }
  }
  .title {
    font-size: 30px;
    letter-spacing: 0.8rem;
    ${mixins.tablet} {
      font-size: 60px;
    }
    ${mixins.desktop} {
      font-size: 94px;
      letter-spacing: 1.2rem;
    }
  }
  .subtitle {
    font-size: 20px;
    ${mixins.tablet} {
      font-size: 40px;
    }
  }
  .descr {
  }
`;

export const ContactPageLink = styled(NavLink)`
  color: white;
  font-size: 15px;
  text-decoration: none;
  padding: 3px 10px;
  border: 2px solid grey;
  border-radius: 5px;
  margin-top: 70px;

  transition: ${({ theme }) => theme.transition};

  background-color: #6240a96b;

  ${mixins.tablet} {
    padding: 5px 15px;
  }
  ${mixins.desktop} {
    font-size: 30px;
    margin-top: 170px;
  }

  :hover {
    color: rgb(212 66 213);
    border: 2px solid #6240a9;
  }
`;

import styled from '@emotion/styled';
import { mixins } from 'constants';

export const ContactsWrapper = styled.div`
  overflow-y: scroll;
  font-size: 10px;
  margin: 30px auto;
  width: 250px;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.13);
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 0 40px rgba(8, 7, 16, 0.6);
  font-family: 'Poppins', sans-serif;
  color: #fff;
  letter-spacing: 0.5px;
  border: none;
  overflow-x: hidden;
  padding: 15px 0;
  height: 100vh;

  ${mixins.mobile} {
    width: 300px;
  }
  ${mixins.tablet} {
    width: 500px;
  }
  ${mixins.desktop} {
    width: 1100px;
  }

  .headerWrap {
    display: flex;
    width: 160px;
    gap: 15px;
    margin-bottom: 30px;
    margin: 0 auto 15px auto;
    justify-content: center;
    align-items: center;

    ${mixins.tablet} {
      margin: 0 auto 25px auto;
    }
    ${mixins.desktop} {
      margin: 0 auto 30px auto;
      width: 500px;
      gap: 20px;
    }
  }

  .title {
    font-size: 30px;
    font-weight: 500;
    line-height: 42px;
    text-align: center;

    ${mixins.tablet} {
      font-size: 35px;
    }
    ${mixins.desktop} {
      font-size: 60px;
    }
  }
  .addContactBtn {
    width: 25px;
    height: 20px;
    border: none;
    outline: none;
    color: #988989;
    font-size: 15px;
    border-radius: 5px;
    text-align: center;
    transition: all 0.3s ease;

    ${mixins.tablet} {
      width: 30px;
      height: 25px;
    }
    ${mixins.desktop} {
      width: 40px;
      height: 35px;
    }
  }
  .addIcon {
    width: 15px;
    height: 15px;
    ${mixins.tablet} {
      width: 20px;
      height: 20px;
    }
    ${mixins.desktop} {
      width: 30px;
      height: 30px;
    }
  }

  .contactList {
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
    margin: 0;
    list-style: none;
    justify-content: center;
    align-items: center;

    ${mixins.tablet} {
      font-size: 15px;
    }
  }
`;

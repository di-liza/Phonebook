import { mixins } from 'constants';

const { default: styled } = require('@emotion/styled');

console.log('window.innerHeight - ', window.innerHeight);
const windowHeight = window.innerHeight;

export const StyledContainer = styled.div`
  max-width: 300px;
  margin: 0px auto;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-top: ${windowHeight > 500 ? '40px' : 0};

  ${mixins.tablet} {
    max-width: 700px;
    padding-top: ${windowHeight > 500 ? '100px' : 0};
    /* padding-top: 100px; */
  }
  ${mixins.desktop} {
    padding-top: 150px;
    max-width: 1200px;
  }
`;

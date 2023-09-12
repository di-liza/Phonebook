import { mixins } from 'constants';

const { default: styled } = require('@emotion/styled');

export const StyledContainer = styled.div`
  max-width: 300px;
  margin: 0px auto;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-top: 40px;

  ${mixins.tablet} {
    max-width: 700px;
    padding-top: 100px;
  }
  ${mixins.desktop} {
    padding-top: 150px;
    max-width: 1200px;
  }
`;

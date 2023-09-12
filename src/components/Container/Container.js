import { mixins } from 'constants';

const { default: styled } = require('@emotion/styled');

export const StyledContainer = styled.div`
  width: 300px;
  margin: 0px auto;
  text-align: center;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 100px 10px 0 10px;

  ${mixins.tablet} {
    width: 700px;
    padding: 100px 20px 0 20px;
  }
  ${mixins.desktop} {
    width: 1200px;
    padding: 150px 20px 0 20px;
  }
`;

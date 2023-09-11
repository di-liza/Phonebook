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

  ${mixins.tablet} {
    width: 700px;
    padding: 25px 20px;
  }
  ${mixins.desktop} {
    width: 1200px;
  }
`;

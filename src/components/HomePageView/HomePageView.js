import styled from '@emotion/styled';
import { mixins } from 'constants';

export const HomeContainer = styled.div`
  padding-top: 50px;
  width: 250px;
  margin: 0px auto;
  text-align: center;
  font-size: 15px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;

  ${mixins.tablet} {
    width: 700px;
  }
  ${mixins.desktop} {
    font-size: 30px;
    width: 1200px;
  }

  .title {
    font-size: 30px;
    margin-bottom: 15px;
    ${mixins.tablet} {
      font-size: 60px;
    }
  }
  .descr {
  }
`;

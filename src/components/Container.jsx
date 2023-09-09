import React from 'react';
import { StyledContainer } from './Container/Container';

function Container({ children }) {
  return <StyledContainer>{children}</StyledContainer>;
}

export default Container;

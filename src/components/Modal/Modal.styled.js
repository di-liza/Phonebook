import styled from '@emotion/styled';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2000;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(10px);
  background-color: rgb(1 1 10 / 16%);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledModal = styled.div`
  position: relative;
  z-index: 100;
  width: 80%;
  max-width: 400px;
  .closeModalBtn {
    transition: ${({ theme }) => theme.transition};

    :hover {
      background-color: #aeaeae;
      color: ${({ theme }) => theme.colors.white};
    }

    position: absolute;
    top: 10px;
    right: 10px;
    z-index: 100;

    display: flex;
    height: 23px;

    align-items: center;
    border: none;
    outline: none;
    color: #988989;

    font-size: 15px;
    border-radius: 6px;
    text-align: center;
    box-shadow: 0 6px 20px -5px rgba(0, 0, 0, 0.4);
    overflow: hidden;
    width: 30px;
    background: transparent;
  }
`;

import styled from "styled-components/macro";

export const ToastsWrapper = styled.div`
  > * {
    margin-top: 25px;
  }

  > *:first-child {
    margin-top: 0px;
  }

  overflow: hidden; // Prevent horizontal scrollbar from appearing
  inset: 0;
  position: absolute;
  display: flex;
  flex-direction: column;
  padding: 0px 40px;

  /* mobile */
  justify-content: center;
  align-items: center;

  /* desktop */
  @media (min-width: 630px) {
    padding: 68px 0px;

    justify-content: flex-end;
  }
`;

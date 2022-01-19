import styled, { keyframes } from "styled-components/macro";

import { ReactComponent as Close } from "../../icons/icon_close.svg";

const slideFromRight = keyframes`
  from {
    transform: translateX(100vw);
  }

  to {
    transform: translateX(0%);
  }
`;

// Alternative animation
const slideFromTop = keyframes`
  from {
    transform: translateY(-100vh);
  }

  to {
    transform: translateY(0%);
  }
`;

export const ToastWrapper = styled.div`
  animation: ${slideFromRight} 0.5s;

  pointer-events: auto;
  background-color: ${({ colors }) => colors.background};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 12px;
  border: 1px solid ${({ colors }) => colors.background};
  box-sizing: border-box;
  box-shadow: ${({ colors }) => colors.shadow};
  border-radius: 6px;

  // mobile
  width: 100%;

  // desktop
  @media (min-width: 630px) {
    width: 550px;
  }
`;

export const ToastContent = styled.div`
  flex: 1;
`;

export const ToastTitle = styled.div`
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  margin: 4px 0px;
  color: ${({ colors }) => colors.primary};
`;

export const ToastMessage = styled.div`
  font-size: 14px;
  line-height: 20px;
  color: ${({ colors }) => colors.accent};
`;

export const ToastButtonWrapper = styled.div`
  width: 50px;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
`;

export const ToastButton = styled.button`
  all: unset;
  cursor: pointer;
`;

export const CloseIcon = styled(Close)`
  color: ${({ colors }) => colors.accent};
`;

export const Space = styled.div`
  width: ${({ width }) => width}px;
`;

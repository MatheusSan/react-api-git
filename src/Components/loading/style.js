import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Loading = styled.div`
  width: 45px;
  height: 45px;
  background-color: transparent;
  align-items: center;
  justify-content: center;
  border: none;
  margin: 0 auto;
  animation: ${rotate} 1.5s ease-in-out infinite;
`;

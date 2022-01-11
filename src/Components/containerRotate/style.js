import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const ContainerRotate = styled.div`
  max-width: 1em;
  max-height: 1em;
  background-color: transparent;
  align-items: center;
  justify-content: center;
  border: none;
  margin: 0;
  animation: ${rotate} 1.85s linear infinite;
`;

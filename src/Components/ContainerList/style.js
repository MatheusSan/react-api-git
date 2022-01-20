import styled from "styled-components";

import colors from "../../assets/colors";

export const ContainerList = styled.div`
  display: flex;
  width: 100%;
  margin: 10px auto;
  background-color: ${colors.grayLight};
  align-self: flex-start;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (min-width: 768px) {
    flex-flow: wrap;
  }
`;

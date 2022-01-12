import styled from "styled-components";

import colors from "../../assets/colors";

export const ContainerList = styled.div`
  display: flex;
  width: calc(100% - 15px);
  margin: 10px 0;
  background-color: ${colors.grayLight};
  align-self: flex-start;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* padding: 10px; */
  @media (min-width: 768px) {
    flex-flow: wrap;
  }
`;

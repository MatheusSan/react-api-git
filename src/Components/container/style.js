import styled from "styled-components";

import colors from "../../assets/colors";

export const Container = styled.div`
  display: flex;
  max-width: 90%;
  min-height: 80px;
  margin: 10px auto;
  /* background-color: ${colors.gray}; */
  align-items: center;
  justify-content: space-around;
  padding: 15px;
  flex-direction: row;
  @media (max-width: 375px) {
    flex-direction: column;
  }
`;

import styled from "styled-components";

import colors from "../../assets/colors";

export const Button = styled.button`
  display: flex;
  min-width: 120px;
  min-height: 50px;
  background-color: ${colors.primary};
  align-items: center;
  justify-content: center;
  padding: 20px 10px;
  border: none;
  border-radius: 8px;
  margin: 5px;
  color: ${colors.white};
  font-size: 16px;
`;

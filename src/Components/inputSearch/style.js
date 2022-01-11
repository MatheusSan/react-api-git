import styled from "styled-components";

import colors from "../../assets/colors";

export const InputDiv = styled.div`
  display: flex;
  max-width: 300px;
  width: 90%;
  margin: 10px auto;
  justify-content: space-around;
  border: solid 2px ${colors.primary};
  border-radius: 50px;
`;

export const ButtonSearch = styled.button`
  display: flex;
  width: 40px;
  height: 40px;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  right: 0;
  border: solid 1px ${colors.primary};
  background-color: ${colors.primary};
`;

export const InputSearch = styled.input`
  display: flex;
  height: 40px;
  width: calc(100% - 40px);
  background-color: ${colors.white};
  border-radius: 50px;
  border: none;
  align-items: center;
  justify-content: center;
  padding: 15px;
`;

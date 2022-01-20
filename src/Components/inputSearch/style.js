import styled from "styled-components";

import colors from "../../assets/colors";

export const InputDiv = styled.div`
  display: flex;
  max-width: 350px;
  width: 90%;
  height: 40px;
  margin: 10px auto;
  justify-content: flex-end;
  border-radius: 50px;
  align-items: center;
  @media (min-width: 768px) {
    width: 50%;
    margin: 30px 0px;
    float: left;
  }
`;

export const ButtonSearch = styled.button`
  display: flex;
  width: 40px;
  height: 40px;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  position: absolute;
  background-color: ${colors.primary};
  border: none;
`;

export const InputSearch = styled.input`
  display: flex;
  height: 40px;
  font-size: 28px;
  width: 100%;
  background-color: transparent;
  border-radius: 50px;
  border: solid 2px ${colors.primary};
  align-items: center;
  justify-content: center;
  padding: 15px;
`;

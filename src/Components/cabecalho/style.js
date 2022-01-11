import styled from "styled-components";

import colors from "../../assets/colors";

export const CabecalhoStyle = styled.div`
  display: flex;
  width: 90%;
  max-height: 120px;
  margin: 0px auto;
  align-items: flex-start;
  justify-content: space-around;
  border-radius: 5px;
  /* background-color: ${colors.gray}; */
  padding: 5px 5px;
  overflow: hidden;
`;

export const Avatar = styled.img`
  display: flex;
  width: 20%;
  left: 0px;
  align-items: center;
  justify-content: center;
  padding-right: 5px;
`;

export const Texts = styled.div`
  display: flex;
  width: 80%;
  flex-direction: column;
  align-items: flex-start;
  word-break: break-all;
`;

export const Name = styled.p`
  font-size: 20px;
`;

export const Email = styled.p`
  font-size: 15px;
`;

export const Bio = styled.p`
  font-size: 12px;
`;

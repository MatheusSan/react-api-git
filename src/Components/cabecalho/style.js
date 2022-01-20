import styled from "styled-components";

import colors from "../../assets/colors";

export const CabecalhoStyle = styled.div`
  display: flex;
  width: 90%;
  max-height: 140px;
  margin: 0px auto;
  align-items: flex-start;
  justify-content: space-around;
  border-radius: 5px;
  /* background-color: ${colors.gray}; */
  padding: 5px 5px;
  overflow: hidden;
  @media (min-width: 768px) {
    width: 50%;
    margin: 0;
  }
  @media (min-width: 2560px) {
    max-height: 300px;
  }
`;

export const Avatar = styled.img`
  display: flex;
  width: 20%;
  min-width: 80px;
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
  justify-content: space-between;
  word-break: break-all;
`;

export const Name = styled.p`
  font-size: 20px;
  @media (min-width: 1440px) {
    margin-top: 10px;
  }
`;

export const Nickname = styled.p`
  font-size: 15px;
  @media (min-width: 1440px) {
    margin-top: 10px;
  }
`;

export const Bio = styled.p`
  font-size: 12px;
  @media (min-width: 1440px) {
    margin-top: 15px;
  }
`;

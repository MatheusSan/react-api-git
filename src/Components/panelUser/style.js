import styled from "styled-components";

import colors from "../../assets/colors";

export const PanelUser = styled.div`
  display: flex;
  width: 95%;
  min-height: 100px;
  overflow: hidden;
  background-color: ${colors.primary};
  color: ${colors.white};
  align-items: center;
  justify-content: space-around;
  padding: 5px;
  border-radius: 5px;
  flex-direction: column;
`;

export const Name = styled.p`
  font-size: 16px;
  width: 100%;
  text-align: center;
`;

export const BioDiv = styled.div`
  width: 100%;
  word-wrap: normal;
  margin-top: 5px;
`;

export const Bio = styled.p`
  font-size: 14px;
  width: 100%;
  text-align: justify;
`;

export const Avatar = styled.img`
  display: flex;
  width: 70px;
  left: 0px;
  align-items: center;
  justify-content: center;
  padding-right: 5px;
`;

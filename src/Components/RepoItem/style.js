import styled from "styled-components";

import colors from "../../assets/colors";

export const RepoItem = styled.div`
  display: flex;
  width: 95%;
  min-height: 100px;
  overflow: hidden;
  margin: 10px auto;
  background-color: ${colors.white};
  color: ${colors.primary};
  align-items: center;
  justify-content: space-around;
  padding: 5px;
  border-radius: 5px;
  flex-direction: column;
`;

export const Name = styled.p`
  font-size: 18px;
  font-weight: bold;
  width: 100%;
  text-align: center;
`;

export const DescriptionDiv = styled.div`
  width: 100%;
  word-wrap: normal;
  margin-top: 5px;
`;

export const Description = styled.p`
  font-size: 14px;
  width: 100%;
  text-align: justify;
`;

export const Language = styled.p`
  font-size: 10px;
  width: 100%;
  text-align: end;
`;

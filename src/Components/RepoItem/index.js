import {
  Name,
  Description,
  DescriptionDiv,
  Language,
  RepoItem as RepoItemStyle,
} from "./style";

export default function Container({ title, description, language }) {
  return (
    <RepoItemStyle>
      <Name>{title}</Name>
      <DescriptionDiv>
        <Description>{description}</Description>
      </DescriptionDiv>
      <Language>{language}</Language>
    </RepoItemStyle>
  );
}

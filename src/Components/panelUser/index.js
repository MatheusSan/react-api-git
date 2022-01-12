import {
  Name,
  Bio,
  BioDiv,
  Avatar,
  PanelUser as PanelUserStyle,
} from "./style";

export default function Container({ name, avatar, bio }) {
  return (
    <PanelUserStyle>
      <Avatar src={avatar} />
      <Name>{name}</Name>
      <BioDiv>
        <Bio>{bio}</Bio>
      </BioDiv>
    </PanelUserStyle>
  );
}

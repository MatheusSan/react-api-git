import { CabecalhoStyle, Avatar, Texts, Name, Email, Bio } from "./style";

export default function Cabecalho({ avatar, name, email, bio }) {
  return (
    <CabecalhoStyle>
      <Avatar src={avatar} />
      <Texts>
        <Name>{name}</Name>
        <Email>{email}</Email>
        <Bio>{bio}</Bio>
      </Texts>
    </CabecalhoStyle>
  );
}

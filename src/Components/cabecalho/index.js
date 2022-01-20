import { CabecalhoStyle, Avatar, Texts, Name, Nickname, Bio } from "./style";
import PropTypes from "prop-types";

export default function Cabecalho({ avatar, name, nickname, bio }) {
  return (
    <CabecalhoStyle>
      <Avatar src={avatar} />
      <Texts>
        <Name>{name}</Name>
        <Nickname>{nickname}</Nickname>
        <Bio>{bio}</Bio>
      </Texts>
    </CabecalhoStyle>
  );
}

Cabecalho.defaultProps = {
  avatar: "",
  name: "",
  nickname: "",
  bio: "",
};

Cabecalho.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  nickname: PropTypes.string,
  bio: PropTypes.string,
};

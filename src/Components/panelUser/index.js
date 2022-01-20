import { FaGithub } from "react-icons/fa";
import PropTypes from "prop-types";

import {
  Name,
  Bio,
  BioDiv,
  Avatar,
  PanelUser as PanelUserStyle,
} from "./style";

export default function Container({ name, avatar, bio, url }) {
  return (
    <PanelUserStyle>
      <Avatar src={avatar} />
      <Name href={url} target="_blank">
        {name} <FaGithub style={{ marginLeft: 5 }} />
      </Name>
      <BioDiv>
        <Bio>{bio}</Bio>
      </BioDiv>
    </PanelUserStyle>
  );
}

Container.defaultProps = {
  avatar: "",
  name: "",
  bio: "",
};

Container.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  bio: PropTypes.string,
};

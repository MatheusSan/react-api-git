import {
  Name,
  Description,
  DescriptionDiv,
  Language,
  RepoItem as RepoItemStyle,
} from "./style";
import PropTypes from "prop-types";

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

Container.defaultProps = {
  title: "",
  description: "",
  language: "",
};

Container.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  language: PropTypes.string,
};

import { Button as ButtonStyle } from "./style";
import PropTypes from "prop-types";

export default function Button({ text, onClick }) {
  return <ButtonStyle onClick={onClick}>{text}</ButtonStyle>;
}

Button.defaultProps = {
  text: "enter",
  onClick: () => {},
};

Button.propTypes = {
  onClick: PropTypes.func,
};

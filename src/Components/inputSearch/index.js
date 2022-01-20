import { FaSearch } from "react-icons/fa";
import PropTypes from "prop-types";

import {
  InputDiv,
  ButtonSearch,
  InputSearch as InputSearchStyle,
} from "./style";
import colors from "../../assets/colors";

export default function InputSearch({
  onChange,
  onClick,
  placeHolder,
  onKeyUp,
}) {
  return (
    <InputDiv>
      <InputSearchStyle
        placeholder={placeHolder}
        onChange={onChange}
        onKeyUp={onKeyUp}
      />
      <ButtonSearch type="submit" onClick={onClick}>
        <FaSearch style={{ fontSize: 20, color: colors.white }} />
      </ButtonSearch>
    </InputDiv>
  );
}

InputSearch.defaultProps = {
  placeholder: "Search...",
  onChange: () => {},
  onKeyUp: () => {},
  onClick: () => {},
};

InputSearch.propTypes = {
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  onKeyUp: PropTypes.func,
  onClick: PropTypes.func,
};

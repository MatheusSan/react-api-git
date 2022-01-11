import {
  InputDiv,
  ButtonSearch,
  InputSearch as InputSearchStyle,
} from "./style";

export default function InputSearch({ onChange, onClick }) {
  return (
    <InputDiv>
      <InputSearchStyle onChange={onChange} />
      <ButtonSearch onClick={onClick} />
    </InputDiv>
  );
}

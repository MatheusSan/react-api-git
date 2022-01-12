import { InputDiv, InputSearch as InputSearchStyle } from "./style";

export default function InputSearch({ onChange, onClick, placeHolder }) {
  return (
    <InputDiv>
      <InputSearchStyle placeholder={placeHolder} onChange={onChange} />
      {/* <ButtonSearch onClick={onClick} /> */}
    </InputDiv>
  );
}

import { Button as ButtonStyle } from "./style";

export default function Button({ children, onClick }) {
  return <ButtonStyle onClick={onClick}>{children}</ButtonStyle>;
}

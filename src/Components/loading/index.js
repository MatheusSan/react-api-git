import { FaSpinner } from "react-icons/fa";
import colors from "../../assets/colors";
import { Loading as LoadingStyle } from "./style";

export default function Loading() {
  return (
    <LoadingStyle>
      <FaSpinner style={{ fontSize: 45, color: colors.primary }} />
    </LoadingStyle>
  );
}

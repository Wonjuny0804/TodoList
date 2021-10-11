import { ReactComponent as Logo} from "../../assets/Logo.svg";
import { ReactComponent as Checked} from "../../assets/checked.svg";

interface IconProps {
  name: "logo" | "checked";
}

const Icon = ({ name }: IconProps): JSX.Element => {
  const iconLists = {
    logo: <Logo />,
    checked: <Checked />
  }

  const returnValue = iconLists[name];
  return returnValue;
}

export default Icon;
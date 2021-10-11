import { ReactComponent as Logo} from "../../assets/Logo.svg";

interface IconProps {
  name: "logo";
}

const Icon = ({ name }: IconProps): JSX.Element => {
  const iconLists = {
    logo: <Logo />
  }

  const returnValue = iconLists[name];
  return returnValue;
}

export default Icon;
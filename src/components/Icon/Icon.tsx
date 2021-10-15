import { ReactComponent as Logo } from "../../assets/Logo.svg";
import { ReactComponent as Checked } from "../../assets/checked.svg";
import { ReactComponent as Delete } from "../../assets/delete.svg";
import { ReactComponent as DeleteCompleted } from "../../assets/deleteCompleted.svg";

interface IconProps {
  name: "logo" | "checked" | "delete" | "deleteCompleted";
}

const Icon = ({ name }: IconProps): JSX.Element => {
  const iconLists = {
    logo: <Logo />,
    checked: <Checked />,
    delete: <Delete />,
    deleteCompleted: <DeleteCompleted />
  }

  const returnValue = iconLists[name];
  return returnValue;
}

export default Icon;
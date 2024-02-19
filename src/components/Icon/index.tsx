import { IconType } from "./IconType";
import "./styles.scss";

const Icon = ({ icon, size = "", className = "" }: IconProps) => {
  return <i className={`icon ${size} ${icon} ${className}`}></i>;
};

export default Icon;

type IconSize = "" | "icon--cell" | "icon--small" | "icon--big" | "icon-medium";

interface IconProps {
  icon: IconType;
  className?: string;
  size?: IconSize;
}

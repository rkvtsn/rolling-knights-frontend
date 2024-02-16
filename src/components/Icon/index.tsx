import { IconType } from "./IconType";
import "./styles.scss";

const Icon = ({ icon, className = "" }: IconProps) => {
  return <i className={`icon ${icon} ${className}`}></i>;
};

export default Icon;

interface IconProps {
  icon: IconType;
  className?: string;
}

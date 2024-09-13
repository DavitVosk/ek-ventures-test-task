import HomeFilled from "./HomeFilled";
import HomeOutline from "./HomeOutline";
import MediaFilled from "./MediaFilled";
import MediaOutline from "./MediaOutline";
import Games from "./Games";
import Reports from "./Reports";

const icons = {
  homeFilled: HomeFilled,
  homeOutline: HomeOutline,
  mediaFilled: MediaFilled,
  mediaOutline: MediaOutline,
  games: Games,
  reports: Reports,
};

interface IconProps {
  name: string;
  size?: number;
  width?: number;
  strokeWidth?: number;
  color?: string;
  fill?: string;
}

const Icon = (props: IconProps) => {
  const IconComponent = icons[props.name as keyof typeof icons];
  return <IconComponent color={props.color} />;
};

export default Icon;

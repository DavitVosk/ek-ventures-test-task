import HomeFilled from "./HomeFilled";
import HomeOutline from "./HomeOutline";
import MediaFilled from "./MediaFilled";
import MediaOutline from "./MediaOutline";
import Games from "./Games";
import Reports from "./Reports";
import Search from "./Search";
import Message from "./Message";
import Notification from "./Notification";
import HeartBeat from "./HeartBeat";
import Diamond from "./Diamond";
import ArrowRight from "./ArrowRight";
import CameraFilled from "./CameraFilled";
import Like from "./Like";
import Comment from "./Comment";
import ThreeDots from "./ThreeDots";
import CameraOutline from "./CameraOutline";

const icons = {
  homeFilled: HomeFilled,
  homeOutline: HomeOutline,
  mediaFilled: MediaFilled,
  mediaOutline: MediaOutline,
  games: Games,
  reports: Reports,
  search: Search,
  message: Message,
  notification: Notification,
  heartBeat: HeartBeat,
  diamond: Diamond,
  arrowRight: ArrowRight,
  cameraFilled: CameraFilled,
  cameraOutline: CameraOutline,
  like: Like,
  comment: Comment,
  threeDots: ThreeDots,
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

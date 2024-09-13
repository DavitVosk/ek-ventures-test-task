import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

const MediaFilled = (props: SvgProps) => (
  <Svg width="18" height="21" viewBox="0 0 18 21" fill="none">
    <Path
      d="M0.936523 2.08885L3.01953 0.58429L16.715 9.41885L17.9109 10.229L16.715 12.428L3.94533 20.8382H2.32502L1.32197 20.2981V18.4077L0.936523 2.08885Z"
      fill={props.color}
    />
  </Svg>
);

export default MediaFilled;

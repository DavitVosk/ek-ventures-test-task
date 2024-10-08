import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

const HomeFilled = (props: SvgProps) => (
  <Svg width="25" height="21" viewBox="0 0 25 21" fill="none">
    <Path
      d="M0.441406 11.7722L12.6299 0.732971L24.4414 11.5677H21.8662V20.733H3.04991V11.7722H0.441406Z"
      fill={props.color}
    />
  </Svg>
);

export default HomeFilled;

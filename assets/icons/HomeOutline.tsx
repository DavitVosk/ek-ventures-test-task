import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

const HomeOutline = (props: SvgProps) => (
  <Svg
    width="27"
    height="22"
    viewBox="0 0 27 22"
    fill={"none"}
  >
    <Path
      d="M22.9886 22H3.7226C3.38652 22 3.10889 21.7133 3.10889 21.3663V12.7893H1.04859C0.792875 12.7893 0.566387 12.6308 0.478715 12.3819C0.391042 12.133 0.456797 11.8614 0.646754 11.6879L13.1693 0.161257C13.4031 -0.0575076 13.7611 -0.049964 13.9876 0.161257L26.2398 11.6879C26.4298 11.8614 26.4882 12.1405 26.4006 12.3819C26.3129 12.6233 26.0791 12.7893 25.8307 12.7893H23.6024V21.3663C23.6024 21.7133 23.3247 22 22.9886 22ZM4.33631 20.7327H22.3749V12.1556C22.3749 11.8086 22.6526 11.5219 22.9886 11.5219H24.2526L13.5712 1.48893L2.65592 11.5295H3.7226C4.05868 11.5295 4.33631 11.8161 4.33631 12.1631V20.7402V20.7327Z"
      fill={props.color}
    />
  </Svg>
);

export default HomeOutline;

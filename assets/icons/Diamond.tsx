import * as React from "react";
import Svg, { Path, Defs, G, Rect, ClipPath } from "react-native-svg";

const Diamond = () => (
  <Svg width="12" height="10" viewBox="0 0 12 10" fill="none">
    <G clip-path="url(#clip0_1_176)">
      <Path
        d="M4.3686 3.383L6.26573 9.75032L8.19236 3.383H4.3686Z"
        fill="#98D7FD"
      />
      <Path
        d="M8.19236 3.38301L6.26573 0.260132L4.3686 3.38301H8.19236Z"
        fill="#D2F1F9"
      />
      <Path
        d="M9.56461 0.260132H6.26573L8.19236 3.38301L9.56461 0.260132Z"
        fill="#6AC3F0"
      />
      <Path
        d="M6.26573 9.75032L11.8895 3.383H8.19236L6.26573 9.75032Z"
        fill="#40A6DD"
      />
      <Path
        d="M8.19236 3.38301H11.8895L9.56461 0.260132L8.19236 3.38301Z"
        fill="#93D5EF"
      />
      <Path
        d="M6.26573 0.260132H2.96685L4.3686 3.38301L6.26573 0.260132Z"
        fill="#83D0FE"
      />
      <Path
        d="M0.641861 3.383L6.26573 9.75032L4.3686 3.383H0.641861Z"
        fill="#61C4F7"
      />
      <Path
        d="M2.96685 0.260132L0.641861 3.38301H4.3686L2.96685 0.260132Z"
        fill="#B9E4FC"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_1_176">
        <Rect
          width="11.2476"
          height="9.4902"
          fill="white"
          transform="translate(0.641861 0.260132)"
        />
      </ClipPath>
    </Defs>
  </Svg>
);

export default Diamond;

export type FontWeightTypes =
  | "normal"
  | "bold"
  | "100"
  | "200"
  | "300"
  | "400"
  | "500"
  | "600"
  | "700"
  | "800"
  | "900";

export const theme = {
  colors: {
    primary: "#3361BA",
    black: "#0A0A0A",
    extraBlack: "#000000",
    blackGray: "#0A0C0B",
    background: "#ffffff",
    lightGray: "#C9CCD1",
    gray: "#D3D3D3",
    lightYellow: "#fef9ea",
    green: "#34A653",
  },
  radius: {
    xxs: 6,
    xs: 10,
    sm: 12,
    md: 14,
    lg: 16,
    xl: 18,
    xxl: 22,
  },
  spacers: {
    XXXS: 2,
    XXS: 10,
    XS: 12,
    S: 14,
    XXM: 16,
    XM: 20,
    M: 22,
    SL: 24,
    L: 32,

    XL: 40,
    XXL: 48,
  },
  fonts: {
    normal: "400",
    medium: "500",
    semibold: "600",
    bold: "700",
    extraBold: "800",
  },
};

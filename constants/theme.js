import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export const COLORS = {
  primary: "#7F5DF0", // Light purple
  secondary: "#5D2DFD", // Dark purple

  white: "#fff",
  black: "#000000",
  green: "#37E39F",
  red: "#F9A8BA",
  gray: "#6A6A6A",
  lightGray: "#dbdbdb",
  lightGray1: "#f5f6fa",
};
export const SIZES = {
  // global sizes
  base: 8,
  font: 14,
  radius: 12,
  padding: 24,

  // font sizes
  h1: 25,
  h2: 22,
  h3: 18,
  h4: 14,
  body1: 30,
  body2: 22,
  body3: 16,
  body4: 14,
  body5: 12,

  // app dimensions
  width,
  height,
};
export const FONTS = {
  h1: {
    fontFamily: "Poppins-Bold",
    fontSize: SIZES.h1,
    lineHeight: 36,
  },
  h2: { fontFamily: "Poppins-Medium", fontSize: SIZES.h2, lineHeight: 30 },
  h3: { fontFamily: "Poppins-Medium", fontSize: SIZES.h3, lineHeight: 28 },
  h4: { fontFamily: "Poppins-Medium", fontSize: SIZES.h4, lineHeight: 22 },
  body1: {
    fontFamily: "Poppins-Regular",
    fontSize: SIZES.body1,
    lineHeight: 36,
  },
  body2: {
    fontFamily: "Poppins-Regular",
    fontSize: SIZES.body2,
    lineHeight: 30,
  },
  body3: {
    fontFamily: "Poppins-Regular",
    fontSize: SIZES.body3,
    lineHeight: 22,
  },
  body4: {
    fontFamily: "Poppins-Regular",
    fontSize: SIZES.body4,
    lineHeight: 22,
  },
  body5: {
    fontFamily: "Poppins-Regular",
    fontSize: SIZES.body5,
    lineHeight: 22,
  },
};

const appTheme = { COLORS, SIZES, FONTS };

export default appTheme;


/* fonts */
export const FontFamily = {
  poppinsExtralight: "Poppins_extralight",
  poppinsRegular: "Poppins_regular",
};
/* font sizes */
export const FontSize = {
  size_xs: 12,
  size_xl: 20,
};
/* Colors */
export const Color = {
  gray_100: "#2b2b2d",
  gray_200: "#131316",
  whitesmoke: "#e8e9e5",
};
/* border radiuses */
export const Border = {
  br_81xl: 100,
  br_mini: 15,
};

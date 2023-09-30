import tinycolor from "tinycolor2";

export const isDark = (color: string) => {
  const c = tinycolor(color);
  return c.getBrightness() < 100;
};

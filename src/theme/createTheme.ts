import { breakpoints } from "../tokens/breakpoints";
import { colors } from "../tokens/colors";
import { radius } from "../tokens/radius";
import { spacing } from "../tokens/spacing";
import { typography } from "../tokens/typography";

export interface ThemeColors {
  background: string;
  text: string;
  primary: string;
  secondary?: string;
  textMuted?: string;
  border?: string;
  error?: string;
  success?: string;
}

export interface AppTheme {
  colors: ThemeColors;
  spacing: typeof spacing;
  typography: typeof typography;
  radius: typeof radius;
  breakpoints: {
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
}

type ThemeColorsOverride = Partial<ThemeColors>;

export function createTheme(colorsOverride: ThemeColorsOverride): AppTheme {
  return {
    colors: { ...colors, ...colorsOverride },
    spacing,
    typography,
    radius,
    breakpoints: {
      sm: `(min-width: ${breakpoints.sm})`,
      md: `(min-width: ${breakpoints.md})`,
      lg: `(min-width: ${breakpoints.lg})`,
      xl: `(min-width: ${breakpoints.xl})`,
    },
  };
}

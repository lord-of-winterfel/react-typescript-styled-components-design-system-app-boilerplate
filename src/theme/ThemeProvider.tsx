import { ReactNode } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { AppTheme } from "./createTheme";

interface ThemeProviderProps {
  theme: AppTheme;
  children: ReactNode;
}

export function ThemeProvider({ theme, children }: ThemeProviderProps) {
  return (
    <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
  );
}

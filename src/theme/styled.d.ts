import "styled-components";
import type { AppTheme } from "./createTheme";

declare module "styled-components" {
  export interface DefaultTheme extends AppTheme {}
}

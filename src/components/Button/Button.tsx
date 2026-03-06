import { StyledButton } from "./Button.styles";
import type { ButtonProps } from "./Button.types";

export function Button({
  children,
  variant = "primary",
  onClick,
  disabled = false,
  type = "button",
  ...rest
}: ButtonProps) {
  return (
    <StyledButton
      type={type}
      $variant={variant}
      onClick={onClick}
      disabled={disabled}
      {...rest}
    >
      {children}
    </StyledButton>
  );
}

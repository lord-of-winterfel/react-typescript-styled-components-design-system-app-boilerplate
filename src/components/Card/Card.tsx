import { ReactNode } from "react";
import { StyledCard, CardHeader, CardContent } from "./Card.styles";

interface CardProps {
  children: ReactNode;
}

export function Card({ children }: CardProps) {
  return <StyledCard>{children}</StyledCard>;
}

Card.Header = CardHeader;
Card.Content = CardContent;

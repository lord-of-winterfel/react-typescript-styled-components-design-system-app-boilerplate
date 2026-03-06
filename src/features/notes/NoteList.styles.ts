import styled from "styled-components";

export const NotesGrid = styled.div<{ $empty?: boolean }>`
  display: grid;
  gap: ${({ theme }) => theme.spacing.md};
  margin: 0;
  padding: 0;

  ${({ $empty, theme }) =>
    $empty &&
    `
    color: ${theme.colors.textMuted};
    font-size: ${theme.typography.fontSize.sm};
    padding: ${theme.spacing.lg};
    text-align: center;
  `}

  @media ${({ theme }) => theme.breakpoints.md} {
    grid-template-columns: repeat(2, 1fr);
    gap: ${({ theme }) => theme.spacing.lg};
  }

  @media ${({ theme }) => theme.breakpoints.lg} {
    grid-template-columns: repeat(3, 1fr);
    gap: ${({ theme }) => theme.spacing.lg};
  }
`;

import styled from "styled-components";

export const PageLayout = styled.div`
  min-height: 100vh;
  padding: ${({ theme }) => theme.spacing.md};

  @media ${({ theme }) => theme.breakpoints.md} {
    padding: ${({ theme }) => theme.spacing.xl};
  }

  @media ${({ theme }) => theme.breakpoints.lg} {
    padding: ${({ theme }) => theme.spacing["2xl"]};
    max-width: 1200px;
    margin: 0 auto;
  }
`;

export const PageHeader = styled.header`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing.md};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

export const Title = styled.h1`
  margin: 0;
  font-size: ${({ theme }) => theme.typography.fontSize["2xl"]};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.text};

  @media ${({ theme }) => theme.breakpoints.md} {
    font-size: 28px;
  }

  @media ${({ theme }) => theme.breakpoints.lg} {
    font-size: 32px;
  }
`;

export const ThemeToggleWrapper = styled.div``;

export const MainContent = styled.main`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.lg};
`;

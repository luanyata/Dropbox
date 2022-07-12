import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  > div:first-child() {
    display: flex;
    flex-direction: column;
  }
`

export const HeaderTitle = styled.h1`
  font-size: 1.75rem;
  font-weight: 700;
  line-height: 2.125rem;
  color: ${({ theme }) => theme.colors.blue900};
`

export const WelCome = styled.p`
  font-size: 1.25rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.gray600};
`

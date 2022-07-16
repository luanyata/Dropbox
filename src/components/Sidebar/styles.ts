import styled from 'styled-components'

export const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 262px;

  background-color: ${({ theme }) => theme.colors.white};
  height: 100vh;
  position: fixed;
`

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
`

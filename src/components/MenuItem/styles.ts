import styled, { css } from 'styled-components'

type MenuItemProps = {
  isSelected: boolean
}

export const MenuItemContainer = styled.div<MenuItemProps>`
  display: flex;
  width: 100%;
  align-items: center;

  + div {
    margin-top: 3.5rem;
  }

  ${({ isSelected }) =>
    isSelected &&
    css`
      ::before {
        content: '';
        width: 11px;
        height: 37px;
        background-color: ${({ theme }) => theme.colors.blue500};
      }
    `}
`
export const Label = styled.p<MenuItemProps>`
  color: ${({ theme }) => theme.colors.gray500};
  font-size: 1.25rem;
  line-height: 1.5rem;
  font-weight: 600;

  ${({ isSelected }) =>
    isSelected &&
    css`
      color: ${({ theme }) => theme.colors.black};
    `}
`

export const Icon = styled.div<MenuItemProps>`
  width: 20px;
  height: 20px;
  font-size: 1.25rem;
  margin-right: 1.188rem;
  margin-left: 1.75rem;

  color: ${({ theme }) => theme.colors.gray500};
  ${({ isSelected }) =>
    isSelected &&
    css`
      color: ${({ theme }) => theme.colors.blue500};
    `}
`

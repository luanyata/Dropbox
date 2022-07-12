import styled, { css } from 'styled-components'
import WaveIcon from '../../assets/wave.svg'

type MenuItemProps = {
  isSelected: boolean
}

export const MenuItemContainer = styled.div<MenuItemProps>`
  display: flex;
  width: 100%;
  align-items: center;

  + div:not(:last-child) {
    margin-top: 3.5rem;
  }

  ${({ isSelected }) =>
    isSelected &&
    css`
      ::before {
        content: url(${WaveIcon});
        width: 11px;
        height: 37px;
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

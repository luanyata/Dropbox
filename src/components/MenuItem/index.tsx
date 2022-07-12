import { ReactElement } from 'react'
import { MenuItemContainer, Label, Icon } from './styles'

type MenuItemProps = {
  icon: ReactElement
  label: string
  onClick?: () => void
  isSelected: boolean
}

// TODO - Ver forma mais elegante de passar os icones
// TODO - Ver forma mais elegante de passar isSelected para todos os componentes
export function MenuItem({
  icon,
  isSelected = false,
  label,
  onClick,
}: MenuItemProps) {
  return (
    <MenuItemContainer isSelected={isSelected}>
      <Icon isSelected={isSelected}>{icon}</Icon>
      <Label isSelected={isSelected}>{label}</Label>
    </MenuItemContainer>
  )
}

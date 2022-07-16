import { ButtonHTMLAttributes } from 'react'
import { ButtonContainer } from './styles'

type ButtonProps = {
  bg?: string
} & ButtonHTMLAttributes<HTMLButtonElement>

export function Button({ title, color, bg }: ButtonProps) {
  return (
    <ButtonContainer color={color} bg={bg}>
      {title}
    </ButtonContainer>
  )
}

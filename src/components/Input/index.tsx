import { InputContainer, InputContent, SearchIcon } from './styles'

export function Input() {
  return (
    <InputContainer>
      <SearchIcon />
      <InputContent placeholder="Search anything here" />
    </InputContainer>
  )
}

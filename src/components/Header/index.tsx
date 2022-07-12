import { Input } from '../Input'
import { HeaderContainer, HeaderTitle, WelCome } from './styles'

export default function Header() {
  return (
    <HeaderContainer>
      <div>
        <HeaderTitle>MyCloud</HeaderTitle>
        <WelCome>Welcome, Luan Lima! 👋</WelCome>
      </div>
      <Input />
    </HeaderContainer>
  )
}

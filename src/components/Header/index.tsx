import { Avatar } from '../Avatar'
import { Input } from '../Input'
import {
  HeaderActionContainer,
  HeaderContainer,
  HeaderTitle,
  WelCome,
  NotificationIcon,
  SettingsIcon,
} from './styles'

export default function Header() {
  return (
    <HeaderContainer>
      <div>
        <HeaderTitle>MyCloud</HeaderTitle>
        <WelCome>Welcome, Luan Lima! 👋</WelCome>
      </div>
      <HeaderActionContainer>
        <Input />
        <NotificationIcon />
        <SettingsIcon />
        <Avatar />
      </HeaderActionContainer>
    </HeaderContainer>
  )
}

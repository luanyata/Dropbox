import { IoIosNotifications, IoMdSettings } from 'react-icons/io'
import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  width: 1047px;
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

export const HeaderActionContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  > div,
  svg:not(:first-child) {
    margin-left: 12px;
  }
`

export const NotificationIcon = styled(IoIosNotifications)`
  border-radius: 10px;
  background: ${(props) => props.theme.colors.white};
  width: 2.5rem;
  height: 2.5rem;
  padding: 0.625rem;
  color: ${(props) => props.theme.colors.blue900};
`

export const SettingsIcon = styled(IoMdSettings)`
  border-radius: 10px;
  background: ${(props) => props.theme.colors.white};
  width: 2.5rem;
  height: 2.5rem;
  padding: 0.625rem;
  color: ${(props) => props.theme.colors.blue900};
`

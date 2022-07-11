import { Logo } from '../Logo'
import { MenuItem } from '../MenuItem'
import { Header, SidebarContainer } from './styles'
import { GoFileSubmodule, GoStar } from 'react-icons/go'
import { TiHome } from 'react-icons/ti'
import { IoMdShare } from 'react-icons/io'
import { FaTrashAlt } from 'react-icons/fa'
import { AiFillFileUnknown } from 'react-icons/ai'
import { UpgradePlain } from '../UpgradePlain'

export function Sidebar() {
  const menu: any[] = [
    { key: 'home', label: 'Home', icon: <TiHome />, isSelected: true },
    { key: 'my-file', label: 'My Files', icon: <GoFileSubmodule /> },
    { key: 'starred', label: 'Starred', icon: <GoStar /> },
    {
      key: 'files-requests',
      label: 'File Requests',
      icon: <AiFillFileUnknown />,
    },
    { key: 'shared', label: 'Shared', icon: <IoMdShare /> },
    { key: 'deleted', label: 'Deleted', icon: <FaTrashAlt /> },
  ]

  return (
    <SidebarContainer>
      <Header>
        <Logo />
      </Header>

      {menu.map((item) => (
        <MenuItem
          key={item.key}
          icon={item.icon}
          isSelected={item.isSelected}
          label={item.label}
        />
      ))}

      <UpgradePlain />
    </SidebarContainer>
  )
}

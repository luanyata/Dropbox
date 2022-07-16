import styled from 'styled-components'
import { FaFolder } from 'react-icons/fa'
import { BsThreeDotsVertical } from 'react-icons/bs'

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 332.5px;
  height: 196px;
  background: ${(props) => props.theme.colors.white};
  border-radius: 20px;
  box-shadow: 0px 2px 30px rgba(0, 0, 0, 0.06);
  padding: 1.875rem 2.063rem;
`

export const Header = styled.header`
  display: flex;
`

export const Info = styled.div`
  margin-right: auto;
`

export const FolderIcon = styled(FaFolder)`
  border-radius: 10px;
  background: ${(props) => props.theme.colors.blue200};
  width: 2.5rem;
  height: 2.5rem;
  padding: 0.625rem;
  margin-right: 0.688rem;
  color: ${(props) => props.theme.colors.blue500};
`

export const MoreIcon = styled(BsThreeDotsVertical)`
  width: 2.5rem;
  height: 2.5rem;
  padding: 0.625rem;
`
export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2.063rem;
`

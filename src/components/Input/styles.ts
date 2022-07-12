import { IoIosSearch } from 'react-icons/io'
import styled from 'styled-components'

export const InputContainer = styled.div`
  width: 336px;
  height: 40px;
  display: flex;
  align-items: center;
  padding: 8px 16px;
  box-shadow: 0px 2px 100px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.white};
`

export const SearchIcon = styled(IoIosSearch)`
  font-size: 24px;
  margin-right: 16px;
`

export const InputContent = styled.input`
  width: 336px;
  height: 40px;
  border: none;
  border-radius: 8px;
`

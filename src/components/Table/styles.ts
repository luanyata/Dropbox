import styled from 'styled-components'

export const Container = styled.div`
  width: 1047px;
  border-radius: 20px;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 2px 30px rgba(0, 0, 0, 0.06);
  padding: 30px;
  margin-top: 24px;
  margin-bottom: 35px;
`

export const TableContainer = styled.table`
  width: 100%;
  border-collapse: collapse;
`
export const Tr = styled.tr`
  height: 70px;

  :nth-child(even) {
    background: ${({ theme }) => theme.colors.gray200};
  }
`

export const Th = styled.th`
  text-align: left;
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.gray500};
  font-weight: 500;
  line-height: 1.125rem;
  height: 70px;
`
export const Td = styled.td`
  text-align: left;
`

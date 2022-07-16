import { Container, TableContainer, Td, Th, Tr } from './styles'
import { BsThreeDotsVertical } from 'react-icons/bs'

export function Table() {
  return (
    <Container>
      <TableContainer>
        <Tr>
          <Th>Name</Th>
          <Th>Shared Users</Th>
          <Th>File Size</Th>
          <Th>Last Modified</Th>
          <Th></Th>
        </Tr>
        <Tr>
          <Td>Alfreds Futterkiste</Td>
          <Td>Maria Anders</Td>
          <Td>Germany</Td>
          <Td>Germany</Td>
          <Td>
            <BsThreeDotsVertical />
          </Td>
        </Tr>
        <Tr>
          <Td>Centro comercial Moctezuma</Td>
          <Td>Francisco Chang</Td>
          <Td>Mexico</Td>
          <Td>Germany</Td>
          <Td>
            <BsThreeDotsVertical />
          </Td>
        </Tr>
        <Tr>
          <Td>Ernst Handel</Td>
          <Td>Roland Mendel</Td>
          <Td>Austria</Td>
          <Td>Germany</Td>
          <Td>
            <BsThreeDotsVertical />
          </Td>
        </Tr>
      </TableContainer>
    </Container>
  )
}

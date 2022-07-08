import { Title } from '../Title'
import { LastUpdate } from '../LastUpdate'
import {
  Container,
  Content,
  FolderIcon,
  Header,
  Info,
  MoreIcon,
} from './styles'
import { Label } from '../Label'
import { Counter } from '../Counter'

export function Card() {
  return (
    <Container>
      <Header>
        <FolderIcon />
        <Info>
          <Title text="Documents" />
          <LastUpdate date="Sep 25, 2022, 13:25 PM" />
        </Info>
        <MoreIcon />
      </Header>
      <Content>
        <div>
          <Label text="Shared Users" />
          <Counter value={80} />
        </div>
        <div>
          <Label text="Inside File" />
          <Counter value={3985} />
        </div>
      </Content>
    </Container>
  )
}

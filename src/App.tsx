import { Button } from './components/Button'
import { Card } from './components/Card'
import { Category } from './components/Category'
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import { Table } from './components/Table'
import {
  AppContainer,
  AppContent,
  FilesContainer,
  HeaderFilesContainer,
} from './styles'
import { theme } from './styles/theme'

const cards = [
  { id: 1, value: '' },
  { id: 2, value: '' },
  { id: 3, value: '' },
  { id: 4, value: '' },
  { id: 5, value: '' },
]

function App() {
  return (
    <AppContainer>
      <Sidebar />
      <AppContent>
        <Header />

        <HeaderFilesContainer>
          <Category title="All Files" />
          <Button
            title="+ Add New"
            bg={theme.colors.blue200}
            color={theme.colors.blue500}
          />
        </HeaderFilesContainer>

        <FilesContainer>
          {cards.map((card) => (
            <Card key={card.id} />
          ))}
        </FilesContainer>

        <Category title="Recent Files" />

        <Table />
      </AppContent>
    </AppContainer>
  )
}

export default App

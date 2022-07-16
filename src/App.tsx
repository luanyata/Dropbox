import { Card } from './components/Card'
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import { AppContainer, AppContent, FilesContainer } from './styles'

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
        <h2>All Files</h2>
        <FilesContainer>
          {cards.map((card) => (
            <Card key={card.id} />
          ))}
        </FilesContainer>
      </AppContent>
    </AppContainer>
  )
}

export default App

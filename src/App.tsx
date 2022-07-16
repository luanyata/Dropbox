import { Card } from './components/Card'
import Header from './components/Header'
import { Sidebar } from './components/Sidebar'
import { AppContainer, AppContent } from './styles'

function App() {
  return (
    <AppContainer>
      <Sidebar />
      <AppContent>
        <Header />
        <Card />
        <Card />
        <Card />
      </AppContent>
    </AppContainer>
  )
}

export default App

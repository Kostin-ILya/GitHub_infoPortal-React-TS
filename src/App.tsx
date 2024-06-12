import { Container } from 'components/Container'
import { Header } from 'components/Header'
import { Search } from 'components/Search'

import './App.css'
function App() {
  return (
    <Container>
      <Header />

      <Search isError />
    </Container>
  )
}

export default App

import { Container } from 'components/Container'
import { Header } from 'components/Header'
import { Search } from 'components/Search'
import { UserCard } from 'components/User/UserCard'

import { defaultUser } from 'mock'

import './App.css'
function App() {
  return (
    <Container>
      <Header />

      <Search isError />

      <UserCard {...defaultUser} />
    </Container>
  )
}

export default App

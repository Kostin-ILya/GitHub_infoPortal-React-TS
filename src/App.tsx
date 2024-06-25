import { useState } from 'react'

import { Container } from 'components/Container'
import { Header } from 'components/Header'
import { Search } from 'components/Search'
import { UserCard } from 'components/User/UserCard'

import { GithubError, LocalUser, User } from 'interfaces'
import { extractLocalUser } from 'utils/exract-local-user'
import { defaultUser } from 'mock'
import './App.css'

function App() {
  const [user, setUser] = useState<LocalUser | null>(defaultUser)

  const fetchUser = async (userName: string) => {
    const res = await fetch(`https://api.github.com/users/${userName}`)
    const data: User | GithubError = await res.json()

    if ('login' in data) {
      setUser(extractLocalUser(data))
    } else {
      setUser(null)
    }
  }

  return (
    <Container>
      <Header />

      <Search isError={!user} onSearch={fetchUser} />

      {user && <UserCard {...user} />}
    </Container>
  )
}

export default App

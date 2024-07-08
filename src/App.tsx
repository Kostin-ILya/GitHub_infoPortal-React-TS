import { useEffect, useState } from 'react'

import { Container } from 'components/Container'
import { Header } from 'components/Header'
import { Search } from 'components/Search'
import { UserCard } from 'components/User/UserCard'
import { Spinner } from 'components/Spinner'

import { GithubError, LoadingStatus, LocalUser, User } from 'interfaces'
import { extractLocalUser } from 'utils/exract-local-user'

import './App.css'

function App() {
  const [user, setUser] = useState<LocalUser | null>(null)
  const [loadingStatus, setLoadingStatus] = useState<LoadingStatus>('loading')

  useEffect(() => {
    loadDefaultUser()
  }, [])

  const fetchUser = async (userName: string) => {
    setLoadingStatus('loading')

    const res = await fetch(`https://api.github.com/users/${userName}`)
    const data: User | GithubError = await res.json()

    if ('login' in data) {
      setUser(extractLocalUser(data))
      setLoadingStatus('success')
    } else {
      setUser(null)
      setLoadingStatus('error')
    }
  }

  const loadDefaultUser = () => {
    fetchUser('microsoft')
  }

  return (
    <Container>
      <Header loadDefaultUser={loadDefaultUser} />

      <Search
        isError={loadingStatus === 'error'}
        onSearch={fetchUser}
        btnDisabled={loadingStatus === 'loading'}
      />

      {loadingStatus === 'loading' && <Spinner />}

      {loadingStatus === 'success' && user && <UserCard {...user} />}
    </Container>
  )
}

export default App

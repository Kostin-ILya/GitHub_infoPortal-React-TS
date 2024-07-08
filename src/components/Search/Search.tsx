import { useState } from 'react'

import { Button } from 'components/Button'

import styles from './Search.module.scss'
import SearchIcon from 'assets/icon-search.svg?react'

interface SearchProps {
  isError: boolean
  onSearch: (userName: string) => void
  btnDisabled: boolean
}

export const Search = ({ isError, onSearch, btnDisabled }: SearchProps) => {
  const [search, setSearch] = useState('')

  const handleSearch = () => {
    if (search) onSearch(search)
    setSearch('')
  }

  return (
    <div className={styles.search}>
      <label className={styles.label} htmlFor="username">
        <SearchIcon />
      </label>

      <input
        className={styles.textField}
        type="text"
        id="username"
        placeholder="Search GitHub username"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
      />

      {isError && <div className={styles.error}>No result</div>}

      <Button onClick={handleSearch} disabled={btnDisabled}>
        Search
      </Button>
    </div>
  )
}

import { useState } from 'react'

import { Button } from 'components/Button'

import styles from './Search.module.scss'
import SearchIcon from 'assets/icon-search.svg?react'

interface SearchProps {
  isError: boolean
}

export const Search = ({ isError }: SearchProps) => {
  const [search, setSearch] = useState('')

  const onSearch = () => {
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
      />

      {isError && <div className={styles.error}>No result</div>}

      <Button onClick={onSearch}>Search</Button>
    </div>
  )
}

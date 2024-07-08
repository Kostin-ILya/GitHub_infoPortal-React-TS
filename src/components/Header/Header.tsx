import { ThemeSwitcher } from 'components/ThemeSwitcher'

import styles from './Header.module.scss'

export type HeaderProps = {
  loadDefaultUser: () => void
}

export const Header = ({ loadDefaultUser }: HeaderProps) => (
  <div className={styles.header}>
    <div className={styles.logo} onClick={loadDefaultUser}>
      devfinder
    </div>

    <ThemeSwitcher />
  </div>
)

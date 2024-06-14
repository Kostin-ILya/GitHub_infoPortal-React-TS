import { LocalUser } from 'interfaces'
import styles from './UserTitle.module.scss'

interface UserTitleProps
  extends Pick<LocalUser, 'name' | 'login' | 'created'> {}

const localDate = new Intl.DateTimeFormat('ru-RU', {
  day: 'numeric',
  month: 'short',
  year: 'numeric',
})

export const UserTitle = ({ created, login, name }: UserTitleProps) => {
  const joinedDate = localDate.format(new Date(created))

  return (
    <div className={styles.userTitle}>
      <h2>{name}</h2>
      <h3>{login}</h3>
      <span>{joinedDate}</span>
    </div>
  )
}

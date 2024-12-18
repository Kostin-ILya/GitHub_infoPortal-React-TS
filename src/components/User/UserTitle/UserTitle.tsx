import { LocalUser } from 'interfaces'
import styles from './UserTitle.module.scss'

interface UserTitleProps
  extends Pick<LocalUser, 'name' | 'login' | 'created'> {}

const localDate = new Intl.DateTimeFormat('en-GB', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
})

export const UserTitle = ({ created, login, name }: UserTitleProps) => {
  const joinedDate = localDate.format(new Date(created))

  return (
    <div className={styles.userTitle}>
      <h2>{name}</h2>

      <span>{'Joined ' + joinedDate}</span>

      <a href={`https://github.com/${login}`} target="_blank">
        {'@' + login}
      </a>
    </div>
  )
}

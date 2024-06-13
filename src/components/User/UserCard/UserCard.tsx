import { UserStat } from 'components/User/UserStat'

import { LocalUser } from 'interfaces'
import styles from './UserCard.module.scss'

interface UserCardProps extends LocalUser {}

export const UserCard = (props: UserCardProps) => {
  return (
    <div className={styles.userCard}>
      <UserStat
        repos={props.repos}
        followers={props.followers}
        following={props.following}
      />
    </div>
  )
}

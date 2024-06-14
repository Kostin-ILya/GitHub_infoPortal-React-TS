import { UserStat } from 'components/User/UserStat'
import { UserTitle } from '../UserTitle'

import { LocalUser } from 'interfaces'
import styles from './UserCard.module.scss'

interface UserCardProps extends LocalUser {}

export const UserCard = (props: UserCardProps) => {
  return (
    <div className={styles.userCard}>
      <img src={props.avatar} alt={props.login} className={styles.avatar} />
      <UserTitle
        created={props.created}
        login={props.login}
        name={props.name}
      />

      <p className={`${styles.bio}${props.bio ? '' : ` ${styles.empty}`}`}>
        {props.bio || 'This profile has no bio'}
      </p>

      <UserStat
        repos={props.repos}
        followers={props.followers}
        following={props.following}
      />
    </div>
  )
}

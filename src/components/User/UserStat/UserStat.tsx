import { UserStatItem } from 'components/User/UserStatItem'

import { LocalUser } from 'interfaces'
import styles from './UserStat.module.scss'

export interface UserStatProps
  extends Pick<LocalUser, 'repos' | 'followers' | 'following'> {}

export const UserStat = ({ repos, followers, following }: UserStatProps) => (
  <div className={styles.userStat}>
    <UserStatItem title="Repos" quantity={repos} />
    <UserStatItem title="Following" quantity={following} />
    <UserStatItem title="Followers" quantity={followers} />
  </div>
)

import styles from './UserStatItem.module.scss'

interface UserStatItemProps {
  title: string
  quantity: number
}

export const UserStatItem = ({ title, quantity }: UserStatItemProps) => {
  return (
    <div className={styles.info}>
      <div className={styles.infoTitle}>{title}</div>
      <div className={styles.infoNumber}>{quantity}</div>
    </div>
  )
}

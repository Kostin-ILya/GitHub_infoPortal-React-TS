import styles from './Button.module.scss'

interface ButtonProps {
  children: string
  disabled?: boolean
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

export const Button = ({ children, onClick, disabled }: ButtonProps) => (
  <button className={styles.button} onClick={onClick} disabled={disabled}>
    {children}
  </button>
)

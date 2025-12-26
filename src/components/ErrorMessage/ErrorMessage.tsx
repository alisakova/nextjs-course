import styles from './errorMessage.module.css'
import { PropsWithChildren } from 'react'

export const ErrorMessage = ({ children }: PropsWithChildren) => {
  return <div className={styles.errorMessage}>{children}</div>
}

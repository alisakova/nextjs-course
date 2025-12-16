import { FormHTMLAttributes, PropsWithChildren } from 'react'
import styles from './form.module.css'

interface FormProps extends PropsWithChildren, FormHTMLAttributes<HTMLFormElement> {}

export const Form = ({ children, ...props }: FormProps) => {
  return (
    <form {...props} className={styles.form}>
      {children}
    </form>
  )
}

import styles from './field.module.css'
import { PropsWithChildren } from 'react'

interface FieldProps extends PropsWithChildren, Pick<HTMLLabelElement, 'htmlFor'> {
  label: string
}

export const Field = ({ label, htmlFor, children }: FieldProps) => {
  return (
    <div className={styles.field}>
      <label htmlFor={htmlFor}>{label}</label>
      {children}
    </div>
  )
}

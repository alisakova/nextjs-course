import styles from './input.module.css'
import { InputHTMLAttributes } from 'react'

export type InputProps = InputHTMLAttributes<HTMLInputElement>

export const Input = (props: InputHTMLAttributes<HTMLInputElement>) => {
  return <input className={styles.input} {...props} />
}

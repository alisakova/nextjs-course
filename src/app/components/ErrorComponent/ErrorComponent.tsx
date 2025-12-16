import styles from './errorComponent.module.css'

interface ErrorComponentProps {
  message?: string
  reset?: VoidFunction
}

export const ErrorComponent = ({ message = 'Ошибка загрузки данных', reset }: ErrorComponentProps) => {
  return (
    <div className={styles.container}>
      {message}
      {reset && (
        <button className={styles.button} onClick={reset}>
          Попробовать еще раз
        </button>
      )}
    </div>
  )
}

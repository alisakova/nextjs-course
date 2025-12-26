import styles from './footer.module.css'

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.appName}>Tennis store</p>
      <p className={styles.copyRightText}>&copy; 2025 Tennis Store. All rights reserved.</p>
    </footer>
  )
}

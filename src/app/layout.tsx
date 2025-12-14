import './global.css'

import styles from './layout.module.css'
import { Metadata } from 'next'
import { Header } from './components/Header'
import { Footer } from './components/Footer/Footer'

export const metadata: Metadata = {
  title: 'Tennis store',
}

const RootLayout = ({ children }: LayoutProps<'/'>) => {
  return (
    <html>
      <body>
        <Header />

        <main className={styles.main}>{children}</main>

        <Footer />
      </body>
    </html>
  )
}

export default RootLayout

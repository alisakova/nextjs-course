import './global.css'

import styles from './layout.module.css'
import { Metadata } from 'next'
import { Header } from './components/Header'
import { Footer } from './components/Footer/Footer'
import NextTopLoader from 'nextjs-toploader'

export const metadata: Metadata = {
  title: 'Магазин ракеток',
  description: 'Лучший магазин теннисных ракеток',
}

const RootLayout = ({ children }: LayoutProps<'/'>) => {
  return (
    <html>
      <body>
        <NextTopLoader color="#3392ea" showSpinner={false} />

        <Header />

        <main className={styles.main}>{children}</main>

        <Footer />
      </body>
    </html>
  )
}

export default RootLayout

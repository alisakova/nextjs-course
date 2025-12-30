import styles from './layout.module.css'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer/Footer'
import NextTopLoader from 'nextjs-toploader'
import { getUser } from '@/services/get-user'
import { UserProvider } from '@/providers/user'
import { FavoriteProvider } from '../../providers/favorite'

const Layout = async ({ children }: LayoutProps<'/'>) => {
  const { data } = await getUser()

  return (
    <UserProvider user={data ?? null}>
      <FavoriteProvider>
        <NextTopLoader color="#3392ea" showSpinner={false} />

        <Header />

        <main className={styles.main}>{children}</main>

        <Footer />
      </FavoriteProvider>
    </UserProvider>
  )
}

export default Layout

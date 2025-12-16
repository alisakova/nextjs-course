import './global.css'

import { Metadata } from 'next'
import NextTopLoader from 'nextjs-toploader'

export const metadata: Metadata = {
  title: 'Магазин ракеток',
  description: 'Лучший магазин теннисных ракеток',
}

const RootLayout = async ({ children }: LayoutProps<'/'>) => {
  return (
    <html lang="en">
      <body>
        <NextTopLoader showSpinner={false} />
        {children}
      </body>
    </html>
  )
}

export default RootLayout

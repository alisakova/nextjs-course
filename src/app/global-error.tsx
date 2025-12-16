'use client'

import { ErrorComponent } from './components/ErrorComponent'

interface GlobalErrorProps {
  reset?: VoidFunction
}

const GlobalError = ({ reset }: GlobalErrorProps) => {
  return (
    <html>
      <body>
        <ErrorComponent message="Глобальная ошибка" reset={reset} />
      </body>
    </html>
  )
}

export default GlobalError

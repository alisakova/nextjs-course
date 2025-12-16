import { Metadata } from 'next'
import { SectionHeader } from '../components/SectionHeader'
import { Top10Section } from '../components/Top10Section'
import { Suspense } from 'react'

export const metadata: Metadata = {
  title: 'Топ 10',
  description: 'Топ 10 ракеток',
}

const Top10Page = () => {
  return (
    <section>
      <SectionHeader title="Топ 10" />
      <Suspense fallback={<div>Загрузка топ 10...</div>}>
        <Top10Section withGrid />
      </Suspense>
    </section>
  )
}

export default Top10Page

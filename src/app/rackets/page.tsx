import { Metadata } from 'next'
import { SectionHeader } from '../components/SectionHeader'
import { AllRacketsSection } from '../components/AllRacketsSection'
import { Suspense } from 'react'

export const metadata: Metadata = {
  title: 'Ракетки',
  description: 'Каталог представленных ракеток',
}

const RacketsPage = () => {
  return (
    <section>
      <SectionHeader title="Ракетки" />
      <Suspense fallback={<div>Загрузка ракеток...</div>}>
        <AllRacketsSection limit={20} />
      </Suspense>
    </section>
  )
}

export default RacketsPage

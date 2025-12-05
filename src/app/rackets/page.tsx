import { Metadata } from 'next'
import { SectionHeader } from '../components/SectionHeader'
import { AllRacketsSection } from '../components/AllRacketsSection'

export const metadata: Metadata = {
  title: 'Ракетки',
}

const RacketsPage = () => {
  return (
    <section>
      <SectionHeader title="Ракетки" />
      <AllRacketsSection limit={20} />
    </section>
  )
}

export default RacketsPage

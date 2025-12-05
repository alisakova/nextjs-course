import { Metadata } from 'next'
import { SectionHeader } from '../components/SectionHeader'
import { Top10Section } from '../components/Top10Section'

export const metadata: Metadata = {
  title: 'Топ 10',
}

const Top10Page = () => {
  return (
    <section>
      <SectionHeader title="Топ 10" />
      <Top10Section withGrid />
    </section>
  )
}

export default Top10Page

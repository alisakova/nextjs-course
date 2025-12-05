import { SectionHeader } from './components/SectionHeader'
import { AllRacketsSection } from './components/AllRacketsSection'
import { Top10Section } from './components/Top10Section'

import styles from './homePage.module.css'

const HomePage = () => {
  return (
    <div className={styles.container}>
      <section>
        <SectionHeader allLink="/rackets" title="Ракетки" />
        <AllRacketsSection withSlider />
      </section>
      <section>
        <SectionHeader allLink="/top-10" title="Топ 10" />
        <Top10Section withSlider />
      </section>
    </div>
  )
}

export default HomePage

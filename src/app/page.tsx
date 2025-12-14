import { SectionHeader } from './components/SectionHeader'
import { AllRacketsSection } from './components/AllRacketsSection'
import { Top10Section } from './components/Top10Section'

import styles from './homePage.module.css'
import { Suspense } from 'react'

const HomePage = () => {
  return (
    <div className={styles.container}>
      <section>
        <SectionHeader allLink="/rackets" title="Ракетки" />
        <Suspense fallback={<div>Загрузка ракеток...</div>}>
          <AllRacketsSection withSlider />
        </Suspense>
      </section>
      <section>
        <SectionHeader allLink="/top-10" title="Топ 10" />
        <Suspense fallback={<div>Загрузка топ 10...</div>}>
          <Top10Section withSlider />
        </Suspense>
      </section>
    </div>
  )
}

export default HomePage

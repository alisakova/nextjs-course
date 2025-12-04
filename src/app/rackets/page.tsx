import { rackets } from '../../../materials/mocks'
import { RacketCard } from '../_components/RacketCard'
import styles from './rackets.module.css'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Ракетки',
}

const RacketsPage = () => {
  return (
    <>
      <div className={styles.header}>
        <h1 className={styles.title}>Ракетки</h1>
      </div>
      <div className={styles.rackets}>
        {rackets.map(({ imageUrl, id, name }) => (
          <RacketCard key={id} imgSrc={imageUrl} racketId={id} title={name} />
        ))}
      </div>
    </>
  )
}

export default RacketsPage

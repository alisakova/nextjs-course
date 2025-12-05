import { rackets } from '../../materials/mocks'
import { RacketCard } from './_components/RacketCard'
import styles from './homePage.module.css'
import Link from 'next/link'

const racketsDisplayed = rackets.slice(0, 5)

const HomePage = () => {
  return (
    <>
      <div className={styles.header}>
        <h1 className={styles.title}>Ракетки</h1>
        <Link href="/rackets" className={styles.link}>
          Все &#8599;
        </Link>
      </div>
      <div className={styles.rackets}>
        {racketsDisplayed.map(({ imageUrl, id, name }) => (
          <RacketCard key={id} imgSrc={imageUrl} racketId={id} title={name} />
        ))}
      </div>
    </>
  )
}

export default HomePage

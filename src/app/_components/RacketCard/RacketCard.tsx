import { ImageProps } from 'next/image'
import Link from 'next/link'

import styles from './racketCard.module.css'
import { RacketImage } from '../RacketImage'

interface RacketCardProps {
  imgSrc: ImageProps['src']
  title: string
  racketId: number
}

export const RacketCard = ({ imgSrc, title, racketId }: RacketCardProps) => {
  return (
    <Link className={styles.racketCard} href={`/racket/${racketId}`}>
      <RacketImage src={imgSrc} alt={title} />
      <p>{title}</p>
    </Link>
  )
}

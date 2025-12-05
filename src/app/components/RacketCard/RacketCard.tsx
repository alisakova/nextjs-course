import { ImageProps } from 'next/image'
import Link from 'next/link'

import styles from './racketCard.module.css'
import { RacketImage } from '../RacketImage'
import classNames from 'classnames'

interface RacketCardProps {
  imgSrc: ImageProps['src']
  title: string
  racketId: number
  className?: string
}

export const RacketCard = ({ imgSrc, title, racketId, className }: RacketCardProps) => {
  return (
    <Link className={classNames(styles.racketCard, className)} href={`/racket/${racketId}`}>
      <RacketImage src={imgSrc} alt={title} />
      <p>{title}</p>
    </Link>
  )
}

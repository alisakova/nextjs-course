'use client'

import { ImageProps } from 'next/image'
import Link from 'next/link'

import styles from './racketCard.module.css'
import { RacketImage } from '../RacketImage'
import classNames from 'classnames'
import { use } from 'react'
import { UserContext } from '@/providers/user'
import { useHydrateFavorite, useIsFavoriteById } from '@/providers/favorite/hooks'
import { ToggleFavoriteButton } from '../ToggleFavoriteButton'
import { Racket } from '@/types/racket'

interface RacketCardProps extends Pick<Racket, 'userData' | 'id'> {
  imgSrc: ImageProps['src']
  title: string
  className?: string
}

export const RacketCard = ({ imgSrc, title, id, className, userData }: RacketCardProps) => {
  const { isAuthorized } = use(UserContext)

  useHydrateFavorite({ id, isFavoriteInitial: Boolean(userData?.isFavorite) })

  const isFavorite = useIsFavoriteById({ id, isFavoriteInitial: Boolean(userData?.isFavorite) })

  return (
    <article className={classNames(styles.racketCard, className)}>
      <div className={styles.imageContainer}>
        <RacketImage className={styles.image} src={imgSrc} alt={title} />
        {isAuthorized && <ToggleFavoriteButton className={styles.button} isFavorite={isFavorite} racketId={id} />}
      </div>
      <Link href={`/racket/${id}`} className={styles.link}>
        {title}
      </Link>
    </article>
  )
}

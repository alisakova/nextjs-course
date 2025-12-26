import styles from './racketImage.module.css'
import Image, { ImageProps } from 'next/image'
import classNames from 'classnames'

export const RacketImage = ({ src, alt, className }: ImageProps) => {
  return (
    <div className={classNames(styles.racketImage, className)}>
      <Image className={styles.image} fill src={src} alt={alt} />
    </div>
  )
}

import styles from './racketImage.module.css'
import Image, { ImageProps } from 'next/image'

export const RacketImage = ({ src, alt, className }: ImageProps) => {
  return (
    <div className={`${styles.racketImage} ${className ? className : ''}`}>
      <Image objectFit="contain" className={styles.image} fill src={src} alt={alt} />
    </div>
  )
}

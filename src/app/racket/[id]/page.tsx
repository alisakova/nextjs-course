import { rackets } from '../../../../materials/mocks'
import styles from './racketPage.module.css'
import { RacketImage } from '../../_components/RacketImage'
import { Metadata } from 'next'

export const generateStaticParams = () => {
  return [{ id: '1' }, { id: '2' }, { id: '3' }]
}

export async function generateMetadata({ params }: PageProps<'/racket/[id]'>): Promise<Metadata> {
  const { id } = await params

  const racket = rackets.find((racket) => String(racket.id) === id)

  return {
    title: racket?.name ?? 'Ракетка не найдена',
    description: racket?.description ?? '',
  }
}

const RacketPage = async ({ params }: PageProps<'/racket/[id]'>) => {
  const { id } = await params

  const racket = rackets.find((racket) => String(racket.id) === id)

  if (!racket) {
    return <div>Такой ракетки не существует</div>
  }

  const { brand, name, description, price, imageUrl } = racket

  return (
    <div className={styles.wrapper}>
      <div className={styles.info}>
        <span className={styles.brandName}>{brand.name}</span>
        <h1>{name}</h1>
        <p>{description}</p>
      </div>

      <RacketImage className={styles.image} src={imageUrl} alt={name} />

      <p className={styles.price}>€{price}</p>
    </div>
  )
}

export default RacketPage

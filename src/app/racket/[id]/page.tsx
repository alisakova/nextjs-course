import styles from './racketPage.module.css'
import { RacketImage } from '../../components/RacketImage'
import { getProductById } from '../../../services/get-product-by-id'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { getMetaProductById } from '../../../services/get-meta-product-by-id'

export async function generateMetadata({ params }: PageProps<'/racket/[id]'>): Promise<Metadata> {
  const { id } = await params
  const { isError, data } = await getMetaProductById({ id })

  if (isError || !data) {
    return {
      title: 'Ракетка',
      description: 'Описание ракетки',
    }
  }

  return {
    title: data.name,
    description: data.description,
  }
}

const RacketPage = async ({ params }: PageProps<'/racket/[id]'>) => {
  const { id } = await params

  if (typeof id !== 'string') {
    return null
  }

  const { isError, data } = await getProductById({ id })

  if (!isError && !data) {
    return notFound()
  }

  if (isError || !data) {
    throw new Error()
  }

  const { brand, name, description, price, imageUrl } = data

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

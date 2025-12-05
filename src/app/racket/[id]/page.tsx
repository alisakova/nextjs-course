import styles from './racketPage.module.css'
import { RacketImage } from '../../components/RacketImage'
import { getProductById } from '../../../services/get-product-by-id'
import { notFound } from 'next/navigation'

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
    return <div>Ошибка загрузки данных</div>
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

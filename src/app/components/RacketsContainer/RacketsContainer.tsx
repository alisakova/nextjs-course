import { RacketCard } from '../RacketCard'
import styles from './racketsContainer.module.css'
import classNames from 'classnames'
import { Racket } from '../../../types/racket'

export interface RacketsContainerProps {
  withGrid?: boolean
  withSlider?: boolean
  data: Racket[]
}

export const RacketsContainer = async ({ data, withGrid = true, withSlider = false }: RacketsContainerProps) => {
  return (
    <div
      className={classNames({
        [styles.withGrid]: withGrid,
        [styles.withSlider]: withSlider,
      })}
    >
      {data.map(({ imageUrl, id, name }) => (
        <RacketCard
          className={classNames({
            [styles.cardInGrid]: withGrid,
          })}
          key={id}
          imgSrc={imageUrl}
          racketId={id}
          title={name}
        />
      ))}
    </div>
  )
}

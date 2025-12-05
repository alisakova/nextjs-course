import { Suspense } from 'react'
import { RacketsContainer, RacketsContainerProps } from '../RacketsContainer'
import { getProducts } from '../../../services/get-products'

interface AllRacketsSectionProps extends Omit<RacketsContainerProps, 'data'> {
  limit?: number
  page?: number
}

export const AllRacketsSection = async ({ limit = 10, page = 1, withSlider, withGrid }: AllRacketsSectionProps) => {
  const { isError, data } = await getProducts({ limit, page })

  if (isError || !data) {
    return null
  }

  return (
    <Suspense fallback={<div>Загрузка ракеток...</div>}>
      <RacketsContainer data={data} withSlider={withSlider} withGrid={withGrid} />
    </Suspense>
  )
}

import { Suspense } from 'react'
import { RacketsContainer, RacketsContainerProps } from '../RacketsContainer'
import { getTop10 } from '../../../services/get-top-10'

type Top10SectionProps = Pick<RacketsContainerProps, 'withGrid' | 'withSlider'>

export const Top10Section = async ({ withGrid, withSlider }: Top10SectionProps) => {
  const { isError, data } = await getTop10()

  if (isError || !data) {
    return null
  }

  return (
    <Suspense fallback={<div>Загрузка топ 10...</div>}>
      <RacketsContainer data={data} withSlider={withSlider} withGrid={withGrid} />
    </Suspense>
  )
}

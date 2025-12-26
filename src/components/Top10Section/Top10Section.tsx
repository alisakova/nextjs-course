import { RacketsContainer, RacketsContainerProps } from '../RacketsContainer'
import { getTop10 } from '@/services/get-top-10'

type Top10SectionProps = Pick<RacketsContainerProps, 'withGrid' | 'withSlider'>

export const Top10Section = async ({ withGrid, withSlider }: Top10SectionProps) => {
  const { isError, data } = await getTop10()

  if (isError || !data) {
    throw new Error()
  }

  return <RacketsContainer data={data} withSlider={withSlider} withGrid={withGrid} />
}

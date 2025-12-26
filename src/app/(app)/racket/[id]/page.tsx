import { getProductById } from '@/services/get-product-by-id'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { getMetaProductById } from '@/services/get-meta-product-by-id'
import { RacketInfo } from '@/components/RacketInfo'
import {cookies} from "next/headers";

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

  return <RacketInfo racket={data} />
}

export default RacketPage

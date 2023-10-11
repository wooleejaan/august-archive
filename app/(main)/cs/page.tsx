import { META_COMPUTER_SCIENCE } from '@/app/_meta'

import ListPageFeature from '@/libs/_shared/pages/feature/listPage.feature-shell'
import { ListPageProps } from '@/libs/_shared/types/routers.type'

export const metadata = META_COMPUTER_SCIENCE

export default async function ComputerSciencePage({
  searchParams,
}: ListPageProps) {
  return (
    <ListPageFeature property="cs" pageSize={10} cursor={searchParams.cursor} />
  )
}

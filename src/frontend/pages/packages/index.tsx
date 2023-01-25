import { ReactElement } from 'react'
import layout from '../../layouts/consumer'
import PackageCards from '../../components/packages/View/cards'

const Page = (): ReactElement => {
  return (
    <>
      <PackageCards />
    </>
  )
}

export default layout(Page, {})

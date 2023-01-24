import { NextPage } from 'next'
import { ReactElement } from 'react'
import Home from '../components/home'
import layout from '../layouts/consumer'

const HomePage: NextPage = (): ReactElement => {
  return (
    <>
      <Home />
    </>
  )
}

export default layout(HomePage, {})

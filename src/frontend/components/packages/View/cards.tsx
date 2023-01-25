import { ReactElement, useState } from 'react'
import { useQuery } from '@apollo/client'
import { GetPackagesQuery } from './query'
import { Grid } from '@mui/material'
import { Package, GetPackages } from '../../../../types/package'
import { PaginateDataArgs } from '../../../../types/common/paginateData'
import { SortDirection } from '../../../_enums/sortDirection'
import { StockQuantityOperator } from '../../../_enums/stockQuantity'
import Card from '../../_common/Card'
import Header from '../../_common/Header'
import Search from '../../_common/Search'
import Pagination from '../../_common/Pagination'
import CardContent from './cardContent'

const PackageCards = (): ReactElement => {
  const [args, setArgs] = useState<GetPackages>({
    collections: [],
    showPublic: true,
    stockQuantity: {
      operator: StockQuantityOperator.ABOVE,
      value1: 0,
      value2: null
    }
  })
  const [paginateDataArgs, setPaginateDataArgs] = useState<PaginateDataArgs>({
    page: 0,
    rowsPerPage: 20,
    searchText: '',
    sortBy: 'name',
    sortDirection: SortDirection.ASC
  })

  const { data, loading } = useQuery(GetPackagesQuery, {
    variables: { ...args, paginateData: paginateDataArgs }
  })
  const packages: Package[] = data?.get_packages || []
  const packagesCount: number = data?.get_packages_count || 0

  const PackageCards = [
    packages?.map((pack: Package): ReactElement => {
      const { _id, imageUrl, name } = pack

      return (
        <Card
          content={<CardContent pack={pack} />}
          imageAlt={`${name} Package Image`}
          imageSource={imageUrl || '/images/sample-product.jpeg'}
          redirectLink={{
            path: 'packages/[packageId]',
            url: `packages/${_id}`
          }}
        />
      )
    })
  ]

  return (
    <>
      <Header
        imageUrl={'url(http://localhost:4000/images/header.jpg)'}
        title={'Packages'}
      />
      <Search
        loading={loading}
        paginateDataArgs={paginateDataArgs}
        searchLabel={'Search Package Name'}
        searchPlaceholder={'ex. Falling Petals'}
        setPaginateDataArgs={setPaginateDataArgs}
      />
      <Grid container spacing={2} style={{ paddingLeft: 50, paddingRight: 50 }}>
        {PackageCards}
      </Grid>
      <Pagination
        count={packagesCount}
        paginateDataArgs={paginateDataArgs}
        rowsPerPageOptions={[20, 24, 28, 32, 36, 40]}
        setPaginateDataArgs={setPaginateDataArgs}
      />
    </>
  )
}

export default PackageCards

import { gql } from '@apollo/client'

export const GetPackageQuery = gql`
  query ($_id: ID!) {
    get_package(_id: $_id) {
      _id
      collection
      description
      discount
      imageUrl
      items
      name
      quantity
      showPublic
      stockQuantity
      totalPrice
    }
  }
`

export const GetPackagesQuery = gql`
  query (
    $collections: [String]
    $dateRange: DateRangeInput
    $discount: Boolean
    $paginateData: PaginateDataInput
    $showPublic: Boolean
    $stockQuantity: StockQuantityInput
  ) {
    get_packages(
      collections: $collections
      dateRange: $dateRange
      discount: $discount
      paginateData: $paginateData
      showPublic: $showPublic
      stockQuantity: $stockQuantity
    ) {
      _id
      discount
      imageUrl
      name
      stockQuantity
      totalPrice
    }

    get_packages_count(
      collections: $collections
      dateRange: $dateRange
      discount: $discount
      paginateData: $paginateData
      showPublic: $showPublic
      stockQuantity: $stockQuantity
    )
  }
`

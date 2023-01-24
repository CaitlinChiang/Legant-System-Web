import { gql } from '@apollo/client'

export const GetConsumer = gql`
  query {
    get_consumer {
      _id
      email
      firstName
      lastName
    }
  }
`

export const GetPackage = gql`
  query {
    get_package {
      quantity
    }
  }
`

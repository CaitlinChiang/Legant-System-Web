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

export const GetCart = gql`
  query {
    get_cart {
      quantity
    }
  }
`

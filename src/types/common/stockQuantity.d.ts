import { StockQuantityOperator } from '../../enums/stockQuantity'

export interface StockQuantity {
  operator?: StockQuantityOperator
  value1?: number
  value2?: number
}

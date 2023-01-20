import { OrderStatus } from '../../../enums/orderStatus'
import { correctArgs } from './correctArgs'
import { formatDateRange } from '../handleFormats/formatDateRange'
import { stockQuantityArgs } from './stockQuantityArgs'

export const queryArgs = (args: any): any => {
  const {
    categories,
    dateRange,
    discount,
    paginateData,
    statuses,
    stockQuantity,
    ...commonArgs
  } = args

  if (paginateData?.searchText) {
    const modifiedSearchText = paginateData?.searchText.split('@')[0]
    return { $text: { $search: modifiedSearchText } }
  }

  const queryArgs: any = { ...commonArgs }
  correctArgs(queryArgs)

  if (categories?.length > 0) {
    queryArgs.category = {
      $in: categories.map((category: string): string => category)
    }
  }

  if (dateRange?.startDate && dateRange?.endDate) {
    queryArgs[dateRange.filterBy] = {
      $gte: formatDateRange(dateRange?.startDate, true),
      $lte: formatDateRange(dateRange?.endDate, false)
    }
  }

  if (discount) {
    queryArgs.discount = { $exists: true }
  }

  if (statuses?.length > 0) {
    queryArgs.status = {
      $in: statuses.map((status: OrderStatus): OrderStatus => status)
    }
  }

  if (stockQuantity) {
    stockQuantityArgs(queryArgs, stockQuantity)
  }

  return queryArgs
}

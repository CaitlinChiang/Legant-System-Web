import { SortDirection } from '../../enums/sortDirection'

export interface PaginateDataArgs {
  page?: number
  rowsPerPage?: number
  searchText?: string
  sortBy?: string
  sortDirection?: SortDirection
}

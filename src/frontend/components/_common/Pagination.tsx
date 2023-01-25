import { ReactElement } from 'react'
import { Box, IconButton, TablePagination } from '@mui/material'
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft'
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight'
import { PaginateDataArgs } from '../../../types/common/paginateData'
import { generateRowsPerPage } from '../../_utils/handleData/generateRowsPerPage'

const Pagination = ({
  count,
  paginateDataArgs,
  rowsPerPageOptions,
  setPaginateDataArgs
}: {
  count: number
  paginateDataArgs: PaginateDataArgs
  rowsPerPageOptions?: number[]
  setPaginateDataArgs: React.Dispatch<React.SetStateAction<PaginateDataArgs>>
}): ReactElement => {
  const { page, rowsPerPage } = paginateDataArgs

  const TablePaginationActions = (props: any): ReactElement => {
    const { count, onPageChange, page, rowsPerPage } = props

    return (
      <Box sx={{ flexShrink: 0, ml: 2.5 }}>
        <IconButton
          disabled={page === 0}
          onClick={(e: any) => onPageChange(e, page - 1)}
          style={{ color: '#D8D8D8' }}
        >
          <KeyboardArrowLeft />
        </IconButton>
        <IconButton
          disabled={page >= Math.ceil(count / rowsPerPage) - 1}
          onClick={(e: any) => onPageChange(e, page + 1)}
          style={{ color: '#D8D8D8' }}
        >
          <KeyboardArrowRight />
        </IconButton>
      </Box>
    )
  }

  return (
    <Box sx={{ paddingRight: '40px', paddingTop: '50px' }}>
      <TablePagination
        color={'primary'}
        component={'span'}
        count={count}
        labelRowsPerPage={'Items per page:'}
        onRowsPerPageChange={async (e): Promise<void> => {
          const newRows = Number(e.target.value)
          setPaginateDataArgs({
            ...paginateDataArgs,
            page: 0,
            rowsPerPage: newRows
          })
        }}
        onPageChange={async (_e, newPage: number): Promise<void> => {
          window.scrollTo(0, 0)
          setPaginateDataArgs({
            ...paginateDataArgs,
            page: newPage
          })
        }}
        page={page}
        rowsPerPage={rowsPerPage || count}
        rowsPerPageOptions={rowsPerPageOptions || generateRowsPerPage(count)}
        ActionsComponent={TablePaginationActions}
        SelectProps={{ native: true }}
      />
    </Box>
  )
}

export default Pagination

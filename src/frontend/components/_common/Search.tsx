import { ReactElement, useEffect, useState, KeyboardEvent } from 'react'
import {
  Box,
  Button,
  CircularProgress,
  Grid,
  IconButton,
  InputAdornment,
  TextField
} from '@mui/material'
import CancelIcon from '@mui/icons-material/Cancel'
import SearchIcon from '@mui/icons-material/Search'
import { PaginateDataArgs } from '../../../types/common/paginateData'

const Search = ({
  loading,
  paginateDataArgs,
  searchLabel,
  searchPlaceholder,
  setPaginateDataArgs
}: {
  loading: boolean
  paginateDataArgs: PaginateDataArgs
  searchLabel?: string
  searchPlaceholder?: string
  setPaginateDataArgs: React.Dispatch<React.SetStateAction<PaginateDataArgs>>
}): ReactElement => {
  const { sortBy } = paginateDataArgs

  const [searchText, setSearchText] = useState<string>('')

  useEffect(() => {
    setPaginateDataArgs({ ...paginateDataArgs, page: 0 })
  }, [searchText, sortBy])

  return (
    <>
      <Grid
        container
        justifyContent='center'
        direction='column'
        alignItems='center'
        spacing={0}
        style={{ paddingLeft: 50, paddingRight: 50, paddingTop: 350 }}
      >
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            flexWrap: 'wrap'
          }}
        >
          <Grid item xs={11}>
            <SearchField
              onKeyDown={(e): void => {
                if (e.key === 'Enter') {
                  setPaginateDataArgs({ ...paginateDataArgs, searchText })
                }
              }}
              searchLabel={searchLabel}
              searchPlaceholder={searchPlaceholder}
              searchText={searchText}
              setSearchText={setSearchText}
            />
          </Grid>
          <Grid item xs={1}>
            <Button
              onClick={(): void => {
                setPaginateDataArgs({ ...paginateDataArgs, searchText })
              }}
              sx={{
                borderRadius: 5,
                marginTop: 2,
                backgroundColor: '#9B8827',
                ':hover': { backgroundColor: '#847420' }
              }}
              variant={'contained'}
            >
              {'Search'}
            </Button>
          </Grid>
        </Box>
      </Grid>
      {loading && <CircularProgress />}
    </>
  )
}

const SearchField = ({
  onKeyDown,
  searchLabel,
  searchPlaceholder,
  searchText,
  setSearchText
}: {
  onKeyDown?: (e: KeyboardEvent<HTMLDivElement>) => void
  searchLabel?: string
  searchPlaceholder?: string
  searchText: string
  setSearchText: React.Dispatch<React.SetStateAction<string>>
}): ReactElement => {
  return (
    <TextField
      fullWidth
      label={searchLabel}
      onChange={(e): void => setSearchText(e.target.value)}
      onKeyDown={onKeyDown}
      placeholder={searchPlaceholder}
      size={'small'}
      sx={{
        marginTop: 2,
        paddingRight: 1,
        '& .MuiOutlinedInput-root': {
          '& > fieldset': { borderRadius: '10px', border: '1px solid #fff' }
        },
        '& .MuiOutlinedInput-root.Mui-focused': {
          '& > fieldset': { borderRadius: '10px', border: '1px solid #CCCCCC' }
        }
      }}
      value={searchText}
      InputProps={{
        startAdornment: (
          <InputAdornment position={'start'}>
            <SearchIcon sx={{ color: '#fff' }} />
          </InputAdornment>
        ),
        endAdornment: (
          <InputAdornment position={'end'}>
            <IconButton edge={'end'} onClick={(): void => setSearchText('')}>
              <CancelIcon sx={{ color: '#fff' }} />
            </IconButton>
          </InputAdornment>
        )
      }}
      InputLabelProps={{
        sx: { color: '#D8D8D8' }
      }}
    />
  )
}

export default Search

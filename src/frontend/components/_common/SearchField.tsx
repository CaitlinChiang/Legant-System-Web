import { ReactElement, KeyboardEvent } from 'react'
import { IconButton, InputAdornment, TextField } from '@mui/material'
import CancelIcon from '@mui/icons-material/Cancel'
import SearchIcon from '@mui/icons-material/Search'

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

export default SearchField

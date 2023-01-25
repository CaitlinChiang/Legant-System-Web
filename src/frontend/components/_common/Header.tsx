import { ReactElement } from 'react'
import { Box, Grid, Typography } from '@mui/material'

const Header = ({
  imageUrl,
  title
}: {
  imageUrl: string
  title: string
}): ReactElement => {
  return (
    <>
      <Box
        style={{
          backgroundImage: imageUrl,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          width: '100vw',
          height: '320px',
          position: 'absolute'
        }}
      >
        <Grid
          container
          direction='column'
          alignItems='center'
          justifyContent='center'
          sx={{ width: '100%', marginTop: 15 }}
        >
          <Typography
            variant={'h1'}
            style={{
              color: '#EFE9CE',
              border: '1px solid #AE992F',
              paddingTop: 15,
              paddingBottom: 15,
              paddingRight: 200,
              paddingLeft: 200
            }}
          >
            {title}
          </Typography>
        </Grid>
      </Box>
    </>
  )
}

export default Header

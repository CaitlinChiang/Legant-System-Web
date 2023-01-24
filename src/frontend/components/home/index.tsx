import React, { ReactElement } from 'react'
import { useRouter } from 'next/router'
import { Button, Box, Divider, Grid, Typography } from '@mui/material'

const Home = (): ReactElement => {
  const router = useRouter()

  return (
    <>
      <Box
        style={{
          backgroundImage: 'url(http://localhost:4000/images/home.png)',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          width: '100vw',
          height: '100vh',
          position: 'fixed'
        }}
      >
        <Grid
          container
          direction='column'
          alignItems='center'
          justifyContent='center'
          sx={{ width: '100%', minHeight: '100vh' }}
        >
          <Divider
            sx={{
              color: '#C3A65E',
              border: '3px solid',
              marginBottom: 10,
              width: '70%'
            }}
          />
          <Typography variant={'h1'} style={{ marginBottom: 20 }}>
            {'L E G A N T'}
          </Typography>
          <Typography variant={'h2'}>{'GIFTING STUDIO'}</Typography>
          <Divider
            sx={{
              color: '#C3A65E',
              border: '3px solid',
              marginTop: 10,
              marginBottom: 3,
              width: '70%'
            }}
          />
          <Typography variant={'h2'}>
            {'Gift-giving made simple and stress-free.'}
          </Typography>
          <Button
            onClick={(): void => {
              router.push('/shop')
            }}
            style={{
              fontSize: 20,
              marginTop: 100,
              paddingLeft: 100,
              paddingRight: 100,
              background: '#44402D',
              border: '1px solid #999687'
            }}
            variant={'contained'}
          >
            {'View gift pack collections →'}
          </Button>
        </Grid>
      </Box>
    </>
  )
}

export default Home

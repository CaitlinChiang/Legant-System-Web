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
              border: '2px solid',
              marginBottom: 8,
              width: '75%'
            }}
          />
          <Typography variant={'h1'} style={{ marginBottom: 20 }}>
            {'L E G A N T'}
          </Typography>
          <Typography variant={'h3'}>{'GIFTING STUDIO'}</Typography>
          <Divider
            sx={{
              color: '#C3A65E',
              border: '2px solid',
              marginTop: 8,
              marginBottom: 3,
              width: '75%'
            }}
          />
          <Typography variant={'h3'}>
            {'Gift-giving made simple and stress-free.'}
          </Typography>
          <Button
            onClick={(): void => {
              router.push('/packages')
            }}
            style={{
              fontSize: 17,
              marginTop: 100,
              paddingLeft: 90,
              paddingRight: 90,
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

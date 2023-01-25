import { ReactElement } from 'react'
import { useRouter } from 'next/router'
import { Box, Grid } from '@mui/material'

const CardComponent = ({
  content,
  imageAlt,
  imageSource,
  redirectLink
}: {
  content: ReactElement
  imageAlt?: string
  imageSource?: string
  redirectLink?: { path: string; url: string }
}): ReactElement => {
  const router = useRouter()

  const handleOnClick = (): void => {
    if (!redirectLink) return null

    router.push(redirectLink.path, redirectLink.url)
  }

  return (
    <Grid item xs={6} md={3} lg={3} display={'flex'}>
      <Box onClick={handleOnClick} sx={{ p: 0, width: '100%', marginTop: 5 }}>
        <img alt={imageAlt} src={imageSource} width={'100%'} />
        {content}
      </Box>
    </Grid>
  )
}

export default CardComponent

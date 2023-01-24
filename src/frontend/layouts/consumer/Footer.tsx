import React from 'react'
import { Box, Typography } from '@mui/material'

const Footer = ({ sx }: { sx?: any }) => {
  return (
    <Box sx={sx}>
      <Typography variant={'caption'}>
        © 2023 All rights reserved by legant.co
      </Typography>
    </Box>
  )
}

export default Footer

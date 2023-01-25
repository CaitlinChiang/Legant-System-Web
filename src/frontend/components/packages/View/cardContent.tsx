import { ReactElement } from 'react'
import { Box, Button, Divider, Typography } from '@mui/material'
import { Package } from '../../../../types/package'
import { formatDiscountedPrice } from '../../../_utils/handleFormat/formatDiscountedPrice'
import { formatPrice } from '../../../_utils/handleFormat/formatPrice'

const CardContent = ({ pack }: { pack: Package }): ReactElement => {
  const { discount, name, totalPrice } = pack

  return (
    <Box>
      <Typography variant={'h5'}>{name}</Typography>
      <Divider
        style={{
          border: '1px solid #685023',
          marginTop: 5,
          marginBottom: 5
        }}
      />
      <Box style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box>
          <Typography variant={'h4'} style={{ marginTop: 5 }}>
            {formatDiscountedPrice(discount, totalPrice)}
          </Typography>
          {discount > 0 && (
            <Typography
              variant={'subtitle2'}
              style={{ textDecoration: 'line-through' }}
            >{`P${formatPrice(totalPrice)}`}</Typography>
          )}
        </Box>
        <Button
          variant={'outlined'}
          style={{
            color: '#fff',
            border: '1px solid #C3A65E',
            marginTop: 5,
            fontSize: 14,
            width: 130,
            height: 35
          }}
        >
          {'Add to Cart'}
        </Button>
      </Box>
    </Box>
  )
}

export default CardContent

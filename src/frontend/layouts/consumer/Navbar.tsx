import { ReactElement } from 'react'
import NextLink from 'next/link'
import { useRouter } from 'next/router'
import { useQuery } from '@apollo/client'
import { GetCart } from './query'
import {
  AppBar,
  Badge,
  Box,
  IconButton,
  List,
  ListItemButton,
  Toolbar,
  Typography
} from '@mui/material'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket'
import ReceiptIcon from '@mui/icons-material/Receipt'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import MenuIcon from '@mui/icons-material/Menu'
import { Cart } from '../../../types/cart'
import { formatNumber } from '../../_utils/handleFormat/formatNumber'

const globalAny: any = global

const Navbar = ({
  customClass,
  isMobile,
  position,
  sx,
  toggleMobileNavbar
}: {
  customClass?: any
  isMobile?: boolean
  position?: 'fixed' | 'absolute' | 'relative' | 'static' | 'sticky'
  sx?: any
  toggleMobileNavbar?: VoidFunction
}): ReactElement => {
  const router = useRouter()

  const { data, refetch } = useQuery(GetCart)
  const cart: Cart = data?.get_cart || {}

  globalAny.updateCartQty = (): void => {
    refetch()
  }

  const mainMenu = [
    { label: 'Home', route: '/' },
    { label: 'Packages', route: '/packages' },
    { label: 'Reviews', route: '/reviews' },
    { label: 'Contact Us', route: '/contact' }
  ]

  const secondaryMenu = [
    {
      icon: (
        <Badge badgeContent={formatNumber(cart?.quantity)} color={'info'}>
          <ShoppingBasketIcon />
        </Badge>
      ),
      route: '/cart'
    },
    { icon: <ReceiptIcon />, route: '/orders' },
    { icon: <AccountCircleIcon />, route: '/profile' }
  ]

  return (
    <>
      <AppBar sx={sx} position={position} elevation={0} className={customClass}>
        <Toolbar>
          {isMobile && (
            <>
              <IconButton
                size='large'
                aria-label='menu'
                onClick={toggleMobileNavbar}
                sx={{ color: '#fff', display: { lg: 'none', xs: 'flex' } }}
              >
                <MenuIcon />
              </IconButton>
              <Typography
                variant={'h3'}
                style={{ marginLeft: '30%', position: 'absolute' }}
              >
                {'LEGANT LOGO'}
              </Typography>
            </>
          )}
          {!isMobile && (
            <>
              <List sx={{ display: 'flex', flexDirection: 'row' }}>
                {mainMenu.map((menuItem, index): ReactElement => {
                  return (
                    <>
                      <NextLink
                        key={index}
                        href={menuItem.route}
                        style={{ textDecoration: 'none' }}
                      >
                        <ListItemButton
                          onClick={(): any => {
                            router.push(menuItem.route)
                          }}
                          sx={{ color: '#fff' }}
                        >
                          <Typography variant={'caption'}>
                            {menuItem.label}
                          </Typography>
                        </ListItemButton>
                      </NextLink>
                    </>
                  )
                })}
              </List>
              <Typography
                variant={'h3'}
                style={{ left: '45%', position: 'absolute' }}
              >
                {'LEGANT LOGO'}
              </Typography>
            </>
          )}
          <Box flexGrow={1} />
          {secondaryMenu.map((menuItem, index): ReactElement => {
            return (
              <IconButton
                key={index}
                onClick={(): void => {
                  router.push(menuItem.route)
                }}
                sx={{ color: '#fff', marginLeft: 2 }}
              >
                {menuItem.icon}
              </IconButton>
            )
          })}
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Navbar

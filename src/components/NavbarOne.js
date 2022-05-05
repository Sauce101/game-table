import {
  AppBar,
  Box,
  CssBaseline,
  Toolbar,
  Typography,
  Link,
} from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import DevicesIcon from '@mui/icons-material/Devices'
import MenuDrawer from './MenuDrawer'

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}

const theme = createTheme()

export default function NavbarOne() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <DevicesIcon fontSize="large" sx={{ mr: 2 }} />
          <Typography variant="h6" color="inherit" noWrap sx={{ mr: 'auto' }}>
            Portfolio
          </Typography>
          <MenuDrawer />
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  )
}

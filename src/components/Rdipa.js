import AppBar from '@mui/material/AppBar'
import CssBaseline from '@mui/material/CssBaseline'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import MenuDrawer from './MenuDrawer'
import StickyFooter from './StickyFooter'
import SportsBarIcon from '@mui/icons-material/SportsBar'

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

// const cards = [1, 2, 3, 4, 5, 6]

const theme = createTheme()

export default function Album() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="relative" sx={{ backgroundColor: '#305b52' }}>
        <Toolbar>
          <SportsBarIcon fontSize="large" sx={{ mr: 2 }} />
          <Typography
            variant="h6"
            color="inherit"
            noWrap
            sx={{ mr: 'auto', fontFamily: "'Rye', cursive" }}
          >
            Rainy Day IPA
          </Typography>
          <MenuDrawer />
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <StickyFooter />
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography>
        <Copyright />
      </Box>
      {/* End footer */}
    </ThemeProvider>
  )
}

import SelectMenu from '../components/SelectMenu'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import {
  AppBar,
  Box,
  Stack,
  CssBaseline,
  Toolbar,
  Typography,
} from '@mui/material'
import DeckFiveNew from '../components/DeckFiveNew'

const theme = createTheme({
  palette: {
    primary: {
      light: '#629749',
      main: '#33691e',
      dark: '#003d00',
      contrastText: '#fff',
    },
    secondary: {
      light: '#6a4f4b',
      main: '#3e2723',
      dark: '#1b0000',
      contrastText: '#fff',
    },
  },
})

export default function FiveCardNew() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Stack
        direction="column"
        justifyContent="center"
        alignContent="center"
        // spacing={8}
        sx={{
          minHeight: '100vh',
          backgroundColor: 'primary.main',
          overflow: 'hidden',
        }}
      >
        <AppBar
          sx={{
            backgroundColor: 'secondary.main',
          }}
        >
          <Toolbar>
            <Typography
              variant="h6"
              color="inherit"
              noWrap
              sx={{
                ml: 2,
                mr: 'auto',
              }}
            >
              Five Card Stud
            </Typography>
            <Box className="hamburger" sx={{ marginLeft: 'auto' }}>
              <SelectMenu className="hamburger" />
            </Box>
          </Toolbar>
        </AppBar>
        <DeckFiveNew />
      </Stack>
    </ThemeProvider>
  )
}

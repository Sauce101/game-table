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
import DeckTwoNew from '../components/DeckTwoNew'

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

const HighCardNew = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Stack
        direction="column"
        justifyContent="center"
        spacing={8}
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
              High Card
            </Typography>
            <Box className="hamburger" sx={{ marginLeft: 'auto' }}>
              <SelectMenu className="hamburger" />
            </Box>
          </Toolbar>
        </AppBar>
        <DeckTwoNew />
      </Stack>
    </ThemeProvider>
  )
}

export default HighCardNew

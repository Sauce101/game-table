import React from 'react'

import SelectMenuNew from '../components/SelectMenuNew'
import { Outlet } from 'react-router-dom'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import { NavLink, Link } from 'react-router-dom'
import {
  AppBar,
  Box,
  Stack,
  CssBaseline,
  Toolbar,
  // Typography,
  // Link,
} from '@mui/material'

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

const Layout = () => {
  const matches = useMediaQuery('(min-width:600px)')
  // const [tableName, SetTableName] = useState('Lobby')

  const PAGES = [
    'highcard',
    'fivecard',
    'craps',
    'pokerdice',
    'yahtzee',
    // 'lobby',
  ]

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
            {/* <Typography
              variant="h6"
              color="inherit"
              noWrap
              sx={{
                ml: 2,
                mr: 'auto',
              }}
            >
              Nonea
            </Typography> */}
            <Link
              to="/lobby"
              style={{
                color: 'white',
                textDecoration: 'none',
                fontSize: '1.2em',
                textTransform: 'capitalize',
              }}
            >
              LOBBY
            </Link>
            <Box sx={{ marginLeft: 'auto' }}>
              {matches ? (
                <Box>
                  {PAGES.map((page, index) => (
                    <NavLink
                      to={`/${page}`}
                      key={index}
                      style={({ isActive }) => {
                        return {
                          color: isActive ? 'white' : 'grey',
                          marginLeft: '12px',
                          textDecoration: 'none',
                          fontSize: '1em',
                          textTransform: 'uppercase',
                        }
                      }}
                    >
                      {page}
                    </NavLink>
                  ))}
                </Box>
              ) : (
                <SelectMenuNew />
              )}
            </Box>
          </Toolbar>
        </AppBar>
        <Outlet />
      </Stack>
    </ThemeProvider>
  )
}

export default Layout
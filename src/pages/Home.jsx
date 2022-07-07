import React from 'react'
import { Link } from 'react-router-dom'
import hilow from '../assets/images/hilow.png'
import fivestud from '../assets/images/fcs.jpg'
import crapspic from '../assets/images/crapspic.jpg'
import pokerdpic from '../assets/images/pokerdpic.jpg'
import yahtzeepic from '../assets/images/yahtzeepic.webp'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import {
  AppBar,
  Box,
  Card,
  CardMedia,
  Container,
  CssBaseline,
  Grid,
  Toolbar,
  Typography,
  CardActionArea,
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

const games = [
  { table: 'highcard', icon: hilow },
  { table: 'fivecard', icon: fivestud },
  { table: 'craps', icon: crapspic },
  { table: 'pokerdice', icon: pokerdpic },
  { table: 'yahtzee', icon: yahtzeepic },
]
// Die size
let cardsize = {
  radius: '20%',
  cardWidthL: '90%',
  cardWidthP: '40%',
}

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          minHeight: '100vh',
          backgroundColor: 'primary.main',
        }}
      >
        <AppBar
          position="relative"
          sx={{ backgroundColor: 'secondary.main', mb: 'auto' }}
        >
          <Toolbar>
            <Typography variant="h6" color="inherit" noWrap>
              Game Table Lobby
            </Typography>
          </Toolbar>
        </AppBar>
        <Container sx={{ mb: 'auto' }} maxWidth="lg">
          <Grid
            sx={{
              '@media (orientation: portrait)': {
                display: 'grid',
                gridTemplateRows: 'repeat(5, 1fr)',
                gap: 3,
                mb: 'auto',
              },
              '@media (orientation: landscape)': {
                display: 'grid',
                gridTemplateColumns: 'repeat(5, 1fr)',
                mb: 'auto',
              },
            }}
          >
            {games.map((game, index) => (
              <Grid item key={index}>
                <Card
                  sx={{
                    '@media (orientation: portrait)': {
                      maxWidth: cardsize.cardWidthP,
                      margin: 'auto',
                    },
                    '@media (orientation: landscape)': {
                      maxWidth: cardsize.cardWidthL,
                      margin: 'auto',
                    },
                  }}
                >
                  <CardActionArea
                    component={Link}
                    to={game.table}
                    underline="none"
                    sx={{
                      borderRadius: 16,
                      transition: '0.2s',
                      '&:hover': {
                        transform: 'scale(1.1)',
                      },
                    }}
                  >
                    <CardMedia
                      component="img"
                      src={game.icon}
                      alt="rainy"
                      sx={{
                        aspectRatio: '16 / 9',
                      }}
                    />
                  </CardActionArea>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
        {/* Footer */}
        <Box sx={{ bgcolor: 'secondary.main', p: 2 }} component="footer">
          <Typography variant="h6" align="center" color="white" gutterBottom>
            Michael Saucedo
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            color="white"
            component="p"
          >
            {'Copyright © '} 2022
          </Typography>
        </Box>
        {/* End footer */}
      </Box>
    </ThemeProvider>
  )
}

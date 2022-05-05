import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu'
import {
  Link,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Drawer,
  IconButton,
} from '@mui/material'

const GAMES = [
  { table: 'lobby', name: 'Lobby' },
  { table: 'highcard', name: 'High Card' },
  { table: 'fivecard', name: 'Five Card' },
  { table: 'craps', name: 'Craps' },
  { table: 'pokerdice', name: 'Poker Dice' },
  { table: 'yahtzee', name: 'Yahtzee' },
]

const SelectMenu = () => {
  const [openDrawer, setOpenDrawer] = useState()

  return (
    <>
      <Drawer
        anchor="right"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        PaperProps={{
          sx: {
            width: 100,
            backgroundColor: 'secondary.main',
          },
        }}
      >
        <List>
          {GAMES.map((game, index) => (
            <ListItemButton onClick={() => setOpenDrawer(false)} key={index}>
              <Link
                href={`${game.table}`}
                variant="h6"
                underline="hover"
                sx={{ color: 'white' }}
              >
                <ListItemIcon>
                  <ListItemText
                    sx={{
                      textTransform: 'uppercase',
                      color: 'white',
                    }}
                  >
                    {game.name}
                  </ListItemText>
                </ListItemIcon>
              </Link>
            </ListItemButton>
          ))}
        </List>
      </Drawer>
      <IconButton
        sx={{ color: 'white', marginLeft: 'auto' }}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon className="hamburger" />
      </IconButton>
    </>
  )
}

export default SelectMenu

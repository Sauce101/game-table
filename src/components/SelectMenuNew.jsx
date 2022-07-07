import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu'
import {
  // Link,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Drawer,
  IconButton,
} from '@mui/material'

const tables = [
  { table: 'lobby', name: 'Lobby' },
  { table: 'highcard', name: 'High Card' },
  { table: 'fivecard', name: 'Five Card' },
  { table: 'craps', name: 'Craps' },
  { table: 'pokerdice', name: 'Poker Dice' },
  { table: 'yahtzee', name: 'Yahtzee' },
]

const SelectMenuNew = () => {
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
          {tables.map((game, index) => (
            <ListItemButton onClick={() => setOpenDrawer(false)} key={index}>
              <Link
                to={`${game.table}`}
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

export default SelectMenuNew

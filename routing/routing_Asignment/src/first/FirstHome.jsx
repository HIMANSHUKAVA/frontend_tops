import { AppBar, ListItemText, Menu, MenuItem, Toolbar, Typography } from '@mui/material'

export default function FirstHome() {
  return (
    <div>
      <AppBar>
        <Toolbar/>
       <Typography variant='h4'>Blinkit</Typography>

       <Menu>
        <MenuItem>
            <ListItemText>Home</ListItemText>
        </MenuItem>

        <MenuItem>
            <ListItemText>About</ListItemText>
        </MenuItem>

       </Menu>
      </AppBar>
    </div>

  )
}

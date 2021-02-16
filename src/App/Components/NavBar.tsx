import React from 'react'
import { AppBar, Toolbar, IconButton, Box, makeStyles, Theme, createStyles } from '@material-ui/core'
import Football from '@material-ui/icons/SportsSoccer';
const useStyles = makeStyles((theme: Theme) =>
createStyles({
    menuButton: {
        marginRight: theme.spacing(2),
      },
}))
function NavBar() {
    const classes = useStyles();
    return (
        <AppBar position="fixed">
  <Toolbar style={{background:'primary'}}>
    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
      <Football />
    </IconButton>
    <Box style={{ fontWeight: 800, fontSize: 20 }}>LIVE FOOTBALL</Box>
    {/* <Typography variant="h2" className={classes.title}>
      LIVE FOOTBALL
    </Typography> */}
   
  </Toolbar>
</AppBar>
    )
}

export default NavBar

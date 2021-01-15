import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Container
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import NavbarMenu from './NavbarMenu'

const useStyles = makeStyles({
  root: {
    flexGrow: 1
  },
  appBar: {
    backgroundColor: '#000'
  },
  navRight: {
    marginLeft: 'auto'
  }
})

export default function Navbar () {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <AppBar position="sticky" className={classes.appBar}>
        <Container>
          <Toolbar>
            <Typography variant="h6">FoxFiles</Typography>
            <Box className={classes.navRight}>
              <NavbarMenu/>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  )
}
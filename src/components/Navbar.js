import { NavLink } from 'react-router-dom'
import {
  AppBar,
  Toolbar,
  Button,
  Typography,
  Box
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  root: {
    flexGrow: 1
  },
  appBar: {
    backgroundColor: '#000'
  },
  navLink: {
    color: '#ccc',
    textDecoration: 'none',
    transition: 'color 200ms',
    '&:hover': {
      color: '#fff'
    }
  },
  navRight: {
    marginLeft: 'auto'
  },
  activeNavLink: {
    color: '#fff'
  }
})

const pages = [
  { to: '/', name: 'Home' },
  { to: '/pricing', name: 'Pricing' },
  { to: '/company', name: 'About the Company' },
  { to: '/about-us', name: 'About the Founders' },
  { to: '/contact', name: 'Contact Us' }
]

export default function Navbar () {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <AppBar position="sticky" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6">FoxFiles</Typography>
          <Box className={classes.navRight}>
            {pages.map(page => (
              <Button>
                <NavLink
                  activeClassName={classes.activeNavLink}
                  to={page.to}
                  className={classes.navLink}
                  exact={page.to === '/'}
                >
                  {page.name}
                </NavLink>
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  )
}
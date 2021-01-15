import { useState } from 'react' 
import {
  Button,
  makeStyles,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import { NavLink } from 'react-router-dom'

const pages = [
  { to: '/', name: 'Home' },
  { to: '/pricing', name: 'Pricing' },
  { to: '/company', name: 'About the Company' },
  { to: '/about-us', name: 'About the Founders' },
  { to: '/contact', name: 'Contact Us' }
]

const drawerWidth = 240
const useStyles = makeStyles(theme => ({
  navLink: {
    color: '#ccc',
    textDecoration: 'none',
    transition: 'color 200ms',
    '&:hover': {
      color: '#fff'
    }
  },
  activeNavLink: {
    color: '#fff'
  },
  desktopMenu: {
    [theme.breakpoints.down('md')]: {
      display: 'none'
    }
  },
  mobileMenu: {
    [theme.breakpoints.up('lg')]: {
      display: 'none'
    }
  },
  mobileMenuIcon: {
    color: '#fff'
  },
  drawer: {
    width: 0,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: 'black'
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  }
}))

/**
 * NavbarMenu component contains the links to the right 
 * on the Navbar. It is isolated because it implements
 * a responsive collapsible menu 
 */
export default function NavbarMenu () {
  const classes = useStyles()
  const [open, setOpen] = useState(false)

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  
  return (
    <Box>
      <Box className={classes.mobileMenu}>
        <IconButton onClick={handleDrawerOpen}>
          <MenuIcon className={classes.mobileMenuIcon}/>
        </IconButton>
      </Box>
      <Box className={classes.desktopMenu}>
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

      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="right"
        open={open}
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <Box className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronRightIcon style={{ color: '#fff' }} />
          </IconButton>
        </Box>
        <List>
        {pages.map(page => (
          <ListItem button key={page.to}>
            <NavLink
              activeClassName={classes.activeNavLink}
              to={page.to}
              className={classes.navLink}
              exact={page.to === '/'}
            >
              {page.name}
            </NavLink>
          </ListItem>
        ))}
        </List>
      </Drawer>
    </Box>
  )
}
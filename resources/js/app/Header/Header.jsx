import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuIcon from '@material-ui/icons/Menu';
import MailIcon from '@material-ui/icons/Mail';
import LoginIcon from '@material-ui/icons/Lock';
import SettingsIcon from '@material-ui/icons/Settings';
import { Link } from 'react-router-dom';
import Logout from "../Auth/Logout"
import { useGlobalContext } from "../context";


const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'block',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

export default function Header() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const { user } = useGlobalContext();

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const urlUserProfile = `/user/profile/${user.id}`
  const urlUserSettings = `/user/settings`
  
  let authContentMobile = "";
  let authContentDesktop= "";

  if (user.id) {
    authContentMobile = (
      <>
      {/* messages icon inside hamburger mobile menu */}
      <Link to="/messages" onClick={handleMenuClose}>
        <MenuItem>
          <IconButton aria-label="show 4 new mails" color="primary">
            {/* <Badge badgeContent={4} color="primary"> */}
              <MailIcon />
            {/* </Badge> */}
          </IconButton>
          Messages
        </MenuItem>
      </Link>

      {/* profile mobile menu */}
      <Link to={urlUserProfile} onClick={handleMenuClose}>
        <MenuItem>
          <IconButton
            aria-label="account of current user"
            aria-controls="primary-search-account-menu"
            aria-haspopup="true"
            color="primary"
          >
            <AccountCircle />
          </IconButton>
          Profile
        </MenuItem>
      </Link>  

       {/* account settings mobile menu */}
      <Link to={urlUserSettings} onClick={handleMenuClose}>   
        <MenuItem>
          <IconButton
            aria-label="account settings"
            aria-haspopup="true"
            color="primary"
          >
            <SettingsIcon />
          </IconButton>
          Account Settings
        </MenuItem> 
      </Link> 

    <Logout version="mobile"/>
    </>
    )
  } else {
    authContentMobile = (
    <Link to="/login" onClick={handleMenuClose}>
      <MenuItem>
          <IconButton>
              <LoginIcon color="primary"/>
          </IconButton>
          Login
      </MenuItem>
    </Link> 
    // "hello"
    )
  }

  if (user.id) {
    authContentDesktop = (
      <>
        {/* icon for messages on desktop */}
        <Link to="/messages">
            <IconButton aria-label="show 4 new mails" color="secondary">
              {/* <Badge badgeContent={4} color="secondary"> */}
                <MailIcon />
              {/* </Badge> */}
            </IconButton>
        </Link>
          
          {/* profile icon on desktop */}
          <IconButton
            edge="end"
            aria-label="account of current user"
            aria-haspopup="true"
            onClick={handleProfileMenuOpen}
            color="secondary"
          >
            <AccountCircle />
          </IconButton>
      <Logout version="desktop"/>
      </>
    )
  } else {
    authContentDesktop = (
    <Link to="/login">
      <IconButton
      edge="end"
      aria-label="login icon"
      color="secondary"
    >
      <LoginIcon />
    </IconButton>
  </Link> 
    )
  }

  const renderMenu = (
    //profile menu on desktop
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >


      {/* popup menu profile menu item */}
    <Link to={urlUserProfile} onClick={handleMenuClose}>
        <MenuItem>
          <IconButton
            aria-label="account of current user"
            aria-controls="primary-search-account-menu"
            aria-haspopup="true"
            color="primary"
          >
            <AccountCircle />
          </IconButton>
          Profile
        </MenuItem>
      </Link>  

      {/* popup menu account settings menu item */}
      <Link to={urlUserSettings} onClick={handleMenuClose}>   
        <MenuItem>
          <IconButton
            aria-label="account settings"
            aria-haspopup="true"
            color="primary"
          >
            <SettingsIcon />
          </IconButton>
          Account Settings
        </MenuItem> 
      </Link> 
    </Menu>
  );

  const renderMobileMenu = (
    // whole hamburger mobile menu
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >

      {authContentMobile}

      <MenuItem>
      
        <Button color="primary" variant="contained" size="large">
          <Link to="/register">Get Started</Link> 
        </Button> 
      
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>

      {/* the whole nav bar, can be set to fixed so it will stay on top */}
      <AppBar position="static">

        {/* content of whole navbar */}
        <Toolbar>

        {/* Logo */}
        <Link to="/">
        <img src="/logo_plantera.png" alt="logo" width="100px"/>
        </Link>

        {/* ahoj {user.id ? `loaded ${user.id}` : "nothing"} {user.name} */}

        <div className={classes.grow} />
    
        {/* desktop menu - right side */}
        <div className={classes.sectionDesktop}>
     

        {authContentDesktop}
        
        <Button color="secondary" variant="contained">
          <Link to="/register">Get Started</Link> 
        </Button>  
        
   

        </div>

        
        {/* shows mobile menu on right side of nav */}
        <div className={classes.sectionMobile}>



          {/* hamburger button */}
          <IconButton
            aria-label="open mobile menu"
            aria-haspopup="true"
            onClick={handleMobileMenuOpen}
            color="inherit"
            edge="start"
          >
            <MenuIcon />
          </IconButton>

        
        </div>

       

        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
}

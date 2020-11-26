import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
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
import Grid from '@material-ui/core/Grid';
import { useHistory } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'inherit',
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
  const history = useHistory();

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
      <MenuItem onClick={()=>{handleMenuClose();  history.push("/messages"); }}>
          <IconButton color="primary">
            {/* <Badge badgeContent={4} color="primary"> */}
              <MailIcon />
            {/* </Badge> */}
          </IconButton>
          Messages
      </MenuItem>

      {/* profile mobile menu */}
      <MenuItem onClick={()=> {handleMenuClose();  history.push(`/user/profile/${user.id}`);}}>
          <IconButton color="primary">
            <AccountCircle />
          </IconButton>
          Profile
      </MenuItem>

       {/* account settings mobile menu */}
       <MenuItem onClick={()=> {handleMenuClose();  history.push("/user/settings");}}>
          <IconButton color="primary">
            <SettingsIcon />
          </IconButton>
          Account Settings
      </MenuItem>

    <Logout version="mobile"/>

    <MenuItem>
      <Box mx="auto">
        <Button color="primary" variant="contained" size="large" onClick={()=> {handleMenuClose();  history.push("/posts/create");}}>
          Add Plant 
        </Button> 
        </Box>
      
    </MenuItem>
    </>
    )
  } else {
    authContentMobile = (
      <>
    <MenuItem onClick={()=> {handleMenuClose();  history.push("/login");}}>
      <IconButton>
          <LoginIcon color="primary"/>
      </IconButton>
      Login
    </MenuItem>
    
    <MenuItem onClick={()=> {handleMenuClose();  history.push("/register");}}>
      <Button color="primary" variant="contained" size="large" >
        Get Started
      </Button> 
  </MenuItem>    
  </>
    )
  }
  if (user.id) {
    authContentDesktop = (
      <Grid container spacing={1} alignItems="center" justify="flex-end">
          {/* icon for messages on desktop */}
          <Grid item>
                <IconButton onClick={()=> (history.push("/messages"))}>
                  {/* <Badge badgeContent={4} color="secondary"> */}
                    <MailIcon color="secondary" />
                  {/* </Badge> */}
                </IconButton>
          </Grid>
            
            {/* profile icon on desktop */}
            <Grid item>
              <IconButton
                edge="end"
                aria-label="account of current user"
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
              >
                <AccountCircle color="secondary"/>
              </IconButton>
            </Grid>
        
          <Grid item>
            <Logout version="desktop"/>
          </Grid>
  
          <Grid item>
              
            <Button color="secondary" variant="contained" onClick={()=> (history.push("/posts/create"))}>
              Add plant
            </Button>
          </Grid> 
        </Grid>
    )
  } else {
    authContentDesktop = (
      <Grid container spacing={2} alignItems="center">
      <Grid item>
         <IconButton
         edge="end"
         aria-label="login icon"
         color="secondary"
         onClick={()=> (history.push("/login"))}
       >
         <LoginIcon />
       </IconButton>
      </Grid>
     <Grid item>
       <Button color="secondary" variant="contained" onClick={()=> (history.push("/register"))}>
         Get Started
       </Button> 
     </Grid>
     </Grid>
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
        <MenuItem onClick={()=> {handleMenuClose();  history.push(urlUserProfile);}}>
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

      {/* popup menu account settings menu item */}
        <MenuItem onClick={()=> {handleMenuClose();  history.push(urlUserSettings);}}>
          <IconButton
            aria-label="account settings"
            aria-haspopup="true"
            color="primary"
          >
            <SettingsIcon />
          </IconButton>
          Account Settings
        </MenuItem> 
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
        {user.id ? `logged in: ${user.id}` : "no user"} {user.name}
        <div className={classes.grow} />
    
        {/* desktop menu - right side */}
        <div className={classes.sectionDesktop}>
     
        {authContentDesktop}

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
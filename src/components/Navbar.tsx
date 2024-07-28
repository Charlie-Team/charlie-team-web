import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CharlieTeamLogo from '../assets/logo.jpg';
import { Link, useLocation } from 'react-router-dom';

const drawerWidth = 240;

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const location = useLocation();

  const navItems = getNavItems(location.pathname);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <img src={CharlieTeamLogo} alt="Charlie Team Logo" />
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton
              component={Link}
              to={item.path}
              sx={{ textAlign: 'center', textTransform: 'none' }}
            >
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ height: '80px' }}>
      <CssBaseline />
      <AppBar component="nav" sx={{ backgroundColor: '#022c22', padding: '0.5rem' }}>
        <Toolbar>
          <Typography
            component="div"
            sx={{
              flexGrow: 1,
              display: { sm: 'flex', xs: 'flex' },
              alignItems: 'center',
              columnGap: '1rem',
              fontFamily: 'Times, Times New Roman, serif',
              color: '#fffbeb',
            }}
          >
            <Link to="/">
              <img src={CharlieTeamLogo} alt="Charlie Team Logo" height={45} width={45} />
            </Link>
            <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center"> 
              <Typography
                variant="h1"
                style={{
                  fontSize: '1.5rem',
                  // lineHeight: 1,
                  fontFamily: 'inherit'
                }}
              >
                Charlie Team 
              </Typography>
              {/* <Typography
                variant="h1"
                style={{
                  fontSize: '0.75rem',
                  // lineHeight: 1,
                  fontFamily: 'inherit'
                }}
              >
                Consulting
              </Typography> */}
            </Box>
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button
                key={item.name}
                component={Link}
                to={item.path}
                sx={{ color: '#fff', textTransform: 'none' }}
              >
                {item.name}
              </Button>
            ))}
          </Box>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

function getNavItems(pathName: string) {
  const landingNavItems = [
    { name: 'Health Care', path: '/health-care' },
    { name: 'Aviation', path: '/aviation' },
  ];

  const healthCareNavItems = [
    { name: 'Mission', path: '/health-care' },
    { name: 'Research', path: '/health-care/research' },
    { name: 'Docuseries', path: '/health-care/docuseries' },
    { name: 'Programs', path: '/health-care/programs' },
    { name: 'Partners', path: '/health-care/partners' },
    { name: 'Contact', path: '/health-care/contact' },
    { name: 'Donate', path: '/health-care/donate' },
  ];

  const aviationNavItems = [
    { name: 'Mission', path: '/aviation' },
    { name: 'Industries', path: '/aviation/industries' },
    { name: 'Services', path: '/aviation/services' },
    { name: 'About', path: '/aviation/about' },
    { name: 'Contact', path: '/aviation/contact' },
  ];

  switch (true) {
    case pathName === '/': {
      return landingNavItems;
    }
    case pathName.startsWith('/health-care'): {
      return healthCareNavItems;
    }
    case pathName.startsWith('/aviation'): {
      return aviationNavItems;
    }
    default: {
      return landingNavItems;
    }
  }
}

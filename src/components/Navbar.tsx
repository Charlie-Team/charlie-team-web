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
              display: { md: 'flex', xs: 'flex' },
              alignItems: 'center',
              fontFamily: 'Times, Times New Roman, serif',
              color: '#C3B090',
            }}
          >
            <Link
              to="/"
              style={{
                display: 'flex',
                columnGap: '0.5rem',
                alignItems: 'center',
                textDecoration: 'none',
                color: 'inherit',
              }}
            >
              <img src={CharlieTeamLogo} alt="Charlie Team Logo" height={45} width={45} />
              <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
              >
                <Typography
                  variant="h1"
                  style={{
                    fontSize: '1.5rem',
                    fontFamily: 'inherit',
                  }}
                >
                  Charlie Team
                </Typography>
              </Box>
            </Link>
          </Typography>
          <Box sx={{ display: { xs: 'none', md: 'block' } }}>
            {navItems.map((item) => (
              <Button
                key={item.name}
                component={Link}
                to={item.path}
                sx={{
                  textTransform: 'none',
                  color: location.pathname === item.path ? 'var(--green-400)' : '#fffbeb',
                  borderBottom:
                    location.pathname === item.path
                      ? '2px solid var(--green-400)'
                      : '2px solid transparent',
                  borderRadius: '0',
                }}
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
            sx={{ display: { md: 'none' } }}
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
            display: { xs: 'block', md: 'none' },
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

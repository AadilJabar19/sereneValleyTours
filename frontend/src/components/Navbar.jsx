import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Box,
  Container,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const menuItems = [
    { label: 'Home', path: '/' },
    { label: 'Kashmir', path: '/kashmir' },
    { label: 'Ladakh', path: '/ladakh' },
    { label: 'Adventure', path: '/adventure' },
    { label: 'Store', path: '/store' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <AppBar position="sticky" component="nav" className="bg-white shadow-md">
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ minHeight: { xs: '56px', sm: '64px' } }}>
          {/* Logo */}
          <Typography
            variant="h5"
            component={Link}
            to="/"
            className="font-bold text-primary-main no-underline hover:opacity-80 transition-opacity"
            sx={{ fontFamily: 'Pacifico, cursive', textDecoration: 'none', fontSize: { xs: '1.25rem', md: '1.5rem' } }}
          >
            Serene Valley Tours
          </Typography>

          {/* Desktop Menu */}
          <Box component="nav" className="hidden lg:flex flex-grow justify-center" sx={{ gap: { lg: 2 } }}>
            {menuItems.map((item) => (
              <Button
                key={item.path}
                component={Link}
                to={item.path}
                className="text-gray-700 hover:text-primary-main"
                sx={{ fontSize: '1rem' }}
              >
                {item.label}
              </Button>
            ))}
          </Box>

          {/* Spacer */}
          <Box className="flex-grow lg:flex-grow-0" />

          {/* Mobile Menu Icon */}
          <IconButton
            className="lg:hidden"
            onClick={() => setMobileOpen(true)}
            aria-label="Open navigation menu"
          >
            <MenuIcon />
          </IconButton>

          {/* Mobile Drawer */}
          <Drawer
            anchor="right"
            open={mobileOpen}
            onClose={() => setMobileOpen(false)}
          >
            <Box className="w-64 p-4" role="navigation">
              <List>
                {menuItems.map((item) => (
                  <ListItem key={item.path} disablePadding>
                    <ListItemButton
                      component={Link}
                      to={item.path}
                      onClick={() => setMobileOpen(false)}
                    >
                      <ListItemText primary={item.label} />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </Box>
          </Drawer>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;

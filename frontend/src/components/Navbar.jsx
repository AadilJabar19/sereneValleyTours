import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
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
    { label: 'About', path: '/about' },
    { label: 'Kashmir', path: '/kashmir' },
    { label: 'Ladakh', path: '/ladakh' },
    { label: 'Adventure', path: '/adventure' },
    { label: 'Store', path: '/store' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <AppBar position="sticky" component="nav" sx={{ bgcolor: 'white', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ minHeight: { xs: '56px', sm: '64px' } }}>
          {/* Logo */}
          <Typography
            variant="h5"
            component={Link}
            to="/"
            sx={{ 
              fontFamily: 'Pacifico, cursive', 
              textDecoration: 'none', 
              fontSize: { xs: '1.25rem', md: '1.5rem' },
              fontWeight: 'normal',
              color: 'primary.main',
              '&:hover': { opacity: 0.8 },
              transition: 'opacity 0.3s'
            }}
          >
            Serene Valley Tours
          </Typography>

          {/* Desktop Menu */}
          <Box component="nav" sx={{ display: { xs: 'none', lg: 'flex' }, flexGrow: 1, justifyContent: 'center', gap: 0.5 }}>
            {menuItems.map((item) => (
              <Button
                key={item.path}
                component={NavLink}
                to={item.path}
                sx={{
                  fontSize: '1rem',
                  color: 'text.primary',
                  fontWeight: 500,
                  px: 2,
                  '&:hover': { color: 'primary.main' },
                  '&.active': {
                    color: 'primary.main',
                    fontWeight: 600
                  },
                }}
              >
                {item.label}
              </Button>
            ))}
          </Box>

          {/* Spacer */}
          <Box sx={{ flexGrow: { xs: 1, lg: 0 } }} />

          {/* Mobile Menu Icon */}
          <IconButton
            sx={{ display: { xs: 'block', lg: 'none' } }}
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
            <Box sx={{ width: 256, p: 2 }} role="navigation">
              <List>
                {menuItems.map((item) => (
                  <ListItem key={item.path} disablePadding>
                    <ListItemButton
                      component={NavLink}
                      to={item.path}
                      onClick={() => setMobileOpen(false)}
                      sx={{
                        '&.active': {
                          borderLeft: '4px solid',
                          borderColor: 'primary.main',
                          backgroundColor: 'rgba(25, 118, 210, 0.08)',
                        },
                      }}
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

import { Box, Container, Grid, Typography, Link as MuiLink, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Footer = () => {
  return (
    <Box component="footer" sx={{ bgcolor: '#0F3F3F', color: 'white', py: { xs: 4, md: 6 } }}>
      <Container maxWidth="xl">
        <Grid container spacing={{ xs: 3, md: 4 }}>
          {/* Company Info */}
          <Grid item xs={12} sm={6} md={4}>
            <Typography
              variant="h5"
              sx={{ fontFamily: 'Pacifico, cursive', fontSize: { xs: '1.25rem', md: '1.5rem' }, fontWeight: 'bold', mb: { xs: 1.5, md: 2 }, color: 'white' }}
            >
              Serene Valley Tours
            </Typography>
            <Typography
              variant="caption"
              sx={{ fontSize: '0.75rem', fontStyle: 'italic', color: 'rgba(255,255,255,0.6)', display: 'block', mb: 1.5 }}
            >
              Your Gateway to Paradise
            </Typography>
            <Typography variant="body2" sx={{ fontSize: { xs: '0.875rem' }, color: 'rgba(255,255,255,0.6)', mb: { xs: 1.5, md: 2 } }}>
              Experience the paradise on earth with our expertly crafted tours
              and travel packages. We specialize in creating unforgettable
              experiences in Kashmir and Ladakh.
            </Typography>
            <Box sx={{ display: 'flex', gap: 1 }}>
              <IconButton 
                sx={{ color: 'white', '&:hover': { color: 'primary.light' } }}
                size="small"
                aria-label="Visit our Facebook page"
                component="a"
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FacebookIcon fontSize="small" />
              </IconButton>
              <IconButton 
                sx={{ color: 'white', '&:hover': { color: 'primary.light' } }}
                size="small"
                aria-label="Visit our Twitter page"
                component="a"
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <TwitterIcon fontSize="small" />
              </IconButton>
              <IconButton 
                sx={{ color: 'white', '&:hover': { color: 'primary.light' } }}
                size="small"
                aria-label="Visit our Instagram page"
                component="a"
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <InstagramIcon fontSize="small" />
              </IconButton>
              <IconButton 
                sx={{ color: 'white', '&:hover': { color: 'primary.light' } }}
                size="small"
                aria-label="Visit our YouTube channel"
                component="a"
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <YouTubeIcon fontSize="small" />
              </IconButton>
            </Box>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={6} sm={3} md={2}>
            <Typography variant="h6" sx={{ fontSize: { xs: '1rem', md: '1.25rem' }, fontWeight: 'bold', mb: { xs: 1.5, md: 2 }, color: 'white' }}>
              Quick Links
            </Typography>
            <Box component="nav" sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <MuiLink component={Link} to="/" sx={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.6)', textDecoration: 'none', '&:hover': { color: 'white' } }}>
                Home
              </MuiLink>
              <MuiLink component={Link} to="/destinations" sx={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.6)', textDecoration: 'none', '&:hover': { color: 'white' } }}>
                Destinations
              </MuiLink>
              <MuiLink component={Link} to="/store" sx={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.6)', textDecoration: 'none', '&:hover': { color: 'white' } }}>
                Store
              </MuiLink>
              <MuiLink component={Link} to="/about" sx={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.6)', textDecoration: 'none', '&:hover': { color: 'white' } }}>
                About
              </MuiLink>
              <MuiLink component={Link} to="/contact" sx={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.6)', textDecoration: 'none', '&:hover': { color: 'white' } }}>
                Contact
              </MuiLink>
            </Box>
          </Grid>

          {/* Tours */}
          <Grid item xs={6} sm={3} md={3}>
            <Typography variant="h6" sx={{ fontSize: { xs: '1rem', md: '1.25rem' }, fontWeight: 'bold', mb: { xs: 1.5, md: 2 }, color: 'white' }}>
              Popular Tours
            </Typography>
            <Box component="nav" sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <MuiLink component={Link} to="/kashmir" sx={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.6)', textDecoration: 'none', '&:hover': { color: 'white' } }}>
                Kashmir Packages
              </MuiLink>
              <MuiLink component={Link} to="/ladakh" sx={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.6)', textDecoration: 'none', '&:hover': { color: 'white' } }}>
                Ladakh Adventures
              </MuiLink>
              <MuiLink component={Link} to="/adventure" sx={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.6)', textDecoration: 'none', '&:hover': { color: 'white' } }}>
                Adventure Tours
              </MuiLink>
              <MuiLink component={Link} to="/tours" sx={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.6)', textDecoration: 'none', '&:hover': { color: 'white' } }}>
                All Tours
              </MuiLink>
            </Box>
          </Grid>

          {/* Contact Info */}
          <Grid item xs={12} sm={12} md={3}>
            <Typography variant="h6" sx={{ fontSize: { xs: '1rem', md: '1.25rem' }, fontWeight: 'bold', mb: { xs: 1.5, md: 2 }, color: 'white' }}>
              Contact Us
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
              <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1 }}>
                <LocationOnIcon sx={{ color: 'primary.light', mt: 0.5, fontSize: '1.25rem' }} aria-hidden="true" />
                <Typography variant="body2" sx={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.6)' }}>
                  Bemina, Srinagar, Jammu & Kashmir
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1 }}>
                <PhoneIcon sx={{ color: 'primary.light', fontSize: '1.25rem' }} aria-hidden="true" />
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
                  <MuiLink href="tel:+917006601277" sx={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.6)', textDecoration: 'none', '&:hover': { color: 'white' } }}>
                    +91 7006601277
                  </MuiLink>
                  <MuiLink href="tel:+917006327776" sx={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.6)', textDecoration: 'none', '&:hover': { color: 'white' } }}>
                    +91 7006327776
                  </MuiLink>
                </Box>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1 }}>
                <EmailIcon sx={{ color: 'primary.light', fontSize: '1.25rem' }} aria-hidden="true" />
                <MuiLink href="mailto:serenevalleytours@gmail.com" sx={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.6)', textDecoration: 'none', wordBreak: 'break-all', '&:hover': { color: 'white' } }}>
                  serenevalleytours@gmail.com
                </MuiLink>
              </Box>
            </Box>
          </Grid>
        </Grid>

        {/* Bottom Bar */}
        <Box sx={{ borderTop: '1px solid rgba(255,255,255,0.1)', mt: { xs: 3, md: 4 }, pt: { xs: 2, md: 3 }, textAlign: 'center' }}>
          <Typography variant="body2" sx={{ fontSize: { xs: '0.75rem', md: '0.875rem' }, color: 'rgba(255,255,255,0.6)' }}>
            © 2025 Serene Valley Tours. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;

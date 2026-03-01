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
    <Box component="footer" sx={{ bgcolor: '#0F3F3F' }} className="text-white py-8 md:py-12">
      <Container maxWidth="xl">
        <Grid container spacing={{ xs: 3, md: 4 }}>
          {/* Company Info */}
          <Grid item xs={12} sm={6} md={4}>
            <Typography
              variant="h5"
              className="font-bold mb-3 md:mb-4 text-white"
              sx={{ fontFamily: 'Pacifico, cursive', fontSize: { xs: '1.25rem', md: '1.5rem' } }}
            >
              Serene Valley Tours
            </Typography>
            <Typography variant="body2" className="text-gray-400 mb-3 md:mb-4" sx={{ fontSize: { xs: '0.875rem' } }}>
              Experience the paradise on earth with our expertly crafted tours
              and travel packages. We specialize in creating unforgettable
              experiences in Kashmir and Ladakh.
            </Typography>
            <Box className="flex gap-2">
              <IconButton 
                className="text-white hover:text-primary-light"
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
                className="text-white hover:text-primary-light"
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
                className="text-white hover:text-primary-light"
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
                className="text-white hover:text-primary-light"
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
            <Typography variant="h6" className="font-bold mb-3 md:mb-4 text-white" sx={{ fontSize: { xs: '1rem', md: '1.25rem' } }}>
              Quick Links
            </Typography>
            <Box component="nav" className="flex flex-col gap-2">
              <MuiLink component={Link} to="/" className="text-gray-400 hover:text-white no-underline" sx={{ fontSize: '0.875rem' }}>
                Home
              </MuiLink>
              <MuiLink component={Link} to="/destinations" className="text-gray-400 hover:text-white no-underline" sx={{ fontSize: '0.875rem' }}>
                Destinations
              </MuiLink>
              <MuiLink component={Link} to="/store" className="text-gray-400 hover:text-white no-underline" sx={{ fontSize: '0.875rem' }}>
                Store
              </MuiLink>
              <MuiLink component={Link} to="/about" className="text-gray-400 hover:text-white no-underline" sx={{ fontSize: '0.875rem' }}>
                About
              </MuiLink>
              <MuiLink component={Link} to="/contact" className="text-gray-400 hover:text-white no-underline" sx={{ fontSize: '0.875rem' }}>
                Contact
              </MuiLink>
            </Box>
          </Grid>

          {/* Tours */}
          <Grid item xs={6} sm={3} md={3}>
            <Typography variant="h6" className="font-bold mb-3 md:mb-4 text-white" sx={{ fontSize: { xs: '1rem', md: '1.25rem' } }}>
              Popular Tours
            </Typography>
            <Box component="nav" className="flex flex-col gap-2">
              <MuiLink component={Link} to="/kashmir" className="text-gray-400 hover:text-white no-underline" sx={{ fontSize: '0.875rem' }}>
                Kashmir Packages
              </MuiLink>
              <MuiLink component={Link} to="/ladakh" className="text-gray-400 hover:text-white no-underline" sx={{ fontSize: '0.875rem' }}>
                Ladakh Adventures
              </MuiLink>
              <MuiLink component={Link} to="/adventure" className="text-gray-400 hover:text-white no-underline" sx={{ fontSize: '0.875rem' }}>
                Adventure Tours
              </MuiLink>
              <MuiLink component={Link} to="/tours" className="text-gray-400 hover:text-white no-underline" sx={{ fontSize: '0.875rem' }}>
                All Tours
              </MuiLink>
            </Box>
          </Grid>

          {/* Contact Info */}
          <Grid item xs={12} sm={12} md={3}>
            <Typography variant="h6" className="font-bold mb-3 md:mb-4 text-white" sx={{ fontSize: { xs: '1rem', md: '1.25rem' } }}>
              Contact Us
            </Typography>
            <Box className="flex flex-col gap-3">
              <Box className="flex items-start gap-2">
                <LocationOnIcon className="text-primary-light mt-1" aria-hidden="true" sx={{ fontSize: '1.25rem' }} />
                <Typography variant="body2" className="text-gray-400" sx={{ fontSize: '0.875rem' }}>
                  Bemina, Srinagar, Jammu & Kashmir
                </Typography>
              </Box>
              <Box className="flex items-start gap-2">
                <PhoneIcon className="text-primary-light" aria-hidden="true" sx={{ fontSize: '1.25rem' }} />
                <Box className="flex flex-col gap-1">
                  <MuiLink href="tel:+917006327776" className="text-gray-400 hover:text-white no-underline" sx={{ fontSize: '0.875rem' }}>
                    +91 7006327776
                  </MuiLink>
                  <MuiLink href="tel:+917006601277" className="text-gray-400 hover:text-white no-underline" sx={{ fontSize: '0.875rem' }}>
                    +91 7006601277
                  </MuiLink>
                </Box>
              </Box>
              <Box className="flex items-start gap-2">
                <EmailIcon className="text-primary-light" aria-hidden="true" sx={{ fontSize: '1.25rem' }} />
                <MuiLink href="mailto:serenevalleytours@gmail.com" className="text-gray-400 hover:text-white no-underline break-all" sx={{ fontSize: '0.875rem' }}>
                  serenevalleytours@gmail.com
                </MuiLink>
              </Box>
            </Box>
          </Grid>
        </Grid>

        {/* Bottom Bar */}
        <Box className="border-t border-gray-800 mt-6 md:mt-8 pt-4 md:pt-6 text-center">
          <Typography variant="body2" className="text-gray-400" sx={{ fontSize: { xs: '0.75rem', md: '0.875rem' } }}>
            © 2025 Serene Valley Tours. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;

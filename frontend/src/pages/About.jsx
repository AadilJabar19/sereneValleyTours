import { Link } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import SEO from '../components/SEO';

const About = () => {
  const features = [
    'Expert local guides with deep knowledge',
    'Customized tour packages',
    'Safe and comfortable travel',
    'Best prices guaranteed',
    '24/7 customer support',
    'Authentic local experiences'
  ];

  return (
    <>
      <SEO 
        title="About Us - Serene Valley Tours | Kashmir & Ladakh Experts"
        description="Learn about Serene Valley Tours - your trusted partner for Kashmir and Ladakh travel. Expert guides, customized packages, and authentic experiences since years."
        keywords="About Serene Valley Tours, Kashmir tour operator, Ladakh travel company"
        url="https://serenevalleytours.com/about"
      />
      
      <Box component="main">
        {/* Hero Section */}
        <Box
          component="section"
          sx={{
            height: { xs: '40vh', md: '50vh' },
            position: 'relative',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage:
              'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.5)), url(https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80&fm=webp&fit=crop)',
          }}
          role="img"
          aria-label="About Serene Valley Tours"
        >
          <Container sx={{ height: '100%', display: 'flex', alignItems: 'center', px: { xs: 2, sm: 3 } }}>
            <Box sx={{ color: 'white' }}>
              <Typography variant="h1" sx={{ color: 'white', fontSize: { xs: '2rem', md: '3rem' }, fontWeight: 'bold', mb: 2 }}>
                About Serene Valley Tours
              </Typography>
              <Typography variant="h2" sx={{ fontSize: { xs: '1rem', md: '1.25rem' }, fontWeight: 400, color: '#E5E7EB' }}>
                Your trusted partner for Kashmir & Ladakh adventures
              </Typography>
            </Box>
          </Container>
        </Box>

        {/* About Content */}
        <Container component="section" sx={{ py: { xs: 6, md: 8 }, px: { xs: 2, sm: 3 } }}>
          <Grid container spacing={6}>
            <Grid item xs={12} md={6}>
              <Typography variant="h2" sx={{ fontSize: { xs: '1.75rem', md: '2rem' }, fontWeight: 'bold', mb: 2 }}>
                Who We Are
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 2, lineHeight: 1.8 }}>
                Serene Valley Tours is a premier travel company specializing in Kashmir and Ladakh tour packages. 
                Based in Srinagar, we are passionate locals who know every corner of this paradise on earth.
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 2, lineHeight: 1.8 }}>
                We believe in creating memorable experiences that go beyond typical tourism. Our carefully crafted 
                itineraries combine breathtaking landscapes, rich cultural heritage, and authentic local experiences.
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8 }}>
                Whether you're seeking adventure in the mountains, peace in the valleys, or cultural immersion in 
                local traditions, we design each journey to match your dreams.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                component="img"
                src="/images/gulmarg1.webp"
                alt="Kashmir landscape"
                sx={{ width: '100%', height: '400px', objectFit: 'cover', borderRadius: 2 }}
                loading="lazy"
              />
            </Grid>
          </Grid>

          {/* Why Choose Us */}
          <Box sx={{ mt: 8 }}>
            <Typography variant="h2" sx={{ fontSize: { xs: '1.75rem', md: '2rem' }, fontWeight: 'bold', mb: 4, textAlign: 'center' }}>
              Why Choose Us
            </Typography>
            <Grid container spacing={3}>
              {features.map((feature, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <Card sx={{ height: '100%', boxShadow: 2 }}>
                    <CardContent sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5 }}>
                      <CheckCircleIcon color="primary" sx={{ mt: 0.5 }} />
                      <Typography variant="body1">{feature}</Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>

          {/* Mission */}
          <Box sx={{ mt: 8, p: 4, bgcolor: '#F9FAFB', borderRadius: 2 }}>
            <Typography variant="h2" sx={{ fontSize: { xs: '1.75rem', md: '2rem' }, fontWeight: 'bold', mb: 2, textAlign: 'center' }}>
              Our Mission
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8, maxWidth: '800px', mx: 'auto', textAlign: 'center' }}>
              To showcase the unparalleled beauty of Kashmir and Ladakh while promoting sustainable tourism, 
              supporting local communities, and creating unforgettable memories for travelers from around the world.
            </Typography>
          </Box>

          {/* CTA */}
          <Box sx={{ textAlign: 'center', mt: 6 }}>
            <Typography variant="h3" sx={{ fontSize: '1.5rem', fontWeight: 'bold', mb: 2 }}>
              Ready to Start Your Journey?
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexDirection: { xs: 'column', sm: 'row' } }}>
              <Button
                component={Link}
                to="/tours"
                variant="contained"
                size="large"
              >
                Explore Tours
              </Button>
              <Button
                component={Link}
                to="/contact"
                variant="outlined"
                size="large"
              >
                Contact Us
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default About;

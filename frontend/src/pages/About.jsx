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
          className="relative bg-cover bg-center"
          sx={{
            height: { xs: '40vh', md: '50vh' },
            backgroundImage:
              'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.5)), url(https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80&fm=webp&fit=crop)',
          }}
          role="img"
          aria-label="About Serene Valley Tours"
        >
          <Container className="h-full flex items-center" sx={{ px: { xs: 2, sm: 3 } }}>
            <Box className="text-white">
              <Typography variant="h1" className="font-bold mb-4" sx={{ color: 'white', fontSize: { xs: '2rem', md: '3rem' } }}>
                About Serene Valley Tours
              </Typography>
              <Typography variant="h2" className="text-gray-200" sx={{ fontSize: { xs: '1rem', md: '1.25rem' }, fontWeight: 400 }}>
                Your trusted partner for Kashmir & Ladakh adventures
              </Typography>
            </Box>
          </Container>
        </Box>

        {/* About Content */}
        <Container component="section" className="py-12 md:py-16" sx={{ px: { xs: 2, sm: 3 } }}>
          <Grid container spacing={6}>
            <Grid item xs={12} md={6}>
              <Typography variant="h2" className="font-bold mb-4" sx={{ fontSize: { xs: '1.75rem', md: '2rem' } }}>
                Who We Are
              </Typography>
              <Typography variant="body1" color="text.secondary" className="mb-4" sx={{ lineHeight: 1.8 }}>
                Serene Valley Tours is a premier travel company specializing in Kashmir and Ladakh tour packages. 
                Based in Srinagar, we are passionate locals who know every corner of this paradise on earth.
              </Typography>
              <Typography variant="body1" color="text.secondary" className="mb-4" sx={{ lineHeight: 1.8 }}>
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
          <Box className="mt-16">
            <Typography variant="h2" className="font-bold mb-8 text-center" sx={{ fontSize: { xs: '1.75rem', md: '2rem' } }}>
              Why Choose Us
            </Typography>
            <Grid container spacing={3}>
              {features.map((feature, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <Card className="h-full shadow-md">
                    <CardContent className="flex items-start gap-3">
                      <CheckCircleIcon color="primary" sx={{ mt: 0.5 }} />
                      <Typography variant="body1">{feature}</Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>

          {/* Mission */}
          <Box className="mt-16 p-8 bg-gray-50 rounded-lg">
            <Typography variant="h2" className="font-bold mb-4 text-center" sx={{ fontSize: { xs: '1.75rem', md: '2rem' } }}>
              Our Mission
            </Typography>
            <Typography variant="body1" color="text.secondary" className="text-center" sx={{ lineHeight: 1.8, maxWidth: '800px', mx: 'auto' }}>
              To showcase the unparalleled beauty of Kashmir and Ladakh while promoting sustainable tourism, 
              supporting local communities, and creating unforgettable memories for travelers from around the world.
            </Typography>
          </Box>

          {/* CTA */}
          <Box className="text-center mt-12">
            <Typography variant="h3" className="font-bold mb-4" sx={{ fontSize: '1.5rem' }}>
              Ready to Start Your Journey?
            </Typography>
            <Box className="flex gap-4 justify-center" sx={{ flexDirection: { xs: 'column', sm: 'row' } }}>
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

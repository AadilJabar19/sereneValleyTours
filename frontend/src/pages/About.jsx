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
import PageHero from '../components/PageHero';
import SectionHeader from '../components/SectionHeader';

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
      
      <Box component="main" sx={{ bgcolor: '#FFFFFF' }}>
        <PageHero
          subtitle="Who We Are"
          title="About Serene Valley Tours"
          description="Your trusted partner for Kashmir & Ladakh adventures"
          image="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80&fm=webp&fit=crop"
          ariaLabel="About Serene Valley Tours"
        />

        <Container component="section" sx={{ py: { xs: 8, md: 12 }, px: { xs: 2, sm: 3 } }}>
          <Grid container spacing={{ xs: 4, md: 6 }} alignItems="stretch">
            <Grid item xs={12} md={6}>
              <Card sx={{ height: '100%', p: 1.2 }}>
                <CardContent sx={{ p: { xs: 3, md: 4 } }}>
                  <SectionHeader
                    subtitle="Our Story"
                    title="Who We Are"
                    description=""
                  />
                  <Typography variant="body1" color="text.secondary" sx={{ mb: 2.5, lineHeight: 1.8, fontSize: '1.0625rem' }}>
                    Serene Valley Tours is a premier travel company specializing in Kashmir and Ladakh tour packages.
                    Based in Srinagar, we are passionate locals who know every corner of this paradise on earth.
                  </Typography>
                  <Typography variant="body1" color="text.secondary" sx={{ mb: 2.5, lineHeight: 1.8, fontSize: '1.0625rem' }}>
                    We believe in creating memorable experiences that go beyond typical tourism. Our carefully crafted
                    itineraries combine breathtaking landscapes, rich cultural heritage, and authentic local experiences.
                  </Typography>
                  <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8, fontSize: '1.0625rem' }}>
                    Whether you're seeking adventure in the mountains, peace in the valleys, or cultural immersion in
                    local traditions, we design each journey to match your dreams.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} md={6}>
              <Card sx={{ height: '100%', p: 1.2 }}>
                <CardContent sx={{ p: { xs: 2, md: 2.5 }, height: '100%' }}>
                  <Box
                    component="img"
                    src="/images/gulmarg1.webp"
                    alt="Kashmir landscape"
                    sx={{ width: '100%', height: '100%', minHeight: { xs: 280, md: 520 }, objectFit: 'cover', borderRadius: '18px' }}
                    loading="lazy"
                  />
                </CardContent>
              </Card>
            </Grid>
          </Grid>

          <Box sx={{ mt: 10 }}>
            <SectionHeader
              subtitle="Our Services"
              title="Why Choose Us"
              description=""
            />
            <Grid container spacing={3}>
              {features.map((feature, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <Card sx={{ height: '100%', p: 1 }}>
                    <CardContent sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5, p: 3 }}>
                      <CheckCircleIcon sx={{ color: 'primary.main', fontSize: '1.75rem', mt: 0.2 }} />
                      <Typography variant="body1" sx={{ fontWeight: 500, color: '#123E49', fontSize: '1rem', lineHeight: 1.6 }}>
                        {feature}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>

          <Card sx={{ mt: 10, p: 1.2, bgcolor: '#FAFCFD' }}>
            <CardContent sx={{ p: { xs: 3, md: 5 } }}>
              <SectionHeader
                subtitle="What Drives Us"
                title="Our Mission"
                description="To showcase the unparalleled beauty of Kashmir and Ladakh while promoting sustainable tourism, supporting local communities, and creating unforgettable memories for travelers from around the world."
              />
            </CardContent>
          </Card>

          <Box sx={{ textAlign: 'center', mt: 8 }}>
            <Typography variant="h3" sx={{ fontSize: { xs: '1.5rem', md: '1.75rem' }, fontWeight: 700, mb: 3, color: '#123E49' }}>
              Ready to Start Your Journey?
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexDirection: { xs: 'column', sm: 'row' }, maxWidth: '500px', mx: 'auto' }}>
              <Button
                component={Link}
                to="/tours"
                variant="contained"
                size="large"
                sx={{ px: 4, py: 1.5 }}
              >
                Explore Tours
              </Button>
              <Button
                component={Link}
                to="/contact"
                variant="outlined"
                size="large"
                sx={{ px: 4, py: 1.5 }}
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


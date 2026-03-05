import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Chip,
} from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import StarIcon from '@mui/icons-material/Star';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { getFeaturedTours } from '../data/tours';
import { destinations } from '../data/destinations';
import Loader from '../components/Loader';
import SEO from '../components/SEO';
import WhyChooseUs from '../components/WhyChooseUs';
import Testimonials from '../components/Testimonials';
import TrustStats from '../components/TrustStats';

const Home = () => {
  const [featuredTours, setFeaturedTours] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadFeaturedTours();
  }, []);

  const loadFeaturedTours = async () => {
    setLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 500));
      const tours = getFeaturedTours(3);
      setFeaturedTours(tours);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <Loader />;

  return (
    <>
      <SEO 
        title="Serene Valley Tours - Kashmir & Ladakh Tour Packages"
        description="Explore Kashmir and Ladakh with expertly crafted tour packages. Book your dream vacation with Serene Valley Tours - Best prices, expert guides, safe travel."
        keywords="Kashmir tours, Ladakh tours, Kashmir packages, Ladakh packages, Gulmarg skiing, Pangong Lake, Dal Lake, Srinagar tours"
        url="https://serenevalleytours.com"
      />
      <Box>
        {/* Hero Section */}
        <Box
          component="section"
          sx={{
            position: 'relative',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            overflow: 'hidden',
            height: { xs: '70vh', sm: '80vh', md: '100vh' },
          }}
          role="img"
          aria-label="Serene Kashmir valley with snow-capped mountains and lush green meadows"
        >
          <picture style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
            <source srcSet="https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=1920&q=85&fm=webp&fit=crop" type="image/webp" />
            <img 
              src="https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=1920&q=85&fit=crop" 
              alt="Panoramic view of Kashmir valley with Dal Lake and Himalayan mountains"
              style={{ width: '100%', height: '100%', objectFit: 'cover', animation: 'fadeIn 1.5s ease-in' }}
              loading="eager"
            />
          </picture>
          <Box sx={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.3), transparent)' }} />
          <Container sx={{ height: '100%', display: 'flex', alignItems: 'center', position: 'relative', zIndex: 10, px: { xs: 2, sm: 3 } }}>
            <Box sx={{ color: 'white', animation: 'slideUp 1s ease-out', maxWidth: { xs: '100%', md: '66.666667%' } }}>
              <Typography variant="h1" sx={{ color: 'white', fontSize: { xs: '1.75rem', sm: '2.5rem', md: '3rem' }, fontWeight: 'bold', mb: 2 }}>
                Discover the Paradise on Earth
              </Typography>
              <Typography variant="h2" sx={{ fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem' }, fontWeight: 400, mb: 3, color: '#E5E7EB' }}>
                Experience breathtaking landscapes, rich culture, and unforgettable
                adventures in Kashmir and Ladakh
              </Typography>
              <Box sx={{ display: 'flex', gap: 2, flexDirection: { xs: 'column', sm: 'row' } }}>
                <Button
                  component={Link}
                  to="/tours"
                  variant="contained"
                  size="large"
                  fullWidth={true}
                  sx={{ maxWidth: { sm: '220px' }, transition: 'all 0.3s' }}
                >
                  Plan Your Trip
                </Button>
                <Button
                  component="a"
                  href="https://wa.me/917006601277?text=Hi!%20I%20am%20interested%20in%20Kashmir/Ladakh%20tour%20packages."
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="outlined"
                  size="large"
                  fullWidth={true}
                  sx={{ 
                    maxWidth: { sm: '200px' }, 
                    color: 'white', 
                    borderColor: 'white',
                    transition: 'all 0.3s',
                    '&:hover': { 
                      bgcolor: 'white', 
                      color: 'primary.main',
                      borderColor: 'white'
                    }
                  }}
                >
                  WhatsApp Us
                </Button>
              </Box>
            </Box>
          </Container>
        </Box>

        {/* Featured Tours */}
        <Container component="section" sx={{ py: { xs: 6, md: 8 }, px: { xs: 2, sm: 3 } }}>
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '2.5rem' }, fontWeight: 'bold', mb: 2 }}>
              Featured Tours
            </Typography>
            <Typography variant="h3" color="text.secondary" sx={{ fontSize: { xs: '1.125rem', md: '1.5rem' }, fontWeight: 400 }}>
              Handpicked experiences for your perfect getaway
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {featuredTours.map((tour) => (
              <Grid item xs={12} md={4} key={tour.id}>
                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', boxShadow: 3, borderRadius: 2, transition: 'all 0.3s' }}>
                  <CardMedia
                    component="img"
                    height="240"
                    image={tour.bannerImage || 'https://via.placeholder.com/400x240'}
                    alt={tour.name}
                    sx={{ height: 240, objectFit: 'cover' }}
                    loading="lazy"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 1 }}>
                      <Chip
                        label={tour.category}
                        size="small"
                      />
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                        <StarIcon sx={{ fontSize: 16, color: '#FFC107' }} aria-hidden="true" />
                        <Typography variant="body2" sx={{ fontWeight: 500 }}>
                          {tour.rating} ({tour.reviewCount})
                        </Typography>
                      </Box>
                    </Box>
                    <Typography variant="h3" sx={{ fontSize: '1.25rem', fontWeight: 'bold', mb: 1 }}>
                      {tour.name}
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mb: 1 }} color="text.secondary">
                      <LocationOnIcon fontSize="small" aria-hidden="true" />
                      <Typography variant="body2">
                        {tour.itinerary?.slice(1, 4).map(day => day.title.split(' to ')[1] || day.title.split(' ')[0]).filter(Boolean).join(', ')}
                      </Typography>
                    </Box>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ 
                        mb: 1.5,
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical'
                      }}
                    >
                      {tour.description}
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                      <AccessTimeIcon fontSize="small" aria-hidden="true" />
                      <Typography variant="body2">{tour.duration}</Typography>
                    </Box>
                  </CardContent>
                  <CardActions sx={{ p: 2, pt: 0 }}>
                    <Button
                      component={Link}
                      to={`/tours/${tour.id}`}
                      variant="contained"
                      fullWidth
                      size="large"
                      aria-label={`View details for ${tour.name}`}
                    >
                      Book Now – Limited Seats!
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>

          <Box sx={{ textAlign: 'center', mt: 4 }}>
            <Button
              component={Link}
              to="/tours"
              variant="outlined"
              size="large"
            >
              View All Tours
            </Button>
          </Box>
        </Container>

        {/* Destinations Section */}
        <Box component="section" sx={{ bgcolor: 'background.default', py: { xs: 6, md: 8 } }}>
          <Container sx={{ px: { xs: 2, sm: 3 } }}>
            <Box sx={{ textAlign: 'center', mb: 6 }}>
              <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '2.5rem' }, fontWeight: 'bold', mb: 2 }}>
                Explore Destinations
              </Typography>
              <Typography variant="h3" color="text.secondary" sx={{ fontSize: { xs: '1.125rem', md: '1.5rem' }, fontWeight: 400 }}>
                Discover the most beautiful places in Kashmir
              </Typography>
            </Box>

            <Grid container spacing={4}>
              {destinations.slice(0, 4).map((dest) => (
                <Grid item xs={12} sm={6} md={3} key={dest.id}>
                  <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', boxShadow: 3, borderRadius: 2, transition: 'all 0.3s', '&:hover': { boxShadow: 6 } }}>
                    <CardMedia
                      component="img"
                      height="200"
                      image={dest.bannerImage}
                      alt={dest.name}
                      sx={{ height: 192, objectFit: 'cover' }}
                      loading="lazy"
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography variant="h3" sx={{ fontSize: '1.25rem', fontWeight: 'bold', mb: 1 }}>
                        {dest.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                        {dest.tagline}
                      </Typography>
                    </CardContent>
                    <CardActions sx={{ p: 2, pt: 0 }}>
                      <Button
                        component={Link}
                        to={`/destinations/${dest.id}`}
                        variant="outlined"
                        fullWidth
                      >
                        Explore
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>

            <Box sx={{ textAlign: 'center', mt: 4 }}>
              <Button
                component={Link}
                to="/destinations"
                variant="outlined"
                size="large"
              >
                Explore All Destinations
              </Button>
            </Box>
          </Container>
        </Box>

        {/* About Us Section */}
        <Box component="section" sx={{ bgcolor: 'background.default', py: { xs: 6, md: 8 } }}>
          <Container sx={{ px: { xs: 2, sm: 3 } }}>
            <Grid container spacing={6} alignItems="center">
              <Grid item xs={12} md={6}>
                <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '2.5rem' }, fontWeight: 'bold', mb: 2 }}>
                  About Serene Valley Tours
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ mb: 2, lineHeight: 1.8 }}>
                  We are passionate locals who know every corner of Kashmir and Ladakh. Based in Srinagar, 
                  we specialize in creating memorable experiences that go beyond typical tourism.
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ mb: 3, lineHeight: 1.8 }}>
                  Our carefully crafted itineraries combine breathtaking landscapes, rich cultural heritage, 
                  and authentic local experiences tailored to your dreams.
                </Typography>
                <Button
                  component={Link}
                  to="/about"
                  variant="contained"
                  size="large"
                >
                  Learn More About Us
                </Button>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box
                  component="img"
                  src="/images/doodpathri1.webp"
                  alt="About Serene Valley Tours"
                  sx={{ width: '100%', height: { xs: '300px', md: '400px' }, objectFit: 'cover', borderRadius: 2 }}
                  loading="lazy"
                />
              </Grid>
            </Grid>
          </Container>
        </Box>

        {/* Trust Stats */}
        <TrustStats />

        {/* Why Choose Us */}
        <WhyChooseUs />

        {/* Testimonials */}
        <Testimonials />
      </Box>
    </>
  );
};

export default Home;

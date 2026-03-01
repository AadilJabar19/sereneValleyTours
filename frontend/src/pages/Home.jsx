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
import { getFeaturedTours } from '../data/tours';
import { destinations } from '../data/destinations';
import Loader from '../components/Loader';
import SEO from '../components/SEO';

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
          className="relative bg-cover bg-center"
          sx={{
            height: { xs: '70vh', sm: '80vh', md: '100vh' },
            backgroundImage:
              'linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.4)), url(https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80&fm=webp&fit=crop)',
          }}
          role="img"
          aria-label="Kashmir mountain landscape"
        >
          <Container className="h-full flex items-center" sx={{ px: { xs: 2, sm: 3 } }}>
            <Box className="text-white" sx={{ maxWidth: { xs: '100%', md: '66.666667%' } }}>
              <Typography variant="h1" className="font-bold mb-4" sx={{ color: 'white', fontSize: { xs: '1.75rem', sm: '2.5rem', md: '3rem' } }}>
                Discover the Paradise on Earth
              </Typography>
              <Typography variant="h2" className="mb-6 text-gray-200" sx={{ fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem' }, fontWeight: 400 }}>
                Experience breathtaking landscapes, rich culture, and unforgettable
                adventures in Kashmir and Ladakh
              </Typography>
              <Box className="flex gap-4" sx={{ flexDirection: { xs: 'column', sm: 'row' } }}>
                <Button
                  component={Link}
                  to="/tours"
                  variant="contained"
                  size="large"
                  className="transition-all duration-300"
                  fullWidth={true}
                  sx={{ maxWidth: { sm: '200px' } }}
                >
                  Explore Tours
                </Button>
                <Button
                  component={Link}
                  to="/contact"
                  variant="outlined"
                  size="large"
                  className="text-white border-white hover:bg-white hover:text-primary-main transition-all duration-300"
                  fullWidth={true}
                  sx={{ maxWidth: { sm: '200px' } }}
                >
                  Contact Us
                </Button>
              </Box>
            </Box>
          </Container>
        </Box>

        {/* Featured Tours */}
        <Container component="section" className="py-12 md:py-16" sx={{ px: { xs: 2, sm: 3 } }}>
          <Box className="text-center mb-12">
            <Typography variant="h2" className="font-bold mb-4" sx={{ fontSize: { xs: '2rem', md: '2.5rem' } }}>
              Featured Tours
            </Typography>
            <Typography variant="h3" color="text.secondary" sx={{ fontSize: { xs: '1.125rem', md: '1.5rem' }, fontWeight: 400 }}>
              Handpicked experiences for your perfect getaway
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {featuredTours.map((tour) => (
              <Grid item xs={12} md={4} key={tour.id}>
                <Card className="h-full flex flex-col shadow-lg rounded-2xl transition-all duration-300">
                  <CardMedia
                    component="img"
                    height="240"
                    image={tour.bannerImage || 'https://via.placeholder.com/400x240'}
                    alt={tour.name}
                    className="h-60 object-cover"
                    loading="lazy"
                  />
                  <CardContent className="flex-grow">
                    <Chip
                      label={tour.category}
                      size="small"
                      className="mb-2"
                    />
                    <Typography variant="h3" className="font-bold mb-2" sx={{ fontSize: '1.25rem' }}>
                      {tour.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      className="mb-3 line-clamp-2"
                    >
                      {tour.description}
                    </Typography>
                    <Box className="flex items-center gap-4" color="text.secondary">
                      <Box className="flex items-center gap-1">
                        <AccessTimeIcon fontSize="small" aria-hidden="true" />
                        <Typography variant="body2">{tour.duration}</Typography>
                      </Box>
                      <Typography variant="h4" color="primary" className="font-bold" sx={{ fontSize: '1.25rem' }}>
                        ₹{tour.price}
                      </Typography>
                    </Box>
                  </CardContent>
                  <CardActions className="p-4 pt-0">
                    <Button
                      component={Link}
                      to={`/tours/${tour.id}`}
                      variant="contained"
                      fullWidth
                      aria-label={`View details for ${tour.name}`}
                    >
                      View Details
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>

          <Box className="text-center mt-8">
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
        <Box component="section" sx={{ bgcolor: 'background.default' }} className="py-12 md:py-16">
          <Container sx={{ px: { xs: 2, sm: 3 } }}>
            <Box className="text-center mb-12">
              <Typography variant="h2" className="font-bold mb-4" sx={{ fontSize: { xs: '2rem', md: '2.5rem' } }}>
                Explore Destinations
              </Typography>
              <Typography variant="h3" color="text.secondary" sx={{ fontSize: { xs: '1.125rem', md: '1.5rem' }, fontWeight: 400 }}>
                Discover the most beautiful places in Kashmir
              </Typography>
            </Box>

            <Grid container spacing={4}>
              {destinations.slice(0, 4).map((dest) => (
                <Grid item xs={12} sm={6} md={3} key={dest.id}>
                  <Card className="h-full flex flex-col shadow-lg rounded-2xl transition-all duration-300 hover:shadow-xl">
                    <CardMedia
                      component="img"
                      height="200"
                      image={dest.bannerImage}
                      alt={dest.name}
                      className="h-48 object-cover"
                      loading="lazy"
                    />
                    <CardContent className="flex-grow">
                      <Typography variant="h3" className="font-bold mb-2" sx={{ fontSize: '1.25rem' }}>
                        {dest.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" className="mb-2">
                        {dest.tagline}
                      </Typography>
                    </CardContent>
                    <CardActions className="p-4 pt-0">
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

            <Box className="text-center mt-8">
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
        <Box component="section" sx={{ bgcolor: 'background.default' }} className="py-12 md:py-16">
          <Container sx={{ px: { xs: 2, sm: 3 } }}>
            <Grid container spacing={6} alignItems="center">
              <Grid item xs={12} md={6}>
                <Typography variant="h2" className="font-bold mb-4" sx={{ fontSize: { xs: '2rem', md: '2.5rem' } }}>
                  About Serene Valley Tours
                </Typography>
                <Typography variant="body1" color="text.secondary" className="mb-4" sx={{ lineHeight: 1.8 }}>
                  We are passionate locals who know every corner of Kashmir and Ladakh. Based in Srinagar, 
                  we specialize in creating memorable experiences that go beyond typical tourism.
                </Typography>
                <Typography variant="body1" color="text.secondary" className="mb-6" sx={{ lineHeight: 1.8 }}>
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

        {/* Why Choose Us */}
        <Box component="section" className="py-12 md:py-16">
          <Container>
            <Box className="text-center mb-12">
              <Typography variant="h2" className="font-bold mb-4" sx={{ fontSize: { xs: '2rem', md: '2.5rem' } }}>
                Why Choose Us
              </Typography>
            </Box>
            <Grid container spacing={4}>
              {[
                {
                  title: 'Expert Guides',
                  description: 'Local experts with deep knowledge of the region',
                },
                {
                  title: 'Best Prices',
                  description: 'Competitive pricing with no hidden costs',
                },
                {
                  title: 'Safe Travel',
                  description: 'Your safety is our top priority',
                },
                {
                  title: '24/7 Support',
                  description: 'Round-the-clock customer support',
                },
              ].map((feature, index) => (
                <Grid item xs={12} md={3} key={index}>
                  <Box className="text-center p-6 bg-card-white rounded-2xl shadow-lg h-full transition-all duration-300">
                    <Typography variant="h3" className="font-bold mb-2" sx={{ fontSize: '1.5rem' }}>
                      {feature.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {feature.description}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>
      </Box>
    </>
  );
};

export default Home;

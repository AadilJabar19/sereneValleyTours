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
          className="relative bg-cover bg-center overflow-hidden"
          sx={{
            height: { xs: '70vh', sm: '80vh', md: '100vh' },
          }}
          role="img"
          aria-label="Serene Kashmir valley with snow-capped mountains and lush green meadows"
        >
          <picture className="absolute inset-0 w-full h-full">
            <source srcSet="https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=1920&q=85&fm=webp&fit=crop" type="image/webp" />
            <img 
              src="https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=1920&q=85&fit=crop" 
              alt="Panoramic view of Kashmir valley with Dal Lake and Himalayan mountains"
              className="w-full h-full object-cover animate-[fadeIn_1.5s_ease-in]"
              loading="eager"
            />
          </picture>
          <Box className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-transparent" />
          <Container className="h-full flex items-center relative z-10" sx={{ px: { xs: 2, sm: 3 } }}>
            <Box className="text-white animate-[slideUp_1s_ease-out]" sx={{ maxWidth: { xs: '100%', md: '66.666667%' } }}>
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
                  sx={{ maxWidth: { sm: '220px' } }}
                >
                  Plan Your Trip
                </Button>
                <Button
                  component="a"
                  href="https://wa.me/917006327776?text=Hi!%20I%20am%20interested%20in%20Kashmir/Ladakh%20tour%20packages."
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="outlined"
                  size="large"
                  className="text-white border-white hover:bg-white hover:text-primary-main transition-all duration-300"
                  fullWidth={true}
                  sx={{ maxWidth: { sm: '200px' } }}
                >
                  WhatsApp Us
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
                    <Box className="flex items-center justify-between mb-2">
                      <Chip
                        label={tour.category}
                        size="small"
                      />
                      <Box className="flex items-center gap-1">
                        <StarIcon sx={{ fontSize: 16, color: '#FFC107' }} aria-hidden="true" />
                        <Typography variant="body2" className="font-medium">
                          {tour.rating} ({tour.reviewCount})
                        </Typography>
                      </Box>
                    </Box>
                    <Typography variant="h3" className="font-bold mb-2" sx={{ fontSize: '1.25rem' }}>
                      {tour.name}
                    </Typography>
                    <Box className="flex items-center gap-1 mb-2" color="text.secondary">
                      <LocationOnIcon fontSize="small" aria-hidden="true" />
                      <Typography variant="body2">
                        {tour.itinerary?.slice(1, 4).map(day => day.title.split(' to ')[1] || day.title.split(' ')[0]).filter(Boolean).join(', ')}
                      </Typography>
                    </Box>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      className="mb-3 line-clamp-2"
                    >
                      {tour.description}
                    </Typography>
                    <Box className="flex items-center justify-between" color="text.secondary">
                      <Box className="flex items-center gap-1">
                        <AccessTimeIcon fontSize="small" aria-hidden="true" />
                        <Typography variant="body2">{tour.duration}</Typography>
                      </Box>
                      <Typography variant="h4" color="primary" className="font-bold" sx={{ fontSize: '1.25rem' }}>
                        {tour.priceRange}
                      </Typography>
                    </Box>
                  </CardContent>
                  <CardActions className="p-4 pt-0">
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

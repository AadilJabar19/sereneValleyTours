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
import { getFeaturedTours, getAllTours } from '../data/tours';
import { destinations } from '../data/destinations';
import Loader from '../components/Loader';
import SEO from '../components/SEO';
import WhyChooseUs from '../components/WhyChooseUs';
import Testimonials from '../components/Testimonials';
import TrustStats from '../components/TrustStats';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
import { FloatingPlane, FloatingMountain, FloatingHotAirBalloon } from '../components/DecorativeIcons';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

const Home = () => {
  const [featuredTours, setFeaturedTours] = useState([]);
  const [allTours, setAllTours] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadFeaturedTours();
  }, []);

  const loadFeaturedTours = async () => {
    setLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 500));
      const tours = getFeaturedTours(3);
      const all = getAllTours();
      setFeaturedTours(tours);
      setAllTours(all);
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
          <Box sx={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.4), rgba(0,0,0,0.2))' }} />
          
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
                  sx={{ width: { xs: '100%', sm: 'auto' } }}
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
                  sx={{ 
                    width: { xs: '100%', sm: 'auto' },
                    color: 'white', 
                    borderColor: 'white',
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
        <Container component="section" sx={{ py: { xs: 6, md: 8 }, px: { xs: 2, sm: 3 }, position: 'relative', zIndex: 1 }}>
          <FloatingPlane sx={{ top: 50, right: 100, color: 'primary.main', zIndex: -1 }} />
          <FloatingMountain sx={{ bottom: 100, left: 50, color: 'primary.main', zIndex: -1 }} />
          
          <Box sx={{ textAlign: 'center', mb: 6 }} className="fade-in-up">
            <Typography 
              sx={{ 
                fontFamily: 'Pacifico, cursive', 
                fontSize: { xs: '1.5rem', md: '2rem' }, 
                color: 'primary.main',
                mb: 1
              }}
            >
              Explore Our Tours
            </Typography>
            <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '2.75rem' }, fontWeight: 'bold', mb: 2, color: '#2C3E50' }}>
              All Tours
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ fontSize: { xs: '1rem', md: '1.125rem' }, maxWidth: '600px', mx: 'auto' }}>
              Handpicked experiences for your perfect getaway
            </Typography>
          </Box>

          <Swiper
            modules={[Pagination, Autoplay, EffectCoverflow]}
            effect="coverflow"
            centeredSlides={true}
            slidesPerView="auto"
            loop={true}
            loopedSlides={allTours.length}
            slideToClickedSlide={true}
            allowTouchMove={true}
            coverflowEffect={{
              rotate: 15,
              stretch: 0,
              depth: 200,
              modifier: 1.5,
              slideShadows: true,
            }}
            pagination={{ clickable: true }}
            autoplay={{ delay: 4500, disableOnInteraction: false }}
            style={{ paddingBottom: '60px', paddingTop: '20px' }}
          >
            {allTours.map((tour, index) => (
              <SwiperSlide key={tour.id} style={{ width: '420px', maxWidth: '90vw' }}>
                <Card sx={{ 
                  height: '100%', 
                  display: 'flex', 
                  flexDirection: 'column', 
                  position: 'relative', 
                  overflow: 'visible',
                  cursor: 'pointer',
                  '&:hover': {
                    transform: 'none',
                    boxShadow: '0 10px 40px rgba(28, 168, 175, 0.15)',
                  }
                }}>
                  <Box sx={{ position: 'relative', overflow: 'hidden', borderRadius: '28px 28px 0 0' }}>
                    <CardMedia
                      component="img"
                      height="280"
                      image={tour.bannerImage || 'https://via.placeholder.com/400x280'}
                      alt={tour.name}
                      sx={{ height: 280, objectFit: 'cover', transition: 'transform 0.5s ease', '&:hover': { transform: 'scale(1.1)' }, borderRadius: '28px 28px 0 0' }}
                      loading="lazy"
                    />
                    <Chip
                      label={tour.category}
                      size="small"
                      sx={{ 
                        position: 'absolute', 
                        top: 16, 
                        left: 16,
                      }}
                    />
                    <Box sx={{ 
                      position: 'absolute', 
                      top: 16, 
                      right: 16,
                      bgcolor: 'white',
                      borderRadius: '12px',
                      p: 1,
                      display: 'flex',
                      alignItems: 'center',
                      gap: 0.5,
                      boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                    }}>
                      <StarIcon sx={{ fontSize: 18, color: '#FFC107' }} aria-hidden="true" />
                      <Typography variant="body2" sx={{ fontWeight: 600, color: '#2C3E50' }}>
                        {tour.rating}
                      </Typography>
                    </Box>
                  </Box>
                  <CardContent sx={{ flexGrow: 1, p: 3 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, color: 'text.secondary' }}>
                        <AccessTimeIcon fontSize="small" aria-hidden="true" />
                        <Typography variant="body2" sx={{ fontWeight: 500 }}>{tour.duration}</Typography>
                      </Box>
                      <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.875rem' }}>
                        ({tour.reviewCount} reviews)
                      </Typography>
                    </Box>
                    <Typography variant="h3" sx={{ fontSize: '1.375rem', fontWeight: 'bold', mb: 1.5, color: '#2C3E50' }}>
                      {tour.name}
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mb: 1.5 }} color="text.secondary">
                      <LocationOnIcon fontSize="small" aria-hidden="true" />
                      <Typography variant="body2">
                        {tour.itinerary?.slice(1, 4).map(day => day.title.split(' to ')[1] || day.title.split(' ')[0]).filter(Boolean).join(', ')}
                      </Typography>
                    </Box>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ 
                        mb: 2,
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                        lineHeight: 1.6
                      }}
                    >
                      {tour.description}
                    </Typography>
                  </CardContent>
                  <CardActions sx={{ p: 3, pt: 0 }}>
                    <Button
                      component={Link}
                      to={`/tours/${tour.id}`}
                      variant="contained"
                      fullWidth
                      size="large"
                      aria-label={`View details for ${tour.name}`}
                      sx={{ py: 1.5, fontSize: '1rem' }}
                    >
                      Book Now
                    </Button>
                  </CardActions>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>

          <Box sx={{ textAlign: 'center', mt: 6 }}>
            <Button
              component={Link}
              to="/tours"
              variant="outlined"
              size="large"
              sx={{ px: 4, py: 1.5, fontSize: '1rem' }}
            >
              View All Tours
            </Button>
          </Box>
        </Container>

        {/* Destinations Section */}
        <Box component="section" sx={{ bgcolor: '#F0F9FA', py: { xs: 6, md: 8 }, overflow: 'hidden', position: 'relative', zIndex: 1 }} className="decorative-bg">
          <FloatingHotAirBalloon sx={{ top: 80, right: 120, color: 'primary.main', zIndex: -1 }} />
          <Container sx={{ px: { xs: 2, sm: 3 } }}>
            <Box sx={{ textAlign: 'center', mb: 6 }}>
              <Typography 
                sx={{ 
                  fontFamily: 'Pacifico, cursive', 
                  fontSize: { xs: '1.5rem', md: '2rem' }, 
                  color: 'primary.main',
                  mb: 1
                }}
              >
                Beautiful Places
              </Typography>
              <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '2.75rem' }, fontWeight: 'bold', mb: 2, color: '#2C3E50' }}>
                Explore Destinations
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ fontSize: { xs: '1rem', md: '1.125rem' }, maxWidth: '600px', mx: 'auto' }}>
                Discover the most beautiful places in Kashmir
              </Typography>
            </Box>

            <Swiper
              modules={[Pagination, Autoplay, EffectCoverflow]}
              effect="coverflow"
              centeredSlides={true}
              slidesPerView="auto"
              loop={true}
              loopedSlides={destinations.length}
              slideToClickedSlide={true}
              allowTouchMove={true}
              coverflowEffect={{
                rotate: 15,
                stretch: 0,
                depth: 200,
                modifier: 1.5,
                slideShadows: true,
              }}
              pagination={{ clickable: true }}
              autoplay={{ delay: 4000, disableOnInteraction: false }}
              style={{ paddingBottom: '60px', paddingTop: '20px' }}
            >
              {destinations.map((dest) => (
                <SwiperSlide key={dest.id} style={{ width: '400px', maxWidth: '85vw' }}>
                  <Card sx={{ 
                    height: '100%', 
                    display: 'flex', 
                    flexDirection: 'column', 
                    position: 'relative',
                    cursor: 'pointer',
                    '&:hover': {
                      transform: 'none',
                      boxShadow: '0 10px 40px rgba(28, 168, 175, 0.15)',
                    }
                  }}>
                    <Box sx={{ position: 'relative', overflow: 'hidden', '&::after': { content: '""', position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.5) 100%)', pointerEvents: 'none' } }}>
                      <CardMedia
                        component="img"
                        height="300"
                        image={dest.bannerImage}
                        alt={dest.name}
                        sx={{ height: 300, objectFit: 'cover', transition: 'transform 0.5s ease', '&:hover': { transform: 'scale(1.1)' } }}
                        loading="lazy"
                      />
                      <Typography 
                        variant="h3" 
                        sx={{ 
                          position: 'absolute', 
                          bottom: 16, 
                          left: 16, 
                          color: 'white', 
                          fontSize: '1.75rem', 
                          fontWeight: 'bold',
                          textShadow: '0 2px 10px rgba(0,0,0,0.5)',
                          zIndex: 1
                        }}
                      >
                        {dest.name}
                      </Typography>
                    </Box>
                    <CardContent sx={{ flexGrow: 1, p: 3 }}>
                      <Typography variant="body2" color="text.secondary" sx={{ mb: 2, lineHeight: 1.7, fontSize: '0.9375rem' }}>
                        {dest.tagline}
                      </Typography>
                    </CardContent>
                    <CardActions sx={{ p: 3, pt: 0 }}>
                      <Button
                        component={Link}
                        to={`/destinations/${dest.id}`}
                        variant="outlined"
                        fullWidth
                        sx={{ py: 1.25 }}
                      >
                        Explore
                      </Button>
                    </CardActions>
                  </Card>
                </SwiperSlide>
              ))}
            </Swiper>

            <Box sx={{ textAlign: 'center', mt: 6 }}>
              <Button
                component={Link}
                to="/destinations"
                variant="outlined"
                size="large"
                sx={{ px: 4, py: 1.5, fontSize: '1rem' }}
              >
                Explore All Destinations
              </Button>
            </Box>
          </Container>
        </Box>

        {/* About Us Section */}
        <Box component="section" sx={{ py: { xs: 6, md: 8 } }}>
          <Container sx={{ px: { xs: 2, sm: 3 } }}>
            <Grid container spacing={6} alignItems="center">
              <Grid item xs={12} md={6}>
                <Typography 
                  sx={{ 
                    fontFamily: 'Pacifico, cursive', 
                    fontSize: { xs: '1.5rem', md: '2rem' }, 
                    color: 'primary.main',
                    mb: 1
                  }}
                >
                  Who We Are
                </Typography>
                <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '2.75rem' }, fontWeight: 'bold', mb: 3, color: '#2C3E50' }}>
                  About Serene Valley Tours
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ mb: 2.5, lineHeight: 1.8, fontSize: '1.0625rem' }}>
                  We are passionate locals who know every corner of Kashmir and Ladakh. Based in Srinagar, 
                  we specialize in creating memorable experiences that go beyond typical tourism.
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ mb: 4, lineHeight: 1.8, fontSize: '1.0625rem' }}>
                  Our carefully crafted itineraries combine breathtaking landscapes, rich cultural heritage, 
                  and authentic local experiences tailored to your dreams.
                </Typography>
                <Button
                  component={Link}
                  to="/about"
                  variant="contained"
                  size="large"
                  sx={{ px: 4, py: 1.5, fontSize: '1rem' }}
                >
                  Learn More About Us
                </Button>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box
                  component="img"
                  src="/images/doodpathri1.webp"
                  alt="About Serene Valley Tours"
                  sx={{ 
                    width: '100%', 
                    height: { xs: '320px', md: '450px' }, 
                    objectFit: 'cover', 
                    borderRadius: '20px',
                    boxShadow: '0 12px 40px rgba(28, 168, 175, 0.15)'
                  }}
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

import { Link } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Stack,
} from '@mui/material';
import RouteIcon from '@mui/icons-material/Route';
import Groups2Icon from '@mui/icons-material/Groups2';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { tours } from '../data/tours';
import { destinations } from '../data/destinations';
import SEO from '../components/SEO';
import WhyChooseUs from '../components/WhyChooseUs';
import TrustStats from '../components/TrustStats';
import Testimonials from '../components/Testimonials';
import StackedCarousel from '../components/StackedCarousel';
import PageHero from '../components/PageHero';

const Home = () => {
  const tourCategories = ['All', 'Kashmir', 'Ladakh', 'Trekking', 'Skiing'];
  const destinationCategories = ['All', 'Kashmir', 'Ladakh'];
  const destinationsWithCategory = destinations.map((dest) => ({
    ...dest,
    category: ['leh', 'nubra-valley', 'pangong-lake'].includes(dest.id) ? 'Ladakh' : 'Kashmir'
  }));

  return (
    <>
      <SEO 
        title="Serene Valley Tours - Kashmir & Ladakh Tour Packages"
        description="Explore Kashmir and Ladakh with expertly crafted tour packages. Book your dream vacation with Serene Valley Tours - Best prices, expert guides, safe travel."
        keywords="Kashmir tours, Ladakh tours, Kashmir packages, Ladakh packages, Gulmarg skiing, Pangong Lake, Dal Lake, Srinagar tours"
        url="https://serenevalleytours.com"
      />
      <Box
        sx={{
          background: 'linear-gradient(180deg, #F8FCFF 0%, #F3FAFC 52%, #EEF8FB 100%)',
        }}
      >
        <PageHero
          subtitle="Serene Valley Tours"
          title="Discover the Paradise on Earth"
          description="Experience breathtaking landscapes, rich culture, and unforgettable adventures in Kashmir and Ladakh"
          image="https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=1920&q=85&fit=crop"
          ariaLabel="Serene Kashmir valley with snow-capped mountains and lush green meadows"
        >
          <Box sx={{ display: 'flex', gap: 2, flexDirection: { xs: 'column', sm: 'row' }, alignItems: 'stretch' }}>
            <Button
              component={Link}
              to="/tours"
              variant="contained"
              size="large"
              sx={{
                width: { xs: '100%', sm: 'auto' },
                borderRadius: '999px',
                px: 4,
                py: 1.4,
                fontSize: '1.05rem',
                textTransform: 'none',
                background: 'linear-gradient(135deg, #2DBFD4 0%, #1A95A7 100%)',
                boxShadow: '0 10px 24px rgba(26,149,167,0.35)',
                '&:hover': {
                  background: 'linear-gradient(135deg, #28B5C8 0%, #167F8F 100%)',
                },
              }}
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
                borderColor: 'rgba(255,255,255,0.6)',
                borderWidth: 1.5,
                borderRadius: '999px',
                px: 4,
                py: 1.4,
                fontSize: '1.05rem',
                textTransform: 'none',
                backdropFilter: 'blur(1px)',
                '&:hover': {
                  bgcolor: 'rgba(255,255,255,0.1)',
                  color: 'white',
                  borderColor: 'rgba(255,255,255,0.85)',
                },
              }}
            >
              WhatsApp Us
            </Button>
          </Box>
        </PageHero>

        {/* Tours Section */}
        <Box component="section" sx={{ py: { xs: 2, md: 4 } }}>
          <StackedCarousel
            title="Top Tours"
            subtitle="Find Your Adventure"
            items={tours}
            categories={tourCategories}
            linkPrefix="/tours"
            ctaLabel="View All Tours"
            ctaTo="/tours"
          />
        </Box>

        {/* Destinations Section */}
        <Box component="section" sx={{ py: { xs: 2, md: 4 } }}>
          <StackedCarousel
            title="Top Destinations"
            subtitle="Beautiful Places"
            items={destinationsWithCategory}
            categories={destinationCategories}
            linkPrefix="/destinations"
            ctaLabel="Explore All Destinations"
            ctaTo="/destinations"
          />
        </Box>

        {/* About Us Section */}
        <Box component="section" sx={{ py: { xs: 7, md: 10 }, bgcolor: 'transparent' }}>
          <Container sx={{ px: { xs: 2, sm: 3 } }}>
            <Grid container spacing={{ xs: 4, md: 6 }} alignItems="center">
              <Grid item xs={12} lg={5.2}>
                <Box
                  sx={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    gridTemplateRows: { xs: '250px 200px', md: '320px 260px' },
                    gap: 2,
                    maxWidth: 540,
                    mx: 'auto',
                  }}
                >
                  <Box
                    component="img"
                    src="/images/gurez1.webp"
                    alt="Mountain trekking"
                    loading="lazy"
                    sx={{
                      gridRow: '1 / 3',
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      borderRadius: '180px 180px 0 0',
                    }}
                  />
                  <Box
                    component="img"
                    src="/images/pangong1.webp"
                    alt="Kayaking and lake adventures"
                    loading="lazy"
                    sx={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      borderRadius: '180px 180px 0 180px',
                    }}
                  />
                  <Box
                    component="img"
                    src="/images/srinagar6.webp"
                    alt="Travel memories in Kashmir"
                    loading="lazy"
                    sx={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      borderRadius: '180px 180px 180px 0',
                    }}
                  />
                </Box>
              </Grid>

              <Grid item xs={12} lg={4.8}>
                <Typography
                  sx={{
                    fontFamily: 'Pacifico, cursive',
                    fontSize: { xs: '1.6rem', md: '2rem' },
                    color: '#3D8C95',
                    mb: 0.5,
                  }}
                >
                  Let&apos;s Go Together
                </Typography>
                <Typography
                  variant="h2"
                  sx={{ fontSize: { xs: '2.25rem', md: '3rem' }, fontWeight: 700, lineHeight: 1.08, color: '#123E49', mb: 2.5 }}
                >
                  Plan Your Trip
                  <br />
                  With Us
                </Typography>
                <Typography color="text.secondary" sx={{ lineHeight: 1.75, mb: 3, maxWidth: 560 }}>
                  We curate seamless Kashmir and Ladakh journeys with local experts, trusted stays, and flexible plans so your vacation feels effortless from day one.
                </Typography>

                <Stack spacing={2.3} sx={{ mb: 4 }}>
                  <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.7 }}>
                    <Box sx={{ width: 56, height: 56, borderRadius: '50%', bgcolor: '#27B8CD', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <RouteIcon />
                    </Box>
                    <Box>
                      <Typography sx={{ fontSize: '2rem', fontWeight: 700, color: '#123E49' }}>Exclusive Trip</Typography>
                      <Typography color="text.secondary">Private itineraries designed around your style, budget, and pace.</Typography>
                    </Box>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.7 }}>
                    <Box sx={{ width: 56, height: 56, borderRadius: '50%', bgcolor: '#27B8CD', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <Groups2Icon />
                    </Box>
                    <Box>
                      <Typography sx={{ fontSize: '2rem', fontWeight: 700, color: '#123E49' }}>Professional Guide</Typography>
                      <Typography color="text.secondary">Experienced local support for safe travel and richer experiences.</Typography>
                    </Box>
                  </Box>
                </Stack>

                <Button
                  component={Link}
                  to="/about"
                  variant="contained"
                  endIcon={<ArrowForwardIcon />}
                  sx={{
                    borderRadius: '999px',
                    px: 4,
                    py: 1.4,
                    fontSize: '1.05rem',
                    textTransform: 'none',
                    bgcolor: '#104B59',
                    '&:hover': { bgcolor: '#0D404C' },
                  }}
                >
                  Learn More
                </Button>
              </Grid>

              <Grid item xs={12} lg={2}>
                <Box sx={{ position: 'relative', maxWidth: 280, mx: 'auto', display: { xs: 'none', lg: 'block' } }}>
                  <Box sx={{ width: 260, height: 260, borderRadius: '50%', bgcolor: '#E8F5F8', ml: 'auto' }} />
                  <Box
                    component="img"
                    src="/images/aruvalley1.webp"
                    alt="Traveler with luggage"
                    loading="lazy"
                    sx={{
                      position: 'absolute',
                      bottom: 0,
                      right: 0,
                      width: 220,
                      height: 300,
                      objectFit: 'cover',
                      borderRadius: '120px 120px 16px 16px',
                      boxShadow: '0 16px 40px rgba(18,62,73,0.16)',
                    }}
                  />
                  <Box sx={{ position: 'absolute', top: 24, right: -6, bgcolor: 'white', borderRadius: '999px', px: 1.2, py: 0.7, boxShadow: '0 8px 20px rgba(0,0,0,0.12)', fontWeight: 700, color: '#123E49' }}>
                    4.9k
                  </Box>
                  <Box sx={{ position: 'absolute', bottom: 72, left: -10, bgcolor: 'white', borderRadius: '50%', width: 42, height: 42, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 8px 20px rgba(0,0,0,0.12)', fontSize: '1.3rem' }}>
                    😍
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>

        {/* Why Choose Us */}
        <WhyChooseUs />

        {/* Trust Stats */}
        <TrustStats />

        {/* Testimonials */}
        <Testimonials />
      </Box>
    </>
  );
};

export default Home;


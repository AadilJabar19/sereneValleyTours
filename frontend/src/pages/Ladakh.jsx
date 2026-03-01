import { Link } from 'react-router-dom';
import { Box, Container, Typography, Grid, Card, CardContent, Button, CardMedia, CardActions, Chip } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { ladakhContent } from '../data/tourContent';
import { tours } from '../data/tours';
import SEO from '../components/SEO';

const Ladakh = () => {
  const ladakhTours = tours.filter(tour => tour.category === 'Ladakh');

  return (
    <>
      <SEO 
        title="Ladakh Tour Packages - Serene Valley Tours"
        description="Discover Ladakh's raw beauty with our adventure tour packages. Visit Pangong Lake, Nubra Valley, Leh, and Khardung La. Book your Ladakh adventure today!"
        keywords="Ladakh tours, Ladakh packages, Pangong Lake, Nubra Valley, Leh tours, Khardung La, Ladakh bike trip, Ladakh adventure"
        url="https://serenevalleytours.com/ladakh"
      />
      <Box>
        {/* Hero Section */}
        <Box
          component="section"
          className="relative h-screen bg-cover bg-center"
          sx={{
            backgroundImage:
              'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(/images/ladakh.webp)',
          }}
          role="img"
          aria-label="Ladakh Pangong Lake landscape"
        >
          <Container className="h-full flex items-center relative z-10">
            <Box className="text-white max-w-3xl">
              <Typography variant="h1" className="font-bold mb-4 text-white" sx={{ fontSize: { xs: '2rem', md: '3rem' } }}>
                {ladakhContent.heading}
              </Typography>
              <Typography variant="h2" className="mb-6 text-white" sx={{ fontSize: { xs: '1.25rem', md: '1.5rem' }, fontWeight: 400 }}>
                {ladakhContent.description}
              </Typography>
            </Box>
          </Container>
        </Box>

        {/* Popular Tours */}
        <Container component="section" className="py-16">
          <Box className="text-center mb-12">
            <Typography variant="h2" className="font-bold mb-4" sx={{ fontSize: { xs: '2rem', md: '2.5rem' } }}>
              Popular Tours
            </Typography>
            <Typography variant="h3" color="text.secondary" sx={{ fontSize: { xs: '1.125rem', md: '1.5rem' }, fontWeight: 400 }}>
              Explore our top-rated Ladakh adventures, from high-altitude lakes to scenic valleys and rugged mountain passes.
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {ladakhTours.map((tour) => (
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
                    <Chip label={tour.category} size="small" className="mb-2" />
                    <Typography variant="h3" className="font-bold mb-2" sx={{ fontSize: '1.25rem' }}>
                      {tour.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" className="mb-3 line-clamp-2">
                      {tour.description}
                    </Typography>
                    <Box className="flex items-center gap-4">
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
                    <Button component={Link} to={`/tours/${tour.id}`} variant="contained" fullWidth aria-label={`View details for ${tour.name}`}>
                      View Details
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>

        {/* Ladakh Tourism Section */}
        <Box component="section" sx={{ bgcolor: 'background.default' }} className="py-16">
          <Container>
            <Box className="text-center mb-12">
              <Typography variant="h2" className="font-bold mb-4" sx={{ fontSize: { xs: '2rem', md: '2.5rem' } }}>
                {ladakhContent.subHeading}
              </Typography>
              <Typography variant="h3" color="text.secondary" sx={{ fontSize: { xs: '1.125rem', md: '1.5rem' }, fontWeight: 400 }}>
                Every Pass Tells a Story — Travel with Serene Valley Tours
              </Typography>
            </Box>

            <Grid container spacing={4}>
              {ladakhContent.features.map((feature, index) => (
                <Grid item xs={12} md={4} key={index}>
                  <Card className="h-full shadow-lg rounded-2xl transition-all duration-300 hover:shadow-xl">
                    <CardContent className="p-6">
                      <Typography variant="h3" className="font-bold mb-4 text-primary-main" sx={{ fontSize: '1.5rem' }}>
                        {feature.title}
                      </Typography>
                      <Box className="space-y-2.5">
                        {feature.items.map((item, i) => (
                          <Typography key={i} variant="body1" color="text.secondary" className="leading-relaxed" sx={{ fontSize: '1.05rem', lineHeight: 1.7 }}>
                            {item}
                          </Typography>
                        ))}
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>
      </Box>
    </>
  );
};

export default Ladakh;

import { Link } from 'react-router-dom';
import { Box, Container, Typography, Grid, Card, CardContent, Button, CardMedia, CardActions, Chip } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { kashmirContent } from '../data/tourContent';
import { tours } from '../data/tours';
import SEO from '../components/SEO';

const Kashmir = () => {
  const kashmirTours = tours.filter(tour => tour.category === 'Kashmir');

  return (
    <>
      <SEO 
        title="Kashmir Tour Packages - Serene Valley Tours"
        description="Explore Kashmir's breathtaking beauty with our expertly crafted tour packages. Visit Dal Lake, Gulmarg, Pahalgam, and Sonamarg. Book your Kashmir vacation today!"
        keywords="Kashmir tours, Kashmir packages, Dal Lake, Gulmarg skiing, Pahalgam tours, Sonamarg, Srinagar tours, Kashmir vacation"
        url="https://serenevalleytours.com/kashmir"
      />
      <Box>
        {/* Hero Section */}
        <Box
          component="section"
          className="relative h-screen bg-cover bg-center"
          sx={{
            backgroundImage:
              'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(/images/kashmir.webp)',
          }}
          role="img"
          aria-label="Kashmir Dal Lake with houseboats"
        >
          <Container sx={{ height: '100%', display: 'flex', alignItems: 'center', position: 'relative', zIndex: 10, px: { xs: 2, sm: 3 } }}>
            <Box sx={{ color: 'white', maxWidth: '48rem' }}>
              <Typography variant="h1" sx={{ color: 'white', fontSize: { xs: '2rem', md: '3rem' }, fontWeight: 'bold', mb: 2 }}>
                {kashmirContent.heading}
              </Typography>
              <Typography variant="h2" sx={{ fontSize: { xs: '1.25rem', md: '1.5rem' }, fontWeight: 400, mb: 3, color: 'white' }}>
                {kashmirContent.description}
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
              Discover our most booked and highly-rated tours across Kashmir's most beautiful locations.
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {kashmirTours.map((tour) => (
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

        {/* Kashmir Tourism Section */}
        <Box component="section" sx={{ bgcolor: 'background.default' }} className="py-16">
          <Container>
            <Box className="text-center mb-12">
              <Typography variant="h2" className="font-bold mb-4" sx={{ fontSize: { xs: '2rem', md: '2.5rem' } }}>
                {kashmirContent.subHeading}
              </Typography>
              <Typography variant="h3" color="text.secondary" sx={{ fontSize: { xs: '1.125rem', md: '1.5rem' }, fontWeight: 400 }}>
                Explore the Paradise on Earth with Serene Valley Tours
              </Typography>
            </Box>

            <Grid container spacing={4}>
              {kashmirContent.features.map((feature, index) => (
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

export default Kashmir;

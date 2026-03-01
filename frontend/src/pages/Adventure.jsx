import { Link } from 'react-router-dom';
import { Box, Container, Typography, Grid, Card, CardContent, Button, CardMedia, CardActions, Chip } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { adventureContent } from '../data/tourContent';
import { tours } from '../data/tours';
import SEO from '../components/SEO';

const Adventure = () => {
  const adventureTours = tours.filter(tour => 
    tour.category === 'Adventure' || tour.category === 'Trekking' || tour.category === 'Skiing'
  );

  return (
    <>
      <SEO 
        title="Adventure Tours - Trekking & Skiing in Kashmir & Ladakh"
        description="Experience thrilling adventure tours in Kashmir and Ladakh. Trekking, skiing, and outdoor adventures. Book your adrenaline-filled journey today!"
        keywords="adventure tours, trekking Kashmir, skiing Gulmarg, Ladakh trekking, adventure packages, outdoor activities Kashmir"
        url="https://serenevalleytours.com/adventure"
      />
      <Box>
        {/* Hero Section */}
        <Box
          component="section"
          className="relative h-screen bg-cover bg-center"
          sx={{
            backgroundImage:
              'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(/images/trekking.webp)',
          }}
          role="img"
          aria-label="Mountain trekking adventure"
        >
          <Container className="h-full flex items-center relative z-10">
            <Box className="text-white max-w-3xl">
              <Typography variant="h1" className="font-bold mb-4 text-white" sx={{ fontSize: { xs: '2rem', md: '3rem' } }}>
                {adventureContent.heading}
              </Typography>
              <Typography variant="h2" className="mb-6 text-white" sx={{ fontSize: { xs: '1.25rem', md: '1.5rem' }, fontWeight: 400 }}>
                {adventureContent.description}
              </Typography>
            </Box>
          </Container>
        </Box>

        {/* Popular Tours */}
        <Container component="section" className="py-16">
          <Box className="text-center mb-12">
            <Typography variant="h2" className="font-bold mb-4" sx={{ fontSize: { xs: '2rem', md: '2.5rem' } }}>
              Adventure Tours
            </Typography>
            <Typography variant="h3" color="text.secondary" sx={{ fontSize: { xs: '1.125rem', md: '1.5rem' }, fontWeight: 400 }}>
              Browse our most loved trekking and adventure tours across Kashmir and Ladakh.
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {adventureTours.map((tour) => (
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

        {/* Adventure Activities Section */}
        <Box component="section" sx={{ bgcolor: 'background.default' }} className="py-16">
          <Container>
            <Box className="text-center mb-12">
              <Typography variant="h2" className="font-bold mb-4" sx={{ fontSize: { xs: '2rem', md: '2.5rem' } }}>
                {adventureContent.subHeading}
              </Typography>
              <Typography variant="h3" color="text.secondary" sx={{ fontSize: { xs: '1.125rem', md: '1.5rem' }, fontWeight: 400 }}>
                From skiing in Gulmarg to trekking Himalayan trails
              </Typography>
            </Box>

            <Grid container spacing={4}>
              {adventureContent.categories.map((category, index) => (
                <Grid item xs={12} md={6} key={index}>
                  <Card className="h-full shadow-lg rounded-2xl transition-all duration-300 hover:shadow-xl">
                    <CardContent className="p-8">
                      <Typography variant="h3" className="font-bold mb-4 text-primary-main" sx={{ fontSize: '2rem' }}>
                        {category.name}
                      </Typography>
                      <Box className="space-y-2.5">
                        {category.items.map((item, i) => (
                          <Typography key={i} variant="body1" color="text.secondary" className="leading-relaxed" sx={{ fontSize: '1.125rem', lineHeight: 1.7 }}>
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

export default Adventure;

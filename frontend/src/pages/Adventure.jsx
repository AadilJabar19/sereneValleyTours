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
          <Container sx={{ height: '100%', display: 'flex', alignItems: 'center', position: 'relative', zIndex: 10, px: { xs: 2, sm: 3 } }}>
            <Box sx={{ color: 'white', maxWidth: '48rem' }}>
              <Typography variant="h1" sx={{ color: 'white', fontSize: { xs: '2rem', md: '3rem' }, fontWeight: 'bold', mb: 2 }}>
                {adventureContent.heading}
              </Typography>
              <Typography variant="h2" sx={{ fontSize: { xs: '1.25rem', md: '1.5rem' }, fontWeight: 400, mb: 3, color: 'white' }}>
                {adventureContent.description}
              </Typography>
            </Box>
          </Container>
        </Box>

        {/* Popular Tours */}
        <Container component="section" sx={{ py: { xs: 8, md: 12 } }}>
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography 
              sx={{ 
                fontFamily: 'Pacifico, cursive', 
                fontSize: { xs: '1.5rem', md: '2rem' }, 
                color: 'primary.main',
                mb: 1
              }}
            >
              Thrilling Experiences
            </Typography>
            <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '2.75rem' }, fontWeight: 'bold', mb: 2, color: '#2C3E50' }}>
              Adventure Tours
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ fontSize: { xs: '1rem', md: '1.125rem' }, maxWidth: '700px', mx: 'auto' }}>
              Browse our most loved trekking and adventure tours across Kashmir and Ladakh.
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {adventureTours.map((tour) => (
              <Grid item xs={12} md={4} key={tour.id}>
                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <Box sx={{ position: 'relative', overflow: 'hidden' }}>
                    <CardMedia
                      component="img"
                      height="280"
                      image={tour.bannerImage || 'https://via.placeholder.com/400x280'}
                      alt={tour.name}
                      sx={{ height: 280, objectFit: 'cover', transition: 'transform 0.3s', '&:hover': { transform: 'scale(1.05)' } }}
                      loading="lazy"
                    />
                    <Chip label={tour.category} size="small" sx={{ position: 'absolute', top: 16, left: 16 }} />
                  </Box>
                  <CardContent sx={{ flexGrow: 1, p: 3 }}>
                    <Typography variant="h3" sx={{ fontSize: '1.375rem', fontWeight: 'bold', mb: 1.5, color: '#2C3E50' }}>
                      {tour.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 2, overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', lineHeight: 1.6 }}>
                      {tour.description}
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, color: 'text.secondary' }}>
                      <AccessTimeIcon fontSize="small" aria-hidden="true" />
                      <Typography variant="body2">{tour.duration}</Typography>
                    </Box>
                  </CardContent>
                  <CardActions sx={{ p: 3, pt: 0 }}>
                    <Button component={Link} to={`/tours/${tour.id}`} variant="contained" fullWidth size="large" sx={{ py: 1.5 }} aria-label={`View details for ${tour.name}`}>
                      View Details
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>

        {/* Adventure Activities Section */}
        <Box component="section" sx={{ bgcolor: '#F0F9FA', py: { xs: 8, md: 12 } }}>
          <Container>
            <Box sx={{ textAlign: 'center', mb: 8 }}>
              <Typography 
                sx={{ 
                  fontFamily: 'Pacifico, cursive', 
                  fontSize: { xs: '1.5rem', md: '2rem' }, 
                  color: 'primary.main',
                  mb: 1
                }}
              >
                Outdoor Activities
              </Typography>
              <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '2.75rem' }, fontWeight: 'bold', mb: 2, color: '#2C3E50' }}>
                {adventureContent.subHeading}
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ fontSize: { xs: '1rem', md: '1.125rem' }, maxWidth: '600px', mx: 'auto' }}>
                From skiing in Gulmarg to trekking Himalayan trails
              </Typography>
            </Box>

            <Grid container spacing={4}>
              {adventureContent.categories.map((category, index) => (
                <Grid item xs={12} md={6} key={index}>
                  <Card sx={{ height: '100%', p: 1 }}>
                    <CardContent sx={{ p: 5 }}>
                      <Typography variant="h3" sx={{ fontSize: '2rem', fontWeight: 'bold', mb: 3, color: 'primary.main' }}>
                        {category.name}
                      </Typography>
                      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                        {category.items.map((item, i) => (
                          <Typography key={i} variant="body1" color="text.secondary" sx={{ fontSize: '1.0625rem', lineHeight: 1.7 }}>
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

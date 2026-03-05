import { Link } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
} from '@mui/material';
import { destinations } from '../data/destinations';
import SEO from '../components/SEO';

const Destinations = () => {
  return (
    <>
      <SEO 
        title="Destinations - Kashmir & Ladakh | Serene Valley Tours"
        description="Explore top destinations in Kashmir including Gulmarg, Pahalgam, Sonamarg, and Srinagar. Discover beautiful landscapes and plan your perfect trip."
        keywords="Kashmir destinations, Gulmarg, Pahalgam, Sonamarg, Srinagar, Kashmir places to visit"
        url="https://serenevalleytours.com/destinations"
      />
      
      <Box component="main">
        {/* Hero Section */}
        <Box
          component="section"
          sx={{
            height: { xs: '50vh', md: '60vh' },
            position: 'relative',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage:
              'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.5)), url(https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80&fm=webp&fit=crop)',
          }}
          role="img"
          aria-label="Kashmir destinations"
        >
          <Container sx={{ height: '100%', display: 'flex', alignItems: 'center', px: { xs: 2, sm: 3 } }}>
            <Box sx={{ color: 'white', textAlign: 'center', width: '100%' }}>
              <Typography 
                sx={{ 
                  fontFamily: 'Pacifico, cursive', 
                  fontSize: { xs: '1.5rem', md: '2rem' }, 
                  color: 'white',
                  mb: 1
                }}
              >
                Beautiful Places
              </Typography>
              <Typography variant="h1" sx={{ color: 'white', fontSize: { xs: '2rem', md: '3rem' }, fontWeight: 'bold', mb: 2 }}>
                Explore Destinations
              </Typography>
              <Typography variant="body1" sx={{ fontSize: { xs: '1rem', md: '1.125rem' }, color: 'rgba(255,255,255,0.9)', maxWidth: '600px', mx: 'auto' }}>
                Discover the most beautiful places in Kashmir
              </Typography>
            </Box>
          </Container>
        </Box>

        {/* Destinations Grid */}
        <Container component="section" sx={{ py: { xs: 8, md: 12 }, px: { xs: 2, sm: 3 } }}>
          <Grid container spacing={4}>
            {destinations.map((dest) => (
              <Grid item xs={12} sm={6} md={4} key={dest.id}>
                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <Box sx={{ position: 'relative', overflow: 'hidden' }}>
                    <CardMedia
                      component="img"
                      height="280"
                      image={dest.bannerImage}
                      alt={dest.name}
                      sx={{ height: 280, objectFit: 'cover', transition: 'transform 0.3s', '&:hover': { transform: 'scale(1.05)' } }}
                      loading="lazy"
                    />
                  </Box>
                  <CardContent sx={{ flexGrow: 1, p: 3 }}>
                    <Typography variant="h3" sx={{ fontSize: '1.5rem', fontWeight: 'bold', mb: 1.5, color: '#2C3E50' }}>
                      {dest.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 2, fontWeight: 500, fontSize: '0.9375rem' }}>
                      {dest.tagline}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7, overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical' }}>
                      {dest.description}
                    </Typography>
                  </CardContent>
                  <CardActions sx={{ p: 3, pt: 0 }}>
                    <Button
                      component={Link}
                      to={`/destinations/${dest.id}`}
                      variant="contained"
                      fullWidth
                      size="large"
                      sx={{ py: 1.5 }}
                    >
                      Explore {dest.name}
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Destinations;

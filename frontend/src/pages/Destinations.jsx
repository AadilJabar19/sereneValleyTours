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
          className="relative bg-cover bg-center"
          sx={{
            height: { xs: '40vh', md: '50vh' },
            backgroundImage:
              'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.5)), url(https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80&fm=webp&fit=crop)',
          }}
          role="img"
          aria-label="Kashmir destinations"
        >
          <Container className="h-full flex items-center" sx={{ px: { xs: 2, sm: 3 } }}>
            <Box className="text-white">
              <Typography variant="h1" className="font-bold mb-4" sx={{ color: 'white', fontSize: { xs: '2rem', md: '3rem' } }}>
                Explore Destinations
              </Typography>
              <Typography variant="h2" className="text-gray-200" sx={{ fontSize: { xs: '1rem', md: '1.25rem' }, fontWeight: 400 }}>
                Discover the most beautiful places in Kashmir
              </Typography>
            </Box>
          </Container>
        </Box>

        {/* Destinations Grid */}
        <Container component="section" className="py-12 md:py-16" sx={{ px: { xs: 2, sm: 3 } }}>
          <Grid container spacing={4}>
            {destinations.map((dest) => (
              <Grid item xs={12} sm={6} md={4} key={dest.id}>
                <Card className="h-full flex flex-col shadow-lg rounded-2xl transition-all duration-300 hover:shadow-xl">
                  <CardMedia
                    component="img"
                    height="250"
                    image={dest.bannerImage}
                    alt={dest.name}
                    className="h-64 object-cover"
                    loading="lazy"
                  />
                  <CardContent className="flex-grow">
                    <Typography variant="h3" className="font-bold mb-2" sx={{ fontSize: '1.5rem' }}>
                      {dest.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" className="mb-3">
                      {dest.tagline}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" className="line-clamp-3">
                      {dest.description}
                    </Typography>
                  </CardContent>
                  <CardActions className="p-4 pt-0">
                    <Button
                      component={Link}
                      to={`/destinations/${dest.id}`}
                      variant="contained"
                      fullWidth
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

import { Link } from 'react-router-dom';
import { Box, Container, Typography, Grid, Card, CardMedia, CardContent, CardActions, Button, Chip } from '@mui/material';
import { destinations } from '../data/destinations';
import SEO from '../components/SEO';
import PageHero from '../components/PageHero';
import SectionHeader from '../components/SectionHeader';

const Destinations = () => {
  const destinationsWithCategory = destinations.map((dest) => ({
    ...dest,
    category: ['leh', 'nubra-valley', 'pangong-lake'].includes(dest.id) ? 'Ladakh' : 'Kashmir'
  }));

  return (
    <>
      <SEO 
        title="Destinations - Kashmir & Ladakh | Serene Valley Tours"
        description="Explore top destinations in Kashmir including Gulmarg, Pahalgam, Sonamarg, and Srinagar. Discover beautiful landscapes and plan your perfect trip."
        keywords="Kashmir destinations, Gulmarg, Pahalgam, Sonamarg, Srinagar, Kashmir places to visit"
        url="https://serenevalleytours.com/destinations"
      />
      <Box sx={{ bgcolor: '#FFFFFF' }}>
        <PageHero
          subtitle="Beautiful Places"
          title="Top Destinations"
          description="Explore top destinations in Kashmir including Gulmarg, Pahalgam, Sonamarg, and Srinagar. Discover beautiful landscapes and plan your perfect trip."
          image="/images/gulmarg2.webp"
          ariaLabel="Top destinations in Kashmir and Ladakh"
        />

        <Container component="section" sx={{ py: { xs: 8, md: 12 }, px: { xs: 2, sm: 3 } }}>
          <SectionHeader
            subtitle="Beautiful Places"
            title="Top Destinations"
            description="Explore top destinations in Kashmir including Gulmarg, Pahalgam, Sonamarg, and Srinagar. Discover beautiful landscapes and plan your perfect trip."
          />

          <Grid container spacing={4}>
            {destinationsWithCategory.map((destination) => (
              <Grid item xs={12} md={4} key={destination.id}>
                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <Box sx={{ position: 'relative', overflow: 'hidden' }}>
                    <CardMedia
                      component="img"
                      height="280"
                      image={destination.bannerImage}
                      alt={destination.name}
                      sx={{ height: 280, objectFit: 'cover', transition: 'transform 0.3s', '&:hover': { transform: 'scale(1.05)' } }}
                      loading="lazy"
                    />
                    <Chip label={destination.category} size="small" sx={{ position: 'absolute', top: 16, left: 16 }} />
                  </Box>
                  <CardContent sx={{ flexGrow: 1, p: 3 }}>
                    <Typography variant="h3" sx={{ fontSize: '1.375rem', fontWeight: 'bold', mb: 1, color: '#123E49' }}>
                      {destination.name}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'primary.main', fontWeight: 600, mb: 1.5 }}>
                      {destination.tagline}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 2, overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', lineHeight: 1.6 }}>
                      {destination.description}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Best Time: {destination.bestTime}
                    </Typography>
                  </CardContent>
                  <CardActions sx={{ p: 3, pt: 0 }}>
                    <Button component={Link} to={`/destinations/${destination.id}`} variant="contained" fullWidth size="large" sx={{ py: 1.5 }} aria-label={`View details for ${destination.name}`}>
                      View Details
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


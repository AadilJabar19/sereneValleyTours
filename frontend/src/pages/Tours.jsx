import { Link } from 'react-router-dom';
import { Box, Container, Typography, Grid, Card, CardMedia, CardContent, CardActions, Button, Chip } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { tours } from '../data/tours';
import SEO from '../components/SEO';
import PageHero from '../components/PageHero';
import SectionHeader from '../components/SectionHeader';

const Tours = () => {
  return (
    <>
      <SEO 
        title="All Tours - Kashmir & Ladakh Packages | Serene Valley Tours"
        description="Browse all our Kashmir and Ladakh tour packages. Find the perfect adventure for your vacation with customizable itineraries and best prices."
        keywords="all tours, Kashmir packages, Ladakh tours, tour packages, vacation packages, travel Kashmir Ladakh"
        url="https://serenevalleytours.com/tours"
      />
      <Box sx={{ bgcolor: '#FFFFFF' }}>
        <PageHero
          subtitle="Find Your Adventure"
          title="Top Tours"
          description="Browse all our Kashmir and Ladakh tour packages. Find the perfect adventure for your vacation with customizable itineraries and best prices."
          image="/images/srinagar7.webp"
          ariaLabel="Tour packages in Kashmir and Ladakh"
        />

        <Container component="section" sx={{ py: { xs: 8, md: 12 }, px: { xs: 2, sm: 3 } }}>
          <SectionHeader
            subtitle="Find Your Adventure"
            title="Top Tours"
            description="Browse all our Kashmir and Ladakh tour packages. Find the perfect adventure for your vacation with customizable itineraries and best prices."
          />

          <Grid container spacing={4}>
            {tours.map((tour) => (
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
                    <Typography variant="h3" sx={{ fontSize: '1.375rem', fontWeight: 'bold', mb: 1.5, color: '#123E49' }}>
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
      </Box>
    </>
  );
};

export default Tours;


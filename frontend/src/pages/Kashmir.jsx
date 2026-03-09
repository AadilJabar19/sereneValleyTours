import { Link } from 'react-router-dom';
import { Box, Container, Typography, Grid, Card, CardContent, Button, CardMedia, CardActions, Chip } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { kashmirContent } from '../data/tourContent';
import { tours } from '../data/tours';
import SEO from '../components/SEO';
import SectionHeader from '../components/SectionHeader';
import PageHero from '../components/PageHero';

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
      <Box sx={{ bgcolor: '#FFFFFF' }}>
        <PageHero
          subtitle="Kashmir Tours"
          title={kashmirContent.heading}
          description={kashmirContent.description}
          image="/images/kashmir.webp"
          ariaLabel="Kashmir Dal Lake with houseboats"
        />

        {/* Popular Tours */}
        <Container component="section" sx={{ py: { xs: 8, md: 12 } }}>
          <SectionHeader
            subtitle="Best Packages"
            title="Popular Tours"
            description="Discover our most booked and highly-rated tours across Kashmir's most beautiful locations."
          />

          <Grid container spacing={4}>
            {kashmirTours.map((tour) => (
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

        {/* Kashmir Tourism Section */}
        <Box component="section" sx={{ bgcolor: '#FAFCFD', py: { xs: 8, md: 12 } }}>
          <Container>
            <SectionHeader
              subtitle="Paradise on Earth"
              title={kashmirContent.subHeading}
              description="Explore the Paradise on Earth with Serene Valley Tours"
            />

            <Grid container spacing={4}>
              {kashmirContent.features.map((feature, index) => (
                <Grid item xs={12} md={4} key={index}>
                  <Card sx={{ height: '100%', p: 1 }}>
                    <CardContent sx={{ p: 4 }}>
                      <Typography variant="h3" sx={{ fontSize: '1.5rem', fontWeight: 'bold', mb: 3, color: 'primary.main' }}>
                        {feature.title}
                      </Typography>
                      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                        {feature.items.map((item, i) => (
                          <Typography key={i} variant="body1" color="text.secondary" sx={{ fontSize: '1rem', lineHeight: 1.7 }}>
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


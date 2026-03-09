import { Link } from 'react-router-dom';
import { Box, Container, Typography, Grid, Card, CardContent, Button, CardMedia, CardActions, Chip } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { adventureContent } from '../data/tourContent';
import { tours } from '../data/tours';
import SEO from '../components/SEO';
import SectionHeader from '../components/SectionHeader';
import PageHero from '../components/PageHero';

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
      <Box sx={{ bgcolor: '#FFFFFF' }}>
        <PageHero
          subtitle="Adventure Tours"
          title={adventureContent.heading}
          description={adventureContent.description}
          image="/images/trekking.webp"
          ariaLabel="Mountain trekking adventure"
        />

        {/* Popular Tours */}
        <Container component="section" sx={{ py: { xs: 8, md: 12 } }}>
          <SectionHeader
            subtitle="Thrilling Experiences"
            title="Adventure Tours"
            description="Browse our most loved trekking and adventure tours across Kashmir and Ladakh."
          />

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

        {/* Adventure Activities Section */}
        <Box component="section" sx={{ bgcolor: '#FAFCFD', py: { xs: 8, md: 12 } }}>
          <Container>
            <SectionHeader
              subtitle="Outdoor Activities"
              title={adventureContent.subHeading}
              description="From skiing in Gulmarg to trekking Himalayan trails"
            />

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


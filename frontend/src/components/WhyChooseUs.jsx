import { Box, Container, Typography, Grid, Card, CardContent } from '@mui/material';
import LocalPoliceIcon from '@mui/icons-material/LocalPolice';
import NatureIcon from '@mui/icons-material/Nature';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import PersonIcon from '@mui/icons-material/Person';
import VerifiedIcon from '@mui/icons-material/Verified';

const WhyChooseUs = () => {
  const features = [
    {
      icon: <PersonIcon sx={{ fontSize: 48, color: 'primary.main' }} />,
      title: 'Expert Local Guides',
      description: 'Native guides with deep knowledge of Kashmir & Ladakh culture, history, and hidden gems.',
    },
    {
      icon: <NatureIcon sx={{ fontSize: 48, color: 'primary.main' }} />,
      title: 'Eco-Friendly Travel',
      description: 'Committed to sustainable tourism practices that preserve the natural beauty of the Himalayas.',
    },
    {
      icon: <LocalPoliceIcon sx={{ fontSize: 48, color: 'primary.main' }} />,
      title: 'Safe & Reliable',
      description: 'Licensed tour operator with comprehensive safety measures and 24/7 emergency support.',
    },
    {
      icon: <SupportAgentIcon sx={{ fontSize: 48, color: 'primary.main' }} />,
      title: '24/7 Support',
      description: 'Round-the-clock customer service before, during, and after your journey.',
    },
    {
      icon: <VerifiedIcon sx={{ fontSize: 48, color: 'primary.main' }} />,
      title: 'Personalized Itineraries',
      description: 'Customizable tour packages tailored to your preferences, budget, and travel style.',
    },
  ];

  return (
    <Box component="section" sx={{ bgcolor: 'background.default', py: { xs: 8, md: 12 } }}>
      <Container>
        <Box className="text-center mb-12">
          <Typography 
            variant="h2" 
            className="font-bold mb-4" 
            sx={{ fontSize: { xs: '2rem', md: '2.5rem' } }}
          >
            Why Choose Serene Valley Tours?
          </Typography>
          <Typography 
            variant="body1" 
            color="text.secondary" 
            sx={{ fontSize: '1.125rem', maxWidth: '700px', mx: 'auto' }}
          >
            Your trusted partner for unforgettable Kashmir and Ladakh adventures
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card 
                className="h-full transition-all duration-300 hover:shadow-xl"
                sx={{ 
                  textAlign: 'center',
                  '&:hover': { transform: 'translateY(-8px)' }
                }}
              >
                <CardContent sx={{ p: 4 }}>
                  <Box className="mb-3" aria-hidden="true">
                    {feature.icon}
                  </Box>
                  <Typography 
                    variant="h3" 
                    className="font-bold mb-2" 
                    sx={{ fontSize: '1.25rem' }}
                  >
                    {feature.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {feature.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Trust Badges */}
        <Box className="text-center mt-8">
          <Typography variant="body2" color="text.secondary" className="mb-3">
            🏆 Registered Tour Operator | ✓ Sustainable Tourism Certified | ⭐ 500+ Happy Travelers
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default WhyChooseUs;

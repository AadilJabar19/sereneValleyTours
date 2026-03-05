import { Box, Container, Grid, Typography } from '@mui/material';
import GroupsIcon from '@mui/icons-material/Groups';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';

const TrustStats = () => {
  const stats = [
    {
      number: '500+',
      label: 'Happy Travelers',
    },
    {
      number: '5+',
      label: 'Years Experience',
    },
    {
      number: '50+',
      label: 'Destinations',
    },
    {
      number: '24/7',
      label: 'Support',
    },
  ];

  return (
    <Box component="section" sx={{ py: { xs: 8, md: 12 } }}>
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
            Our Achievements
          </Typography>
          <Typography 
            variant="h2" 
            sx={{ fontSize: { xs: '2rem', md: '2.75rem' }, fontWeight: 'bold', color: '#2C3E50' }}
          >
            Why Choose Us
          </Typography>
        </Box>
        <Grid container spacing={4}>
          {stats.map((stat, index) => (
            <Grid item xs={6} md={3} key={index}>
              <Box 
                sx={{ 
                  textAlign: 'center',
                  p: 4,
                  borderRadius: '50%',
                  width: { xs: '160px', md: '200px' },
                  height: { xs: '160px', md: '200px' },
                  mx: 'auto',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  bgcolor: '#E0F7F8',
                  border: '3px solid',
                  borderColor: 'primary.main',
                  transition: 'all 0.3s',
                  '&:hover': {
                    transform: 'scale(1.05)',
                    boxShadow: '0 8px 30px rgba(28, 168, 175, 0.2)'
                  }
                }}
              >
                <Typography 
                  variant="h3" 
                  sx={{ 
                    fontSize: { xs: '2.5rem', md: '3rem' }, 
                    fontWeight: 'bold',
                    color: 'primary.main',
                    mb: 0.5
                  }}
                >
                  {stat.number}
                </Typography>
                <Typography 
                  variant="body1" 
                  sx={{ 
                    fontSize: { xs: '0.875rem', md: '1rem' }, 
                    fontWeight: 600,
                    color: '#2C3E50'
                  }}
                >
                  {stat.label}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default TrustStats;

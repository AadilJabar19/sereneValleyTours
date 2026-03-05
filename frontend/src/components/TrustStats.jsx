import { Box, Container, Grid, Typography } from '@mui/material';
import GroupsIcon from '@mui/icons-material/Groups';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';

const TrustStats = () => {
  const stats = [
    {
      icon: <GroupsIcon sx={{ fontSize: 48 }} />,
      number: '500+',
      label: 'Happy Travelers',
    },
    {
      icon: <CalendarMonthIcon sx={{ fontSize: 48 }} />,
      number: '5+',
      label: 'Years Experience',
    },
    {
      icon: <LocationOnIcon sx={{ fontSize: 48 }} />,
      number: '50+',
      label: 'Destinations',
    },
    {
      icon: <SupportAgentIcon sx={{ fontSize: 48 }} />,
      number: '24/7',
      label: 'Customer Support',
    },
  ];

  return (
    <Box component="section" sx={{ bgcolor: 'primary.main', color: 'white', py: { xs: 6, md: 8 } }}>
      <Container>
        <Grid container spacing={4}>
          {stats.map((stat, index) => (
            <Grid item xs={6} md={3} key={index}>
              <Box sx={{ textAlign: 'center' }}>
                <Box sx={{ mb: 1, color: 'white', opacity: 0.9 }} aria-hidden="true">
                  {stat.icon}
                </Box>
                <Typography 
                  variant="h3" 
                  sx={{ fontSize: { xs: '2rem', md: '2.5rem' }, fontWeight: 'bold', mb: 0.5 }}
                >
                  {stat.number}
                </Typography>
                <Typography 
                  variant="body1" 
                  sx={{ fontSize: { xs: '0.875rem', md: '1rem' }, opacity: 0.9 }}
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

import { Link } from 'react-router-dom';
import { Box, Container, Typography, Button, Card, CardContent } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import SEO from '../components/SEO';

const ThankYou = () => {
  const whatsappNumber = '917006601277';
  const whatsappMessage = encodeURIComponent('Following up on my inquiry about Kashmir/Ladakh tours');

  return (
    <>
      <SEO 
        title="Thank You - Serene Valley Tours"
        description="Thank you for contacting Serene Valley Tours. We'll get back to you soon!"
        url="https://serenevalleytours.com/thank-you"
      />
      
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          py: 10,
          px: 2,
          bgcolor: '#FFFFFF',
          background: 'linear-gradient(180deg, #FAFCFD 0%, #FFFFFF 70%)',
        }}
      >
        <Container maxWidth="md">
          <Card sx={{ textAlign: 'center' }}>
            <CardContent sx={{ p: { xs: 4, md: 5 } }}>
              <CheckCircleIcon 
                sx={{ fontSize: 80, color: 'primary.main', mb: 3 }} 
                aria-hidden="true"
              />
              
              <Typography variant="h1" sx={{ fontSize: { xs: '2rem', md: '2.5rem' }, fontWeight: 700, mb: 2, color: '#123E49' }}>
                Thank You for Your Inquiry!
              </Typography>
              
              <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.125rem', mb: 3 }}>
                We've received your message and our team will contact you within 24 hours.
                <br />
                Check your email for confirmation.
              </Typography>

              <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 2, justifyContent: 'center', mb: 3 }}>
                <Button
                  variant="contained"
                  size="large"
                  startIcon={<WhatsAppIcon />}
                  href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ bgcolor: '#25D366', '&:hover': { bgcolor: '#20BA5A' } }}
                >
                  Chat on WhatsApp
                </Button>

                <Button
                  component={Link}
                  to="/tours"
                  variant="outlined"
                  size="large"
                  color="primary"
                >
                  Browse Tours
                </Button>
              </Box>

              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                Need immediate assistance? Call us at{' '}
                <a href="tel:+917006601277" style={{ color: '#1CA8AF', fontWeight: 600, textDecoration: 'none' }}>
                  +91 7006601277
                </a>
              </Typography>

              <Button
                component={Link}
                to="/"
                variant="text"
                color="primary"
              >
                ← Back to Home
              </Button>
            </CardContent>
          </Card>
        </Container>
      </Box>
    </>
  );
};

export default ThankYou;


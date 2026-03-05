import { Link } from 'react-router-dom';
import { Box, Container, Typography, Button, Card, CardContent } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import DownloadIcon from '@mui/icons-material/Download';
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
      
      <Box className="min-h-screen flex items-center justify-center bg-background-light py-12">
        <Container maxWidth="md">
          <Card className="text-center">
            <CardContent className="p-8">
              <CheckCircleIcon 
                sx={{ fontSize: 80, color: 'primary.main', mb: 3 }} 
                aria-hidden="true"
              />
              
              <Typography variant="h1" className="font-bold mb-4" sx={{ fontSize: { xs: '2rem', md: '2.5rem' } }}>
                Thank You for Your Inquiry!
              </Typography>
              
              <Typography variant="body1" color="text.secondary" className="mb-6" sx={{ fontSize: '1.125rem' }}>
                We've received your message and our team will contact you within 24 hours.
                <br />
                Check your email for confirmation.
              </Typography>

              <Box className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
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
                  variant="outlined"
                  size="large"
                  startIcon={<DownloadIcon />}
                  href="/brochure.pdf"
                  download
                  color="primary"
                >
                  Download Brochure
                </Button>
              </Box>

              <Typography variant="body2" color="text.secondary" className="mb-4">
                Need immediate assistance? Call us at{' '}
                <a href="tel:+917006601277" className="text-primary-main font-semibold no-underline">
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

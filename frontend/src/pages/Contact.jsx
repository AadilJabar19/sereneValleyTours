import { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  Card,
  CardContent,
  Alert,
} from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { sendContactEmail } from '../services/emailService';
import SEO from '../components/SEO';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    try {
      await sendContactEmail(formData);
      setSuccess(true);
      setFormData({ name: '', email: '', phone: '', message: '' });
      setTimeout(() => setSuccess(false), 5000);
    } catch (err) {
      setError('Failed to send message. Please try calling or WhatsApp instead.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <SEO 
        title="Contact Us - Serene Valley Tours"
        description="Get in touch with Serene Valley Tours for Kashmir and Ladakh tour bookings. Call us at +91 7006327776, +91 7006601277 or email serenevalleytours@gmail.com"
        keywords="contact, book tour, Kashmir tour booking, Ladakh tour booking, travel agency contact"
        url="https://serenevalleytours.com/contact"
      />
      <Box>
        {/* Header */}
        <Box component="header" className="bg-primary-main text-white py-16">
          <Container>
            <Typography variant="h1" className="font-bold mb-4" sx={{ fontSize: { xs: '2rem', md: '2.5rem' } }}>
              Contact Us
            </Typography>
            <Typography variant="h2" sx={{ fontSize: { xs: '1.25rem', md: '1.5rem' }, fontWeight: 400 }}>
              Get in touch with us for any queries or bookings
            </Typography>
          </Container>
        </Box>

        <Container component="section" className="py-16">
          <Grid container spacing={4}>
            {/* Contact Form */}
            <Grid item xs={12} md={7}>
              <Card>
                <CardContent className="p-6">
                  <Typography variant="h2" className="font-bold mb-4" sx={{ fontSize: '1.5rem' }}>
                    Send us a Message
                  </Typography>

                  {success && (
                    <Alert severity="success" className="mb-4">
                      Message sent successfully! We'll get back to you soon.
                    </Alert>
                  )}

                  {error && (
                    <Alert severity="error" className="mb-4">
                      {error}
                    </Alert>
                  )}

                  <form onSubmit={handleSubmit}>
                    <TextField
                      fullWidth
                      label="Name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      required
                      margin="normal"
                      inputProps={{ 'aria-label': 'Your name' }}
                    />

                    <TextField
                      fullWidth
                      label="Email"
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      required
                      margin="normal"
                      inputProps={{ 'aria-label': 'Your email address' }}
                    />

                    <TextField
                      fullWidth
                      label="Phone"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      margin="normal"
                      inputProps={{ 'aria-label': 'Your phone number' }}
                    />

                    <TextField
                      fullWidth
                      label="Message"
                      multiline
                      rows={5}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      required
                      margin="normal"
                      inputProps={{ 'aria-label': 'Your message' }}
                    />

                    <Button
                      type="submit"
                      variant="contained"
                      size="large"
                      fullWidth
                      className="mt-4"
                      disabled={loading}
                    >
                      {loading ? 'Sending...' : 'Send Message'}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </Grid>

            {/* Contact Info */}
            <Grid item xs={12} md={5}>
              <Card className="mb-4">
                <CardContent>
                  <Typography variant="h2" className="font-bold mb-4" sx={{ fontSize: '1.5rem' }}>
                    Contact Information
                  </Typography>

                  <Box className="flex items-start gap-3 mb-4">
                    <LocationOnIcon className="text-primary-main mt-1" aria-hidden="true" />
                    <Box>
                      <Typography variant="body1" className="font-medium">
                        Address
                      </Typography>
                      <Typography variant="body2" className="text-gray-600">
                        Bemina, Srinagar
                        <br />
                        Jammu & Kashmir
                      </Typography>
                    </Box>
                  </Box>

                  <Box className="flex items-start gap-3 mb-4">
                    <PhoneIcon className="text-primary-main mt-1" aria-hidden="true" />
                    <Box>
                      <Typography variant="body1" className="font-medium">
                        Phone
                      </Typography>
                      <Box className="flex flex-col gap-1">
                        <a href="tel:+917006327776" className="text-gray-600 hover:text-primary-main no-underline text-sm">
                          +91 7006327776
                        </a>
                        <a href="tel:+917006601277" className="text-gray-600 hover:text-primary-main no-underline text-sm">
                          +91 7006601277
                        </a>
                      </Box>
                    </Box>
                  </Box>

                  <Box className="flex items-start gap-3">
                    <EmailIcon className="text-primary-main mt-1" aria-hidden="true" />
                    <Box>
                      <Typography variant="body1" className="font-medium">
                        Email
                      </Typography>
                      <Typography variant="body2" className="text-gray-600">
                        <a href="mailto:serenevalleytours@gmail.com" className="text-gray-600 hover:text-primary-main no-underline">
                          serenevalleytours@gmail.com
                        </a>
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>

              <Card>
                <CardContent>
                  <Typography variant="h3" className="font-bold mb-3" sx={{ fontSize: '1.25rem' }}>
                    Business Hours
                  </Typography>
                  <Typography variant="body2" className="text-gray-600">
                    Monday - Saturday: 9:00 AM - 6:00 PM
                    <br />
                    Sunday: Closed
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Contact;

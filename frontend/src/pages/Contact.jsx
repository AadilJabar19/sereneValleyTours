import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  Card,
  CardContent,
  Snackbar,
  Alert,
  MenuItem,
} from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { sendContactEmail } from '../services/emailService';
import SEO from '../components/SEO';

const Contact = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });
  const [loading, setLoading] = useState(false);

  const tourOptions = [
    'Kashmir Tour',
    'Ladakh Tour',
    'Group Tour',
    'Solo Adventure',
    'Honeymoon Package',
    'Custom Itinerary',
  ];

  const onSubmit = async (data) => {
    setLoading(true);
    
    try {
      await sendContactEmail(data);
      setSnackbar({ 
        open: true, 
        message: "Inquiry Sent! We'll contact you soon.", 
        severity: 'success' 
      });
      reset();
      setTimeout(() => navigate('/thank-you'), 2000);
    } catch (err) {
      setSnackbar({ 
        open: true, 
        message: 'Failed to send. Please try WhatsApp or call us.', 
        severity: 'error' 
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <SEO 
        title="Contact Us - Serene Valley Tours"
        description="Get in touch with Serene Valley Tours for Kashmir and Ladakh tour bookings. Call us at +91 7006601277, +91 7006327776 or email serenevalleytours@gmail.com"
        keywords="contact, book tour, Kashmir tour booking, Ladakh tour booking, travel agency contact"
        url="https://serenevalleytours.com/contact"
      />
      <Box>
        {/* Header */}
        <Box component="header" sx={{ bgcolor: '#F0F9FA', py: 10 }}>
          <Container>
            <Box sx={{ textAlign: 'center' }}>
              <Typography 
                sx={{ 
                  fontFamily: 'Pacifico, cursive', 
                  fontSize: { xs: '1.5rem', md: '2rem' }, 
                  color: 'primary.main',
                  mb: 1
                }}
              >
                Get In Touch
              </Typography>
              <Typography variant="h1" sx={{ fontSize: { xs: '2rem', md: '2.75rem' }, fontWeight: 'bold', mb: 2, color: '#2C3E50' }}>
                Contact Us
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ fontSize: { xs: '1rem', md: '1.125rem' }, maxWidth: '600px', mx: 'auto' }}>
                Get in touch with us for any queries or bookings
              </Typography>
            </Box>
          </Container>
        </Box>

        <Container component="section" sx={{ py: 8 }}>
          <Grid container spacing={4}>
            {/* Contact Form */}
            <Grid item xs={12} md={7}>
              <Card sx={{ p: 1 }}>
                <CardContent sx={{ p: 4 }}>
                  <Typography variant="h2" sx={{ fontSize: '1.75rem', fontWeight: 'bold', mb: 3, color: '#2C3E50' }}>
                    Send us a Message
                  </Typography>

                  <form onSubmit={handleSubmit(onSubmit)}>
                    <TextField
                      fullWidth
                      label="Name"
                      {...register('name', { required: 'Name is required' })}
                      error={!!errors.name}
                      helperText={errors.name?.message}
                      margin="normal"
                      inputProps={{ 'aria-label': 'Your name' }}
                    />

                    <TextField
                      fullWidth
                      label="Email"
                      type="email"
                      {...register('email', { 
                        required: 'Email is required',
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'Invalid email address'
                        }
                      })}
                      error={!!errors.email}
                      helperText={errors.email?.message}
                      margin="normal"
                      inputProps={{ 'aria-label': 'Your email address' }}
                    />

                    <TextField
                      fullWidth
                      label="Phone"
                      {...register('phone', { 
                        required: 'Phone is required',
                        pattern: {
                          value: /^[0-9]{10}$/,
                          message: 'Enter valid 10-digit phone number'
                        }
                      })}
                      error={!!errors.phone}
                      helperText={errors.phone?.message}
                      margin="normal"
                      inputProps={{ 'aria-label': 'Your phone number' }}
                    />

                    <TextField
                      fullWidth
                      select
                      label="Interested In"
                      defaultValue=""
                      {...register('interestedIn', { required: 'Please select an option' })}
                      error={!!errors.interestedIn}
                      helperText={errors.interestedIn?.message}
                      margin="normal"
                    >
                      {tourOptions.map((option) => (
                        <MenuItem key={option} value={option}>
                          {option}
                        </MenuItem>
                      ))}
                    </TextField>

                    <TextField
                      fullWidth
                      label="Travel Date"
                      type="date"
                      InputLabelProps={{ shrink: true }}
                      {...register('travelDate', { required: 'Travel date is required' })}
                      error={!!errors.travelDate}
                      helperText={errors.travelDate?.message}
                      margin="normal"
                      inputProps={{ 'aria-label': 'Preferred travel date', min: new Date().toISOString().split('T')[0] }}
                    />

                    <TextField
                      fullWidth
                      label="Number of Travelers"
                      type="number"
                      {...register('numberOfTravelers', { 
                        required: 'Number of travelers is required',
                        min: { value: 1, message: 'At least 1 traveler required' },
                        max: { value: 50, message: 'Maximum 50 travelers allowed' }
                      })}
                      error={!!errors.numberOfTravelers}
                      helperText={errors.numberOfTravelers?.message}
                      margin="normal"
                      inputProps={{ 'aria-label': 'Number of travelers', min: 1, max: 50 }}
                    />

                    <TextField
                      fullWidth
                      label="Message"
                      multiline
                      rows={5}
                      {...register('message', { required: 'Message is required' })}
                      error={!!errors.message}
                      helperText={errors.message?.message}
                      margin="normal"
                      inputProps={{ 'aria-label': 'Your message' }}
                    />

                    <Button
                      type="submit"
                      variant="contained"
                      size="large"
                      fullWidth
                      sx={{ mt: 3, py: 1.5 }}
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
              <Card sx={{ mb: 3, p: 1 }}>
                <CardContent sx={{ p: 3 }}>
                  <Typography variant="h2" sx={{ fontSize: '1.75rem', fontWeight: 'bold', mb: 3, color: '#2C3E50' }}>
                    Contact Information
                  </Typography>

                  <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5, mb: 3 }}>
                    <LocationOnIcon sx={{ color: 'primary.main', mt: 0.5, fontSize: '1.5rem' }} aria-hidden="true" />
                    <Box>
                      <Typography variant="body1" sx={{ fontWeight: 600, mb: 0.5, color: '#2C3E50' }}>
                        Address
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.6 }}>
                        Bemina, Srinagar
                        <br />
                        Jammu & Kashmir
                      </Typography>
                    </Box>
                  </Box>

                  <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5, mb: 3 }}>
                    <PhoneIcon sx={{ color: 'primary.main', mt: 0.5, fontSize: '1.5rem' }} aria-hidden="true" />
                    <Box>
                      <Typography variant="body1" sx={{ fontWeight: 600, mb: 0.5, color: '#2C3E50' }}>
                        Phone
                      </Typography>
                      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
                        <a href="tel:+917006601277" style={{ color: '#7F8C8D', textDecoration: 'none', fontSize: '0.875rem' }}>
                          +91 7006601277
                        </a>
                        <a href="tel:+917006327776" style={{ color: '#7F8C8D', textDecoration: 'none', fontSize: '0.875rem' }}>
                          +91 7006327776
                        </a>
                      </Box>
                    </Box>
                  </Box>

                  <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5 }}>
                    <EmailIcon sx={{ color: 'primary.main', mt: 0.5, fontSize: '1.5rem' }} aria-hidden="true" />
                    <Box>
                      <Typography variant="body1" sx={{ fontWeight: 600, mb: 0.5, color: '#2C3E50' }}>
                        Email
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        <a href="mailto:serenevalleytours@gmail.com" style={{ color: '#7F8C8D', textDecoration: 'none' }}>
                          serenevalleytours@gmail.com
                        </a>
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>

              <Card sx={{ p: 1 }}>
                <CardContent sx={{ p: 3 }}>
                  <Typography variant="h3" sx={{ fontSize: '1.25rem', fontWeight: 'bold', mb: 2, color: '#2C3E50' }}>
                    Business Hours
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
                    Monday - Saturday: 9:00 AM - 6:00 PM
                    <br />
                    Sunday: Closed
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>

        <Snackbar 
          open={snackbar.open} 
          autoHideDuration={6000} 
          onClose={() => setSnackbar({ ...snackbar, open: false })}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        >
          <Alert severity={snackbar.severity} sx={{ width: '100%' }}>
            {snackbar.message}
          </Alert>
        </Snackbar>
      </Box>
    </>
  );
};

export default Contact;

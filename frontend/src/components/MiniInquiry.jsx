import { useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  Box,
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  Snackbar,
  Alert,
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { sendContactEmail } from '../services/emailService';

const MiniInquiry = ({ tourName }) => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    setLoading(true);
    
    const emailData = {
      ...data,
      interestedIn: tourName || 'Tour Inquiry',
      message: `Quick Inquiry - Travel Date: ${data.travelDate}, People: ${data.people}`,
    };

    try {
      await sendContactEmail(emailData);
      setSnackbar({ 
        open: true, 
        message: "Inquiry sent! We'll contact you soon.", 
        severity: 'success' 
      });
      reset();
    } catch (err) {
      setSnackbar({ 
        open: true, 
        message: 'Failed to send. Please call us.', 
        severity: 'error' 
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Card 
        sx={{ 
          position: { xs: 'fixed', md: 'sticky' },
          bottom: { xs: 0, md: 'auto' },
          top: { md: 100 },
          left: { xs: 0, md: 'auto' },
          right: { xs: 0, md: 'auto' },
          zIndex: 100,
          boxShadow: 3,
          borderRadius: { xs: '16px 16px 0 0', md: 2 },
        }}
      >
        <CardContent sx={{ p: { xs: 2, md: 3 } }}>
          <Typography variant="h3" className="font-bold mb-3" sx={{ fontSize: '1.25rem' }}>
            Quick Inquiry
          </Typography>

          <form onSubmit={handleSubmit(onSubmit)}>
            <TextField
              fullWidth
              size="small"
              label="Name"
              {...register('name', { required: 'Name required' })}
              error={!!errors.name}
              helperText={errors.name?.message}
              margin="dense"
            />

            <TextField
              fullWidth
              size="small"
              label="Phone"
              {...register('phone', { 
                required: 'Phone required',
                pattern: {
                  value: /^[0-9]{10}$/,
                  message: '10-digit number'
                }
              })}
              error={!!errors.phone}
              helperText={errors.phone?.message}
              margin="dense"
            />

            <TextField
              fullWidth
              size="small"
              label="Travel Date"
              placeholder="e.g., June 2026"
              {...register('travelDate', { required: 'Date required' })}
              error={!!errors.travelDate}
              helperText={errors.travelDate?.message}
              margin="dense"
            />

            <TextField
              fullWidth
              size="small"
              label="Number of People"
              type="number"
              {...register('people', { 
                required: 'Required',
                min: { value: 1, message: 'Min 1' }
              })}
              error={!!errors.people}
              helperText={errors.people?.message}
              margin="dense"
              inputProps={{ min: 1 }}
            />

            <Button
              type="submit"
              variant="contained"
              fullWidth
              size="large"
              endIcon={<SendIcon />}
              disabled={loading}
              sx={{ mt: 2 }}
            >
              {loading ? 'Sending...' : 'Send Inquiry'}
            </Button>
          </form>
        </CardContent>
      </Card>

      <Snackbar 
        open={snackbar.open} 
        autoHideDuration={4000} 
        onClose={() => setSnackbar({ ...snackbar, open: false })}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert severity={snackbar.severity} sx={{ width: '100%' }}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </>
  );
};

export default MiniInquiry;

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
  IconButton,
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { sendContactEmail } from '../services/emailService';

const MiniInquiry = ({ tourName, onClose, mode = 'sidebar' }) => {
  const isFloating = mode === 'floating';
  const noHtmlTags = (value) => !/[<>]/.test(value) || 'HTML/script tags are not allowed';
  const { register, handleSubmit, formState: { errors }, reset, setValue, watch } = useForm({
    defaultValues: { people: 1 }
  });
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });
  const [loading, setLoading] = useState(false);
  const people = watch('people', 1);

  const onSubmit = async (data) => {
    setLoading(true);
    
    const emailData = {
      ...data,
      interestedIn: tourName || 'Tour Inquiry',
      message: `Quick Inquiry - Travel Date: ${data.travelDate}, People: ${data.people}. ${data.message}`,
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
          position: isFloating ? 'fixed' : { xs: 'fixed', md: 'sticky' },
          bottom: isFloating ? { xs: 84, md: 96 } : { xs: 0, md: 'auto' },
          top: isFloating ? 'auto' : { md: 100 },
          left: isFloating ? { xs: 12, md: 'auto' } : { xs: 0, md: 'auto' },
          right: isFloating ? { xs: 12, md: 24 } : { xs: 0, md: 'auto' },
          width: isFloating ? { xs: 'auto', md: 390 } : 'auto',
          maxHeight: isFloating ? 'calc(100vh - 130px)' : 'none',
          overflowY: isFloating ? 'auto' : 'visible',
          zIndex: isFloating ? 1300 : 100,
          boxShadow: 3,
          borderRadius: isFloating ? '16px' : { xs: '16px 16px 0 0', md: 2 },
        }}
      >
        <CardContent sx={{ p: { xs: 2, md: 3 } }}>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 1.5 }}>
            <Typography variant="h3" sx={{ fontSize: '1.25rem', fontWeight: 'bold' }}>
              Quick Inquiry
            </Typography>
            <IconButton 
              onClick={onClose}
              size="small"
              sx={{ display: isFloating ? 'block' : { xs: 'block', md: 'none' } }}
              aria-label="Close inquiry form"
            >
              <CloseIcon />
            </IconButton>
          </Box>

          <form onSubmit={handleSubmit(onSubmit)}>
            <TextField
              fullWidth
              size="small"
              label="Name"
              {...register('name', { 
                required: 'Name required',
                pattern: {
                  value: /^[a-zA-Z\s]+$/,
                  message: 'Letters only'
                },
                validate: {
                  noOnlySpaces: (value) => value.trim().length > 0 || 'Name required',
                  noHtmlTags,
                }
              })}
              error={!!errors.name}
              helperText={errors.name?.message}
              margin="dense"
            />

            <TextField
              fullWidth
              size="small"
              label="Message"
              multiline
              rows={2}
              {...register('message', {
                required: 'Message required',
                validate: {
                  noOnlySpaces: (value) => value.trim().length > 0 || 'Message required',
                  noHtmlTags,
                }
              })}
              error={!!errors.message}
              helperText={errors.message?.message}
              margin="dense"
            />

            <TextField
              fullWidth
              size="small"
              label="Email"
              type="email"
              {...register('email', {
                required: 'Email required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Invalid email'
                }
              })}
              error={!!errors.email}
              helperText={errors.email?.message}
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
                },
                validate: value => /^[0-9]+$/.test(value) || 'Numbers only'
              })}
              error={!!errors.phone}
              helperText={errors.phone?.message}
              margin="dense"
              onKeyPress={(e) => {
                if (!/[0-9]/.test(e.key)) e.preventDefault();
              }}
            />

            <TextField
              fullWidth
              size="small"
              label="Travel Date"
              type="date"
              InputLabelProps={{ shrink: true }}
              {...register('travelDate', { required: 'Date required' })}
              error={!!errors.travelDate}
              helperText={errors.travelDate?.message}
              margin="dense"
              inputProps={{ min: new Date().toISOString().split('T')[0] }}
            />

            <Box sx={{ mt: 1, mb: 1 }}>
              <Typography variant="body2" sx={{ mb: 0.5, color: 'text.secondary' }}>
                Number of People
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <IconButton 
                  size="small"
                  onClick={() => setValue('people', Math.max(1, people - 1))}
                  disabled={people <= 1}
                  sx={{ border: '1px solid', borderColor: 'divider' }}
                >
                  <RemoveIcon fontSize="small" />
                </IconButton>
                <TextField
                  size="small"
                  type="number"
                  {...register('people', { 
                    required: 'Required',
                    validate: value => {
                      const num = Number(value);
                      if (!Number.isInteger(num)) return 'Whole number only';
                      if (num < 1) return 'Min 1';
                      if (num > 50) return 'Max 50';
                      return true;
                    }
                  })}
                  error={!!errors.people}
                  sx={{ width: '80px', '& input': { textAlign: 'center' } }}
                  inputProps={{ min: 1, max: 50, step: 1, readOnly: true }}
                />
                <IconButton 
                  size="small"
                  onClick={() => setValue('people', Math.min(50, people + 1))}
                  disabled={people >= 50}
                  sx={{ border: '1px solid', borderColor: 'divider' }}
                >
                  <AddIcon fontSize="small" />
                </IconButton>
              </Box>
              {errors.people && (
                <Typography variant="caption" color="error" sx={{ mt: 0.5, display: 'block' }}>
                  {errors.people.message}
                </Typography>
              )}
            </Box>

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

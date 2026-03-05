import { Box, CircularProgress } from '@mui/material';

const Loader = () => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
      <CircularProgress size={60} sx={{ color: '#1CA8AF' }} />
    </Box>
  );
};

export default Loader;

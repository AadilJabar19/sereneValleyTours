import { Box, CircularProgress } from '@mui/material';

const Loader = () => {
  return (
    <Box className="flex items-center justify-center min-h-screen">
      <CircularProgress size={60} sx={{ color: '#1CA8AF' }} />
    </Box>
  );
};

export default Loader;

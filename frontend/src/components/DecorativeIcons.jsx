import { Box } from '@mui/material';

// Decorative floating icons for visual interest
export const FloatingPlane = ({ sx }) => (
  <Box
    sx={{
      position: 'absolute',
      opacity: 0.1,
      pointerEvents: 'none',
      ...sx,
    }}
  >
    <svg width="80" height="80" viewBox="0 0 24 24" fill="currentColor">
      <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>
    </svg>
  </Box>
);

export const FloatingMountain = ({ sx }) => (
  <Box
    sx={{
      position: 'absolute',
      opacity: 0.08,
      pointerEvents: 'none',
      ...sx,
    }}
  >
    <svg width="120" height="120" viewBox="0 0 24 24" fill="currentColor">
      <path d="M14 6l-3.75 5 2.85 3.8-1.6 1.2C9.81 13.75 7 10 7 10l-6 8h22L14 6z"/>
    </svg>
  </Box>
);

export const FloatingPalmTree = ({ sx }) => (
  <Box
    sx={{
      position: 'absolute',
      opacity: 0.1,
      pointerEvents: 'none',
      ...sx,
    }}
  >
    <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C9.79 2 8 3.79 8 6c0 1.5.83 2.79 2.05 3.48L9 22h2l.7-7h.6l.7 7h2l-1.05-12.52C15.17 8.79 16 7.5 16 6c0-2.21-1.79-4-4-4z"/>
    </svg>
  </Box>
);

export const FloatingHotAirBalloon = ({ sx }) => (
  <Box
    sx={{
      position: 'absolute',
      opacity: 0.12,
      pointerEvents: 'none',
      animation: 'float 6s ease-in-out infinite',
      ...sx,
    }}
  >
    <svg width="100" height="100" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 3.87 3.13 7 7 7s7-3.13 7-7c0-3.87-3.13-7-7-7zm0 12c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm-1 2h2v6h-2z"/>
    </svg>
  </Box>
);

export const DecorativeWave = ({ sx }) => (
  <Box
    sx={{
      position: 'absolute',
      width: '100%',
      overflow: 'hidden',
      lineHeight: 0,
      ...sx,
    }}
  >
    <svg
      viewBox="0 0 1200 120"
      preserveAspectRatio="none"
      style={{ width: '100%', height: '100%' }}
    >
      <path
        d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
        fill="currentColor"
        opacity="0.1"
      />
    </svg>
  </Box>
);

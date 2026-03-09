import { Box, Typography } from '@mui/material';

const SectionHeader = ({ subtitle, title, description }) => {
  return (
    <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 7 } }}>
      <Typography
        sx={{
          fontFamily: 'Pacifico, cursive',
          fontSize: { xs: '1.5rem', md: '2rem' },
          color: '#134E58',
          mb: 0.6,
          lineHeight: 1.1,
        }}
      >
        {subtitle}
      </Typography>
      <Typography
        variant="h2"
        sx={{
          fontSize: { xs: '2.2rem', md: '3.2rem' },
          fontWeight: 700,
          mb: 2,
          color: '#123E49',
          letterSpacing: '-0.02em',
          lineHeight: 1.12,
        }}
      >
        {title}
      </Typography>
      {description ? (
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ fontSize: { xs: '1rem', md: '1.125rem' }, maxWidth: '700px', mx: 'auto' }}
        >
          {description}
        </Typography>
      ) : null}
    </Box>
  );
};

export default SectionHeader;

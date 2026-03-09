import { Box, Container, Typography } from '@mui/material';

const PageHero = ({ title, subtitle, description, image, ariaLabel, children, height, minHeight }) => {
  return (
    <Box
      component="section"
      sx={{
        position: 'relative',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        overflow: 'hidden',
        height: height || { xs: '58vh', sm: '64vh', md: '70vh' },
        minHeight: minHeight || { xs: 420, md: 520 },
        backgroundImage: `linear-gradient(90deg, rgba(7,22,31,0.74) 0%, rgba(7,22,31,0.56) 38%, rgba(7,22,31,0.3) 72%, rgba(7,22,31,0.22) 100%), url(${image})`,
      }}
      role="img"
      aria-label={ariaLabel}
    >
      <Container
        sx={{
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
          zIndex: 10,
          px: { xs: 2, sm: 3 },
        }}
      >
        <Box sx={{ color: 'white', maxWidth: { xs: '100%', md: '70%' } }}>
          {subtitle ? (
            <Typography
              sx={{
                fontFamily: 'Pacifico, cursive',
                fontSize: { xs: '1.8rem', md: '3rem' },
                color: 'white',
                mb: 0.2,
                lineHeight: 1.05,
              }}
            >
              {subtitle}
            </Typography>
          ) : null}
          <Typography
            variant="h1"
            sx={{
              color: 'white',
              fontSize: { xs: '2.4rem', md: '5rem' },
              fontWeight: 700,
              mb: 1.2,
              lineHeight: 1.05,
            }}
          >
            {title}
          </Typography>
          {description ? (
            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: '1.05rem', md: '1.35rem' },
                color: 'rgba(255,255,255,0.94)',
                maxWidth: 900,
              }}
            >
              {description}
            </Typography>
          ) : null}
          {children ? <Box sx={{ mt: 3 }}>{children}</Box> : null}
        </Box>
      </Container>
    </Box>
  );
};

export default PageHero;

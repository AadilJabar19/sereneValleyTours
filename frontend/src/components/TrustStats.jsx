import { Box, Container, Typography } from '@mui/material';
import SectionHeader from './SectionHeader';

const TrustStats = () => {
  const stats = [
    { value: '12', label: 'Years Experience', offset: { md: 64, lg: 92 }, dotTop: '80%' },
    { value: '97%', label: 'Retention Rate', offset: { md: -28, lg: -44 }, dotTop: '18%' },
    { value: '8K', label: 'Tour Completed', offset: { md: 64, lg: 92 }, dotTop: '78%' },
    { value: '19K', label: 'Happy Travellers', offset: { md: -28, lg: -34 }, dotTop: '20%' },
  ];

  return (
    <Box component="section" sx={{ bgcolor: 'transparent', py: { xs: 8, md: 11 }, overflow: 'hidden', position: 'relative' }}>
      <Box
        sx={{
          position: 'absolute',
          left: -120,
          top: -120,
          width: 380,
          height: 260,
          border: '2px solid rgba(120, 208, 222, 0.18)',
          borderRadius: '50%',
          pointerEvents: 'none',
        }}
      />
      <Box sx={{ position: 'absolute', left: { xs: 18, md: 140 }, top: { xs: 170, md: 205 }, color: '#2DB9CF', opacity: 0.8, fontSize: { xs: '1.2rem', md: '1.5rem' }, pointerEvents: 'none' }}>
        🎈
      </Box>
      <Box sx={{ position: 'absolute', left: { xs: 44, md: 188 }, top: { xs: 208, md: 250 }, color: '#2DB9CF', opacity: 0.95, fontSize: { xs: '2rem', md: '3.2rem' }, pointerEvents: 'none' }}>
        🎈
      </Box>
      <Box sx={{ position: 'absolute', right: { xs: 24, md: 170 }, top: { xs: 55, md: 72 }, color: '#2DB9CF', opacity: 0.9, fontSize: { xs: '2rem', md: '3rem' }, pointerEvents: 'none' }}>
        ⚓
      </Box>
      <Box sx={{ position: 'absolute', left: { xs: 22, md: 150 }, bottom: { xs: 32, md: 22 }, opacity: 0.95, fontSize: { xs: '2.2rem', md: '3rem' }, pointerEvents: 'none' }}>
        🌴
      </Box>

      <Container>
        <SectionHeader
          subtitle="Our Achievements"
          title="Why Choose Us"
          description=""
        />

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, minmax(240px, 1fr))', lg: 'repeat(4, minmax(210px, 1fr))' },
            justifyItems: 'center',
            alignItems: 'center',
            gap: { xs: 4, sm: 5, md: 3 },
          }}
        >
          {stats.map((item, index) => (
            <Box
              key={item.label}
              sx={{
                mt: { xs: 0, sm: index % 2 ? -1 : 1, lg: item.offset },
                position: 'relative',
              }}
            >
              <Box
                sx={{
                  width: { xs: 216, md: 252, lg: 286 },
                  height: { xs: 216, md: 252, lg: 286 },
                  borderRadius: '50%',
                  border: '2px solid #7ED0DE',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                  bgcolor: 'transparent',
                }}
              >
                <Box
                  sx={{
                    width: { xs: 186, md: 218, lg: 246 },
                    height: { xs: 186, md: 218, lg: 246 },
                    borderRadius: '50%',
                    bgcolor: '#E5F2F6',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    textAlign: 'center',
                    px: 2,
                  }}
                >
                  <Typography sx={{ fontSize: { xs: '2.4rem', md: '3rem' }, fontWeight: 700, color: '#111827', lineHeight: 1, mb: 0.5 }}>
                    {item.value}
                  </Typography>
                  <Typography sx={{ fontSize: { xs: '1rem', md: '1.08rem' }, color: '#1F2937', lineHeight: 1.18, maxWidth: '150px' }}>
                    {item.label}
                  </Typography>
                </Box>

                <Box
                  sx={{
                    position: 'absolute',
                    right: 7,
                    top: item.dotTop,
                    width: 12,
                    height: 12,
                    borderRadius: '50%',
                    bgcolor: '#19B6D1',
                    boxShadow: '0 0 0 3px rgba(25,182,209,0.18)',
                  }}
                />
              </Box>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default TrustStats;

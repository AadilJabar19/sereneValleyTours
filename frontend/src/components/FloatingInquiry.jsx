import { useState } from 'react';
import { Box, Fab } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import MiniInquiry from './MiniInquiry';

const FloatingInquiry = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {open && (
        <Box
          onClick={() => setOpen(false)}
          sx={{
            position: 'fixed',
            inset: 0,
            bgcolor: 'rgba(8, 26, 31, 0.35)',
            zIndex: 1200,
          }}
        />
      )}

      {open && <MiniInquiry tourName="Tour Inquiry" onClose={() => setOpen(false)} mode="floating" />}

      <Fab
        color="primary"
        aria-label="Open quick inquiry form"
        onClick={() => setOpen(true)}
        sx={{
          position: 'fixed',
          bottom: { xs: 84, md: 96 },
          right: { xs: 16, md: 24 },
          zIndex: 1100,
          boxShadow: '0 8px 24px rgba(28, 168, 175, 0.4)',
        }}
      >
        <EmailIcon />
      </Fab>
    </>
  );
};

export default FloatingInquiry;

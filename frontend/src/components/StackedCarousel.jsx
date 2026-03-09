import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Box, Container, Typography, Chip, Button } from '@mui/material';

const StackedCarousel = ({
  title,
  subtitle,
  items,
  categories,
  linkPrefix = '/tours',
  ctaLabel,
  ctaTo
}) => {
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartRef = useRef({ x: null, y: null });
  const pointerStartRef = useRef({ x: null, y: null, pointerId: null });
  const wheelLockRef = useRef(0);

  const filteredItems = items.filter(
    (item) => activeCategory === 'All' || item.category === activeCategory
  );

  const total = filteredItems.length;
  const hasItems = total > 0;

  const handleCardKeyDown = (event, index) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      setCurrentIndex(index);
    }
  };

  const getCardPosition = (index) => {
    if (!hasItems) {
      return {
        translateX: '-50%',
        scale: 1,
        zIndex: 1,
        rotate: '0deg',
        opacity: 1,
        blur: '0px',
      };
    }

    const diff = index - currentIndex;
    const normalizedDiff = ((diff % total) + total) % total;

    if (normalizedDiff === 0) {
      return {
        translateX: '-50%',
        scale: 1,
        zIndex: 60,
        rotate: '0deg',
        opacity: 1,
        blur: '0px',
      };
    }

    if (normalizedDiff === 1) {
      return {
        translateX: '26%',
        scale: 0.9,
        zIndex: 45,
        rotate: '4deg',
        opacity: 0.95,
        blur: '1.4px',
      };
    }

    if (normalizedDiff === total - 1) {
      return {
        translateX: '-126%',
        scale: 0.9,
        zIndex: 45,
        rotate: '-4deg',
        opacity: 0.95,
        blur: '1.4px',
      };
    }

    if (normalizedDiff === 2) {
      return {
        translateX: '76%',
        scale: 0.82,
        zIndex: 30,
        rotate: '7deg',
        opacity: 0.7,
        blur: '3px',
      };
    }

    if (normalizedDiff === total - 2) {
      return {
        translateX: '-176%',
        scale: 0.82,
        zIndex: 30,
        rotate: '-7deg',
        opacity: 0.7,
        blur: '3px',
      };
    }

    return {
      translateX: '-50%',
      scale: 0.75,
      zIndex: 5,
      rotate: '0deg',
      opacity: 0,
      blur: '4px',
    };
  };

  const handleNext = () => {
    if (!hasItems) return;
    setCurrentIndex((prev) => (prev + 1) % total);
  };

  const handlePrev = () => {
    if (!hasItems) return;
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  };

  const handleTouchStart = (event) => {
    const firstTouch = event.touches?.[0];
    if (!firstTouch) return;
    touchStartRef.current = { x: firstTouch.clientX, y: firstTouch.clientY };
  };

  const handleTouchEnd = (event) => {
    const start = touchStartRef.current;
    const endTouch = event.changedTouches?.[0];
    touchStartRef.current = { x: null, y: null };

    if (!endTouch || start.x === null || start.y === null) return;

    const deltaX = endTouch.clientX - start.x;
    const deltaY = endTouch.clientY - start.y;
    const horizontalThreshold = 40;
    const verticalThreshold = 30;

    if (Math.abs(deltaX) < horizontalThreshold || Math.abs(deltaX) < Math.abs(deltaY) + verticalThreshold) {
      return;
    }

    if (deltaX < 0) {
      handleNext();
      return;
    }

    handlePrev();
  };

  const handlePointerDown = (event) => {
    if (event.pointerType === 'mouse' && event.button !== 0) return;
    pointerStartRef.current = {
      x: event.clientX,
      y: event.clientY,
      pointerId: event.pointerId,
    };
  };

  const handlePointerUp = (event) => {
    const start = pointerStartRef.current;
    pointerStartRef.current = { x: null, y: null, pointerId: null };

    if (start.x === null || start.y === null) return;
    if (start.pointerId !== null && event.pointerId !== start.pointerId) return;

    const deltaX = event.clientX - start.x;
    const deltaY = event.clientY - start.y;
    const horizontalThreshold = 40;
    const verticalThreshold = 30;

    if (Math.abs(deltaX) < horizontalThreshold || Math.abs(deltaX) < Math.abs(deltaY) + verticalThreshold) {
      return;
    }

    if (deltaX < 0) {
      handleNext();
      return;
    }

    handlePrev();
  };

  const handlePointerCancel = () => {
    pointerStartRef.current = { x: null, y: null, pointerId: null };
  };

  const handleWheel = (event) => {
    if (!hasItems) return;

    const isHorizontalIntent = Math.abs(event.deltaX) > 20 && Math.abs(event.deltaX) > Math.abs(event.deltaY);
    if (!isHorizontalIntent) return;

    const now = Date.now();
    if (now - wheelLockRef.current < 350) return;

    event.preventDefault();
    wheelLockRef.current = now;

    if (event.deltaX > 0) {
      handleNext();
      return;
    }

    handlePrev();
  };

  return (
    <Box sx={{ py: 0, bgcolor: 'transparent', overflow: 'hidden' }}>
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            alignItems: { xs: 'flex-start', md: 'flex-end' },
            justifyContent: 'space-between',
            gap: 3,
            flexDirection: { xs: 'column', md: 'row' },
            mb: 5,
          }}
        >
          <Box>
            <Typography
              sx={{
                fontFamily: 'Pacifico, cursive',
                fontSize: { xs: '1.5rem', md: '2rem' },
                color: '#3D8C95',
                mb: 0.5,
              }}
            >
              {subtitle}
            </Typography>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: '2.2rem', md: '3rem' },
                fontWeight: 700,
                color: '#123E49',
                letterSpacing: '-0.02em',
              }}
            >
              {title}
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
            {categories.map((cat) => (
              <Chip
                key={cat}
                label={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  setCurrentIndex(0);
                }}
                sx={{
                  height: 30,
                  px: 1.25,
                  borderRadius: '999px',
                  fontSize: '0.78rem',
                  fontWeight: 600,
                  background: activeCategory === cat
                    ? 'linear-gradient(135deg, #29B9CE 0%, #168E9D 100%)'
                    : 'linear-gradient(135deg, #3CC0D2 0%, #1C97A8 100%)',
                  color: '#FFFFFF',
                  boxShadow: activeCategory === cat ? '0 3px 8px rgba(33, 173, 194, 0.2)' : 'none',
                  '& .MuiChip-label': {
                    color: 'inherit',
                  },
                  '&:hover': {
                    background: activeCategory === cat
                      ? 'linear-gradient(135deg, #23ABC0 0%, #157F8E 100%)'
                      : 'linear-gradient(135deg, #35B8CB 0%, #1A8A99 100%)',
                  },
                }}
              />
            ))}
          </Box>
        </Box>

        <Box
          sx={{
            position: 'relative',
            height: { xs: 420, md: 500 },
            userSelect: 'none',
            touchAction: 'pan-y pinch-zoom',
          }}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onPointerDown={handlePointerDown}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerCancel}
          onWheel={handleWheel}
        >
          {filteredItems.map((item, index) => {
            const pos = getCardPosition(index);
            const isCenter = index === currentIndex;

            return (
              <Box
                key={item.id}
                onClick={() => setCurrentIndex(index)}
                onKeyDown={(event) => handleCardKeyDown(event, index)}
                role="button"
                tabIndex={0}
                aria-label={`Select ${item.name}`}
                sx={{
                  position: 'absolute',
                  left: '50%',
                  top: '50%',
                  transform: `translate(${pos.translateX}, -50%) scale(${pos.scale}) rotate(${pos.rotate})`,
                  width: { xs: 240, md: 330 },
                  height: { xs: 360, md: 460 },
                  borderRadius: '22px',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  zIndex: pos.zIndex,
                  opacity: pos.opacity,
                  filter: `blur(${pos.blur})`,
                  transition: 'all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
                  boxShadow: isCenter
                    ? '0 22px 50px rgba(13, 61, 71, 0.24)'
                    : '0 10px 24px rgba(20, 78, 90, 0.14)',
                }}
              >
                <Box
                  sx={{
                    width: '100%',
                    height: '100%',
                    backgroundImage: `url(${item.bannerImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    position: 'relative',
                  }}
                >
                  <Box
                    sx={{
                      position: 'absolute',
                      inset: 0,
                      background:
                        'linear-gradient(180deg, rgba(6,26,31,0.08) 35%, rgba(6,26,31,0.72) 100%)',
                    }}
                  />

                  {isCenter && (
                    <Box
                      sx={{
                        position: 'absolute',
                        left: 18,
                        right: 18,
                        bottom: 16,
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: { xs: 'flex-start', sm: 'flex-end' },
                        flexDirection: { xs: 'column', sm: 'row' },
                        gap: 1,
                      }}
                    >
                      <Box>
                        <Typography sx={{ color: 'white', fontSize: '1.6rem', fontWeight: 700, lineHeight: 1.1 }}>
                          {item.name}
                        </Typography>
                        <Typography sx={{ color: 'rgba(255,255,255,0.9)', fontSize: '0.84rem', mt: 0.2 }}>
                          {item.duration || item.tagline}
                        </Typography>
                      </Box>

                      <Box
                        component={Link}
                        to={`${linkPrefix}/${item.id}`}
                        sx={{
                          color: 'white',
                          textDecoration: 'none',
                          border: '1px solid rgba(255,255,255,0.55)',
                          borderRadius: '999px',
                          px: { xs: 1.25, sm: 1.6 },
                          py: { xs: 0.55, sm: 0.65 },
                          fontSize: { xs: '0.72rem', sm: '0.78rem' },
                          fontWeight: 600,
                          whiteSpace: 'nowrap',
                          alignSelf: { xs: 'flex-start', sm: 'auto' },
                          bgcolor: 'rgba(255,255,255,0.08)',
                          '&:hover': { bgcolor: 'rgba(255,255,255,0.2)' },
                        }}
                      >
                        View More
                      </Box>
                    </Box>
                  )}
                </Box>
              </Box>
            );
          })}

          {hasItems && (
            <Box
              sx={{
                position: 'absolute',
                inset: 0,
                zIndex: 70,
                pointerEvents: 'none',
              }}
            >
              <Box
                onClick={handlePrev}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handlePrev();
                  }
                }}
                aria-label="Previous slide"
                sx={{
                  pointerEvents: 'auto',
                  position: 'absolute',
                  left: { xs: 6, md: 24 },
                  top: '50%',
                  transform: 'translateY(-50%)',
                  width: 40,
                  height: 120,
                  bgcolor: 'transparent',
                  cursor: 'pointer',
                }}
              />
              <Box
                onClick={handleNext}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleNext();
                  }
                }}
                aria-label="Next slide"
                sx={{
                  pointerEvents: 'auto',
                  position: 'absolute',
                  right: { xs: 6, md: 24 },
                  top: '50%',
                  transform: 'translateY(-50%)',
                  width: 40,
                  height: 120,
                  bgcolor: 'transparent',
                  cursor: 'pointer',
                }}
              />
            </Box>
          )}
        </Box>

        {ctaLabel && ctaTo && (
          <Box sx={{ textAlign: 'center', mt: 1 }}>
            <Button
              component={Link}
              to={ctaTo}
              variant="outlined"
              size="large"
              sx={{ px: 4, py: 1.5, fontSize: '1rem' }}
            >
              {ctaLabel}
            </Button>
          </Box>
        )}
      </Container>
    </Box>
  );
};

export default StackedCarousel;

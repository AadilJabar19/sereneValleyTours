import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Box, Container, Typography, Grid, Card, CardContent, List, ListItem, ListItemIcon, ListItemText, Button, Dialog, IconButton } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { getDestinationById } from '../data/destinations';
import SEO from '../components/SEO';

const DestinationDetail = () => {
  const { id } = useParams();
  const [destination, setDestination] = useState(null);
  const [openImage, setOpenImage] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  useEffect(() => {
    const dest = getDestinationById(id);
    setDestination(dest);
  }, [id]);

  const handleImageClick = (index) => {
    setSelectedImageIndex(index);
    setOpenImage(true);
  };

  const handleNextImage = () => {
    if (destination) {
      const allImages = [destination.bannerImage, ...destination.images];
      setSelectedImageIndex((prev) => (prev + 1) % allImages.length);
    }
  };

  const handlePrevImage = () => {
    if (destination) {
      const allImages = [destination.bannerImage, ...destination.images];
      setSelectedImageIndex((prev) => (prev - 1 + allImages.length) % allImages.length);
    }
  };

  if (!destination) {
    return <Box className="py-16 text-center">Loading...</Box>;
  }

  return (
    <>
      <SEO 
        title={`${destination.name} - ${destination.tagline} | Serene Valley Tours`}
        description={destination.description}
        keywords={`${destination.name}, Kashmir destinations, ${destination.name} tourism, visit ${destination.name}`}
        ogImage={destination.bannerImage}
        url={`https://serenevalleytours.com/destinations/${destination.id}`}
      />
      <Box>
        {/* Hero */}
        <Box
          component="header"
          sx={{
            height: { xs: '50vh', md: '60vh' },
            backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${destination.bannerImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Container>
            <Typography variant="h1" className="font-bold text-white text-center" sx={{ fontSize: { xs: '2.5rem', md: '4rem' } }}>
              {destination.name}
            </Typography>
            <Typography variant="h2" className="text-white text-center mt-2" sx={{ fontSize: { xs: '1.25rem', md: '1.75rem' }, fontWeight: 400 }}>
              {destination.tagline}
            </Typography>
          </Container>
        </Box>

        <Container className="py-12" sx={{ px: { xs: 2, sm: 3 } }}>
          <Grid container spacing={4}>
            <Grid item xs={12} md={8}>
              {/* Description */}
              <Card className="mb-4">
                <CardContent>
                  <Typography variant="h2" className="font-bold mb-4" sx={{ fontSize: '1.75rem' }}>
                    About {destination.name}
                  </Typography>
                  <Typography variant="body1" className="text-gray-700" sx={{ lineHeight: 1.8, fontSize: '1.05rem' }}>
                    {destination.description}
                  </Typography>
                </CardContent>
              </Card>

              {/* Gallery */}
              <Card className="mb-4">
                <CardContent>
                  <Typography variant="h2" className="font-bold mb-4" sx={{ fontSize: '1.75rem' }}>
                    Gallery
                  </Typography>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <Box
                        component="img"
                        src={destination.bannerImage}
                        alt={destination.name}
                        className="w-full h-80 object-cover rounded-lg cursor-pointer hover:opacity-90 transition-opacity"
                        loading="lazy"
                        onClick={() => handleImageClick(0)}
                      />
                    </Grid>
                    {destination.images.map((image, index) => (
                      <Grid item xs={6} sm={3} key={index}>
                        <Box
                          component="img"
                          src={image}
                          alt={`${destination.name} view ${index + 1}`}
                          className="w-full h-40 object-cover rounded-lg cursor-pointer hover:opacity-90 transition-opacity"
                          loading="lazy"
                          onClick={() => handleImageClick(index + 1)}
                        />
                      </Grid>
                    ))}
                  </Grid>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} md={4}>
              {/* Highlights */}
              <Card className="mb-4">
                <CardContent>
                  <Typography variant="h3" className="font-bold mb-3" sx={{ fontSize: '1.5rem' }}>
                    Highlights
                  </Typography>
                  <List dense>
                    {destination.highlights.map((item, index) => (
                      <ListItem key={index}>
                        <ListItemIcon>
                          <CheckCircleIcon className="text-primary-main" />
                        </ListItemIcon>
                        <ListItemText primary={item} />
                      </ListItem>
                    ))}
                  </List>
                </CardContent>
              </Card>

              {/* Best Time */}
              <Card className="mb-4">
                <CardContent>
                  <Typography variant="h3" className="font-bold mb-3" sx={{ fontSize: '1.5rem' }}>
                    Best Time to Visit
                  </Typography>
                  <Typography variant="body1" className="text-gray-700">
                    {destination.bestTime}
                  </Typography>
                </CardContent>
              </Card>

              {/* CTA */}
              <Card>
                <CardContent>
                  <Typography variant="h3" className="font-bold mb-3" sx={{ fontSize: '1.5rem' }}>
                    Plan Your Visit
                  </Typography>
                  <Button
                    component={Link}
                    to="/tours"
                    variant="contained"
                    size="large"
                    fullWidth
                    className="mb-2"
                  >
                    View Tours
                  </Button>
                  <Button
                    component={Link}
                    to="/contact"
                    variant="outlined"
                    size="large"
                    fullWidth
                  >
                    Contact Us
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>

        {/* Image Lightbox */}
        <Dialog open={openImage} onClose={() => setOpenImage(false)} maxWidth="lg" fullWidth>
          <IconButton
            onClick={() => setOpenImage(false)}
            sx={{ position: 'absolute', right: 8, top: 8, color: 'white', bgcolor: 'rgba(0,0,0,0.5)', '&:hover': { bgcolor: 'rgba(0,0,0,0.7)' }, zIndex: 1 }}
          >
            <CloseIcon />
          </IconButton>
          <IconButton
            onClick={handlePrevImage}
            sx={{ position: 'absolute', left: 8, top: '50%', transform: 'translateY(-50%)', color: 'white', bgcolor: 'rgba(0,0,0,0.5)', '&:hover': { bgcolor: 'rgba(0,0,0,0.7)' }, zIndex: 1 }}
          >
            <ArrowBackIosNewIcon />
          </IconButton>
          <IconButton
            onClick={handleNextImage}
            sx={{ position: 'absolute', right: 8, top: '50%', transform: 'translateY(-50%)', color: 'white', bgcolor: 'rgba(0,0,0,0.5)', '&:hover': { bgcolor: 'rgba(0,0,0,0.7)' }, zIndex: 1 }}
          >
            <ArrowForwardIosIcon />
          </IconButton>
          <Box sx={{ bgcolor: 'black', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '80vh' }}>
            <img
              src={[destination.bannerImage, ...destination.images][selectedImageIndex]}
              alt={`${destination.name} view`}
              style={{ maxWidth: '100%', maxHeight: '90vh', objectFit: 'contain' }}
            />
          </Box>
        </Dialog>
      </Box>
    </>
  );
};

export default DestinationDetail;

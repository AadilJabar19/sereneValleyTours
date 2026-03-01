import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
  Chip,
  Dialog,
  IconButton,
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PhoneIcon from '@mui/icons-material/Phone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { getTourById } from '../data/tours';
import SEO from '../components/SEO';

const TourDetail = () => {
  const { id } = useParams();
  const [tour, setTour] = useState(null);
  const [openImage, setOpenImage] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  useEffect(() => {
    loadTour();
  }, [id]);

  const loadTour = () => {
    const tourData = getTourById(id);
    setTour(tourData);
  };

  const handleImageClick = (index) => {
    setSelectedImageIndex(index);
    setOpenImage(true);
  };

  const handleCloseImage = () => {
    setOpenImage(false);
  };

  const handleNextImage = () => {
    if (tour) {
      const allImages = [tour.bannerImage, ...(tour.images || [])];
      setSelectedImageIndex((prev) => (prev + 1) % allImages.length);
    }
  };

  const handlePrevImage = () => {
    if (tour) {
      const allImages = [tour.bannerImage, ...(tour.images || [])];
      setSelectedImageIndex((prev) => (prev - 1 + allImages.length) % allImages.length);
    }
  };

  if (!tour) {
    return <Box className="py-16 text-center">Loading...</Box>;
  }

  return (
    <>
      <SEO 
        title={`${tour.name} - Serene Valley Tours`}
        description={tour.description}
        keywords={`${tour.name}, ${tour.category} tour, Kashmir Ladakh tours, ${tour.duration} tour package`}
        ogImage={tour.bannerImage}
        url={`https://serenevalleytours.com/tours/${tour.id}`}
      />
      <Box>
        {/* Hero Image */}
        <Box
          component="header"
          className="h-96 bg-cover bg-center relative"
          sx={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${tour.bannerImage})`,
          }}
          role="img"
          aria-label={`${tour.name} banner`}
        >
          <Container className="h-full flex items-end pb-8">
            <Box className="text-white">
              <Chip
                label={tour.category}
                className="mb-2 rounded-full bg-secondary-main h-12 w-28 text-lg font-bold text-white"
              />
              <Typography variant="h1" className="font-bold mb-2 text-white" sx={{ fontSize: { xs: '2rem', md: '2.5rem' } }}>
                {tour.name}
              </Typography>
              <Box className="flex items-center gap-4">
                <Box className="flex items-center gap-1">
                  <AccessTimeIcon aria-hidden="true" />
                  <Typography className='text-white'>{tour.duration}</Typography>
                </Box>
                <Typography variant="h2" className="font-bold text-white" sx={{ fontSize: { xs: '1.5rem', md: '2rem' } }}>
                  ₹{tour.price}
                </Typography>
              </Box>
            </Box>
          </Container>
        </Box>

        <Container component="article" className="py-12">
          <Grid container spacing={4}>
            {/* Main Content */}
            <Grid item xs={12} md={8}>
              {/* Description */}
              <Card component="section" className="mb-4">
                <CardContent>
                  <Typography variant="h2" className="font-bold mb-4" sx={{ fontSize: '1.5rem' }}>
                    About This Tour
                  </Typography>
                  <Typography variant="body1" className="text-gray-700">
                    {tour.description}
                  </Typography>
                </CardContent>
              </Card>

              {/* Itinerary */}
              <Card component="section" className="mb-4">
                <CardContent>
                  <Typography variant="h2" className="font-bold mb-4" sx={{ fontSize: '1.5rem' }}>
                    Itinerary
                  </Typography>
                  <Box className="mb-4 p-3 bg-blue-50 rounded-lg border-l-4 border-primary-main">
                    <Typography variant="body2" className="text-gray-700" sx={{ fontStyle: 'italic' }}>
                      💡 <strong>Note:</strong> This itinerary can be fully customized as per your preferences and requirements. Contact us to create your perfect tour!
                    </Typography>
                  </Box>
                  {tour.itinerary?.map((day, index) => (
                    <Box key={index} className="mb-4">
                      <Typography variant="h3" className="font-bold text-primary-main" sx={{ fontSize: '1.25rem' }}>
                        {day.day} - {day.title}
                      </Typography>
                      <Typography variant="body2" className="text-gray-700 mt-2">
                        {day.details}
                      </Typography>
                    </Box>
                  ))}
                </CardContent>
              </Card>

              {/* Tour Gallery */}
              <Card component="section" className="mb-4">
                <CardContent>
                  <Typography variant="h2" className="font-bold mb-4" sx={{ fontSize: '1.5rem' }}>
                    Tour Gallery
                  </Typography>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <Box
                        component="img"
                        src={tour.bannerImage}
                        alt={`${tour.name} main view`}
                        className="w-full h-64 object-cover rounded-lg cursor-pointer hover:opacity-90 transition-opacity"
                        loading="lazy"
                        onClick={() => handleImageClick(0)}
                      />
                    </Grid>
                    {tour.images?.map((image, index) => (
                      <Grid item xs={6} sm={4} key={index}>
                        <Box
                          component="img"
                          src={image}
                          alt={`${tour.name} view ${index + 1}`}
                          className="w-full h-40 object-cover rounded-lg cursor-pointer hover:opacity-90 transition-opacity"
                          loading="lazy"
                          onClick={() => handleImageClick(index + 1)}
                        />
                      </Grid>
                    ))}
                  </Grid>
                </CardContent>
              </Card>

              {/* Inclusions & Exclusions */}
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <Card component="section">
                    <CardContent>
                      <Typography variant="h3" className="font-bold mb-3" sx={{ fontSize: '1.25rem' }}>
                        Inclusions
                      </Typography>
                      <List dense>
                        {tour.inclusions?.map((item, index) => (
                          <ListItem key={index}>
                            <ListItemIcon>
                              <CheckCircleIcon className="text-green-600" aria-hidden="true" />
                            </ListItemIcon>
                            <ListItemText primary={item} />
                          </ListItem>
                        ))}
                      </List>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Card component="section">
                    <CardContent>
                      <Typography variant="h3" className="font-bold mb-3" sx={{ fontSize: '1.25rem' }}>
                        Exclusions
                      </Typography>
                      <List dense>
                        {tour.exclusions?.map((item, index) => (
                          <ListItem key={index}>
                            <ListItemIcon>
                              <CancelIcon className="text-red-600" aria-hidden="true" />
                            </ListItemIcon>
                            <ListItemText primary={item} />
                          </ListItem>
                        ))}
                      </List>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </Grid>

            {/* Sidebar */}
            <Grid item xs={12} md={4}>
              <Card component="aside" className="md:sticky md:top-24">
                <CardContent>
                  <Typography variant="h2" className="font-bold mb-4" sx={{ fontSize: '1.5rem' }}>
                    Interested in This Tour?
                  </Typography>
                  <Box className="mb-4">
                    <Typography variant="body2" className="text-gray-600 mb-1">
                      Starting from
                    </Typography>
                    <Typography variant="h3" className="font-bold text-primary-main mb-1" sx={{ fontSize: '1.75rem' }}>
                      {tour.priceRange || `₹${tour.price}`}
                    </Typography>
                    <Typography variant="body2" className="text-gray-600 mb-2">
                      per person
                    </Typography>
                    <Typography variant="caption" className="text-gray-500" sx={{ fontSize: '0.75rem' }}>
                      *Final pricing may vary depending on season and availability.
                    </Typography>
                  </Box>
                  <Button
                    variant="contained"
                    size="large"
                    fullWidth
                    component={Link}
                    to="/contact"
                    className="mb-2"
                  >
                    Inquire Now
                  </Button>
                  <Button
                    variant="outlined"
                    size="large"
                    fullWidth
                    startIcon={<PhoneIcon />}
                    href="tel:+917006327776"
                    className="mb-2"
                    aria-label="Call us at +91 7006327776, +91 7006601277"
                  >
                    Call Us
                  </Button>
                  <Button
                    variant="outlined"
                    size="large"
                    fullWidth
                    startIcon={<WhatsAppIcon />}
                    href="https://wa.me/917006327776"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ color: '#25D366', borderColor: '#25D366', '&:hover': { borderColor: '#25D366', bgcolor: 'rgba(37, 211, 102, 0.04)' } }}
                    aria-label="Contact us on WhatsApp"
                  >
                    WhatsApp
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>

        {/* Image Lightbox with Slider */}
        <Dialog
          open={openImage}
          onClose={handleCloseImage}
          maxWidth="lg"
          fullWidth
        >
          <IconButton
            onClick={handleCloseImage}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: 'white',
              bgcolor: 'rgba(0,0,0,0.5)',
              '&:hover': { bgcolor: 'rgba(0,0,0,0.7)' },
              zIndex: 1,
            }}
            aria-label="Close image"
          >
            <CloseIcon />
          </IconButton>
          <IconButton
            onClick={handlePrevImage}
            sx={{
              position: 'absolute',
              left: 8,
              top: '50%',
              transform: 'translateY(-50%)',
              color: 'white',
              bgcolor: 'rgba(0,0,0,0.5)',
              '&:hover': { bgcolor: 'rgba(0,0,0,0.7)' },
              zIndex: 1,
            }}
            aria-label="Previous image"
          >
            <ArrowBackIosNewIcon />
          </IconButton>
          <IconButton
            onClick={handleNextImage}
            sx={{
              position: 'absolute',
              right: 8,
              top: '50%',
              transform: 'translateY(-50%)',
              color: 'white',
              bgcolor: 'rgba(0,0,0,0.5)',
              '&:hover': { bgcolor: 'rgba(0,0,0,0.7)' },
              zIndex: 1,
            }}
            aria-label="Next image"
          >
            <ArrowForwardIosIcon />
          </IconButton>
          <Box sx={{ bgcolor: 'black', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '80vh' }}>
            {tour && (
              <img
                src={[tour.bannerImage, ...(tour.images || [])][selectedImageIndex]}
                alt={`Tour view ${selectedImageIndex + 1}`}
                style={{ maxWidth: '100%', maxHeight: '90vh', objectFit: 'contain' }}
              />
            )}
          </Box>
        </Dialog>
      </Box>
    </>
  );
};

export default TourDetail;

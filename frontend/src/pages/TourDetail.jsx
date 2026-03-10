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
  Dialog,
  IconButton,
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import PhoneIcon from '@mui/icons-material/Phone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import DownloadIcon from '@mui/icons-material/Download';
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { getTourById } from '../data/tours';
import SEO from '../components/SEO';
import PageHero from '../components/PageHero';

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
    return <Box sx={{ py: 16, textAlign: 'center' }}>Loading...</Box>;
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
      <Box sx={{ bgcolor: '#FFFFFF' }}>
        <PageHero
          subtitle={tour.category}
          title={tour.name}
          description={tour.duration}
          image={tour.bannerImage}
          ariaLabel={`${tour.name} banner`}
        />

        <Container component="article" sx={{ py: { xs: 8, md: 12 } }}>
          <Grid container spacing={4}>
            {/* Main Content */}
            <Grid item xs={12} md={8}>
              {/* Description */}
              <Card component="section" sx={{ mb: 3, p: 1 }}>
                <CardContent sx={{ p: 3 }}>
                  <Typography variant="h2" sx={{ fontSize: '1.75rem', fontWeight: 'bold', mb: 3, color: '#123E49' }}>
                    About This Tour
                  </Typography>
                  <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8 }}>
                    {tour.description}
                  </Typography>
                </CardContent>
              </Card>

              {/* Itinerary */}
              <Card component="section" sx={{ mb: 3, p: 1 }}>
                <CardContent sx={{ p: 3 }}>
                  <Typography variant="h2" sx={{ fontSize: '1.75rem', fontWeight: 'bold', mb: 3, color: '#123E49' }}>
                    Itinerary
                  </Typography>
                  <Box sx={{ mb: 3, p: 2.5, bgcolor: '#E0F7F8', borderRadius: '12px', borderLeft: '4px solid', borderColor: 'primary.main' }}>
                    <Typography variant="body2" color="text.secondary" sx={{ fontStyle: 'italic' }}>
                      💡 <strong>Note:</strong> This itinerary can be fully customized as per your preferences and requirements. Contact us to create your perfect tour!
                    </Typography>
                  </Box>
                  {tour.itinerary?.map((day, index) => (
                    <Box key={index} sx={{ mb: 3 }}>
                      <Typography variant="h3" sx={{ fontSize: '1.25rem', fontWeight: 'bold', color: 'primary.main', mb: 1 }}>
                        {day.day} - {day.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                        {day.details}
                      </Typography>
                    </Box>
                  ))}
                </CardContent>
              </Card>

              {/* Tour Gallery */}
              <Card component="section" sx={{ mb: 3, p: 1 }}>
                <CardContent sx={{ p: 3 }}>
                  <Typography variant="h2" sx={{ fontSize: '1.75rem', fontWeight: 'bold', mb: 3, color: '#123E49' }}>
                    Tour Gallery
                  </Typography>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <Box
                        component="img"
                        src={tour.bannerImage}
                        alt={`${tour.name} main view`}
                        sx={{ width: '100%', height: 256, objectFit: 'cover', borderRadius: '12px', cursor: 'pointer', transition: 'opacity 0.3s', '&:hover': { opacity: 0.9 } }}
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
                          sx={{ width: '100%', height: 160, objectFit: 'cover', borderRadius: '12px', cursor: 'pointer', transition: 'opacity 0.3s', '&:hover': { opacity: 0.9 } }}
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
                  <Card component="section" sx={{ p: 1 }}>
                    <CardContent sx={{ p: 3 }}>
                      <Typography variant="h3" sx={{ fontSize: '1.25rem', fontWeight: 'bold', mb: 2, color: '#123E49' }}>
                        Inclusions
                      </Typography>
                      <List dense>
                        {tour.inclusions?.map((item, index) => (
                          <ListItem key={index} sx={{ px: 0 }}>
                            <ListItemIcon sx={{ minWidth: 36 }}>
                              <CheckCircleIcon sx={{ color: '#16A34A', fontSize: '1.25rem' }} aria-hidden="true" />
                            </ListItemIcon>
                            <ListItemText primary={item} primaryTypographyProps={{ variant: 'body2', color: 'text.secondary' }} />
                          </ListItem>
                        ))}
                      </List>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Card component="section" sx={{ p: 1 }}>
                    <CardContent sx={{ p: 3 }}>
                      <Typography variant="h3" sx={{ fontSize: '1.25rem', fontWeight: 'bold', mb: 2, color: '#123E49' }}>
                        Exclusions
                      </Typography>
                      <List dense>
                        {tour.exclusions?.map((item, index) => (
                          <ListItem key={index} sx={{ px: 0 }}>
                            <ListItemIcon sx={{ minWidth: 36 }}>
                              <CancelIcon sx={{ color: '#DC2626', fontSize: '1.25rem' }} aria-hidden="true" />
                            </ListItemIcon>
                            <ListItemText primary={item} primaryTypographyProps={{ variant: 'body2', color: 'text.secondary' }} />
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
              <Card component="aside" sx={{ p: 1, position: 'sticky', top: 24 }}>
                <CardContent sx={{ p: 3 }}>
                  <Typography variant="h2" sx={{ fontSize: '1.5rem', fontWeight: 'bold', mb: 2, color: '#123E49' }}>
                    Interested in This Tour?
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                    Contact us for pricing and availability
                  </Typography>
                  <Button
                    variant="contained"
                    size="large"
                    fullWidth
                    component={Link}
                    to="/contact"
                    sx={{ mb: 1.5, py: 1.5 }}
                  >
                    Inquire Now
                  </Button>
                  <Button
                    variant="outlined"
                    size="large"
                    fullWidth
                    startIcon={<PhoneIcon />}
                    href="tel:+917006601277"
                    sx={{ mb: 1.5, py: 1.5 }}
                    aria-label="Call us at +91 7006601277, +91 7006327776"
                  >
                    Call Us
                  </Button>
                  <Button
                    variant="outlined"
                    size="large"
                    fullWidth
                    startIcon={<WhatsAppIcon />}
                    href="https://wa.me/917006601277"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ color: '#25D366', borderColor: '#25D366', py: 1.5, '&:hover': { borderColor: '#25D366', bgcolor: 'rgba(37, 211, 102, 0.04)' } }}
                    aria-label="Contact us on WhatsApp"
                  >
                    WhatsApp
                  </Button>
                  <Button
                    variant="text"
                    size="large"
                    fullWidth
                    startIcon={<DownloadIcon />}
                    component="a"
                    href="/brochures/serene-valley-tours-brochure.pdf"
                    download
                    sx={{ mt: 1, py: 1.2 }}
                    aria-label="Download tour brochure"
                  >
                    Download Brochure
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


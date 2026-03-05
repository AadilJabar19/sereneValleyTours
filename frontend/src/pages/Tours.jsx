import { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Chip,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { getAllTours } from '../data/tours';
import SEO from '../components/SEO';

const Tours = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [tours, setTours] = useState([]);
  const [category, setCategory] = useState(searchParams.get('category') || '');

  useEffect(() => {
    loadTours();
  }, [category]);

  const loadTours = () => {
    const filteredTours = getAllTours(category);
    setTours(filteredTours);
  };

  const handleCategoryChange = (event) => {
    const newCategory = event.target.value;
    setCategory(newCategory);
    if (newCategory) {
      setSearchParams({ category: newCategory });
    } else {
      setSearchParams({});
    }
  };

  return (
    <>
      <SEO 
        title="All Tours - Kashmir & Ladakh Packages | Serene Valley Tours"
        description="Browse all our Kashmir and Ladakh tour packages. Find the perfect adventure for your vacation with customizable itineraries and best prices."
        keywords="all tours, Kashmir packages, Ladakh tours, tour packages, vacation packages, travel Kashmir Ladakh"
        url="https://serenevalleytours.com/tours"
      />
      <Box>
        {/* Header */}
        <Box component="header" sx={{ bgcolor: '#F0F9FA', py: 10 }}>
          <Container>
            <Box sx={{ textAlign: 'center' }}>
              <Typography 
                sx={{ 
                  fontFamily: 'Pacifico, cursive', 
                  fontSize: { xs: '1.5rem', md: '2rem' }, 
                  color: 'primary.main',
                  mb: 1
                }}
              >
                Find Your Adventure
              </Typography>
              <Typography variant="h1" sx={{ fontSize: { xs: '2rem', md: '2.75rem' }, fontWeight: 'bold', mb: 2, color: '#2C3E50' }}>
                Explore Our Tours
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ fontSize: { xs: '1rem', md: '1.125rem' }, maxWidth: '600px', mx: 'auto' }}>
                Find your perfect adventure in Kashmir and Ladakh
              </Typography>
            </Box>
          </Container>
        </Box>

        {/* Filters */}
        <Container component="section" sx={{ py: 8 }}>
          <Box sx={{ mb: 6 }}>
            <FormControl sx={{ minWidth: 250 }}>
              <InputLabel id="category-filter-label">Category</InputLabel>
              <Select
                labelId="category-filter-label"
                value={category}
                label="Category"
                onChange={handleCategoryChange}
              >
                <MenuItem value="">All Tours</MenuItem>
                <MenuItem value="Kashmir">Kashmir Packages</MenuItem>
                <MenuItem value="Ladakh">Ladakh Adventures</MenuItem>
                <MenuItem value="Trekking">Trekking</MenuItem>
                <MenuItem value="Skiing">Skiing</MenuItem>
              </Select>
            </FormControl>
          </Box>

          {/* Tours Grid */}
          <Grid container spacing={4}>
            {tours.map((tour) => (
              <Grid item xs={12} md={4} key={tour.id}>
                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <Box sx={{ position: 'relative', overflow: 'hidden' }}>
                    <CardMedia
                      component="img"
                      height="280"
                      image={tour.bannerImage || 'https://via.placeholder.com/400x280'}
                      alt={tour.name}
                      sx={{ height: 280, objectFit: 'cover', transition: 'transform 0.3s', '&:hover': { transform: 'scale(1.05)' } }}
                      loading="lazy"
                    />
                    <Chip
                      label={tour.category}
                      size="small"
                      sx={{ 
                        position: 'absolute', 
                        top: 16, 
                        left: 16
                      }}
                    />
                  </Box>
                  <CardContent sx={{ flexGrow: 1, p: 3 }}>
                    <Typography variant="h3" sx={{ fontSize: '1.375rem', fontWeight: 'bold', mb: 1.5, color: '#2C3E50' }}>
                      {tour.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ 
                        mb: 2,
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        display: '-webkit-box',
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: 'vertical',
                        lineHeight: 1.6
                      }}
                    >
                      {tour.description}
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, color: 'text.secondary' }}>
                      <AccessTimeIcon fontSize="small" aria-hidden="true" />
                      <Typography variant="body2">{tour.duration}</Typography>
                    </Box>
                  </CardContent>
                  <CardActions sx={{ p: 3, pt: 0 }}>
                    <Button
                      component={Link}
                      to={`/tours/${tour.id}`}
                      variant="contained"
                      fullWidth
                      size="large"
                      aria-label={`View details for ${tour.name}`}
                      sx={{ py: 1.5 }}
                    >
                      View Details
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>

          {tours.length === 0 && (
            <Box sx={{ textAlign: 'center', py: 16 }}>
              <Typography variant="h3" color="text.secondary" sx={{ fontSize: '1.5rem' }}>
                No tours found
              </Typography>
            </Box>
          )}
        </Container>
      </Box>
    </>
  );
};

export default Tours;

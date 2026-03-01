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
        <Box component="header" className="bg-primary-main text-white py-16">
          <Container>
            <Typography variant="h1" className="font-bold mb-4" sx={{ fontSize: { xs: '2rem', md: '2.5rem' } }}>
              Explore Our Tours
            </Typography>
            <Typography variant="h2" sx={{ fontSize: { xs: '1.25rem', md: '1.5rem' }, fontWeight: 400 }}>
              Find your perfect adventure in Kashmir and Ladakh
            </Typography>
          </Container>
        </Box>

        {/* Filters */}
        <Container component="section" className="py-8">
          <Box className="mb-6">
            <FormControl className="w-64">
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
                <Card className="h-full flex flex-col">
                  <CardMedia
                    component="img"
                    height="240"
                    image={tour.bannerImage || 'https://via.placeholder.com/400x240'}
                    alt={tour.name}
                    className="h-60 object-cover"
                    loading="lazy"
                  />
                  <CardContent className="flex-grow">
                    <Chip
                      label={tour.category}
                      size="small"
                      className="mb-2 bg-primary-light text-white"
                    />
                    <Typography variant="h3" className="font-bold mb-2" sx={{ fontSize: '1.25rem' }}>
                      {tour.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      className="text-gray-600 mb-3 line-clamp-3"
                    >
                      {tour.description}
                    </Typography>
                    <Box className="flex items-center justify-between">
                      <Box className="flex items-center gap-1 text-gray-600">
                        <AccessTimeIcon fontSize="small" aria-hidden="true" />
                        <Typography variant="body2">{tour.duration}</Typography>
                      </Box>
                      <Typography variant="h4" className="text-primary-main font-bold" sx={{ fontSize: '1.25rem' }}>
                        ₹{tour.price}
                      </Typography>
                    </Box>
                  </CardContent>
                  <CardActions className="p-4 pt-0">
                    <Button
                      component={Link}
                      to={`/tours/${tour.id}`}
                      variant="contained"
                      fullWidth
                      aria-label={`View details for ${tour.name}`}
                    >
                      View Details
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>

          {tours.length === 0 && (
            <Box className="text-center py-16">
              <Typography variant="h3" className="text-gray-600" sx={{ fontSize: '1.5rem' }}>
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

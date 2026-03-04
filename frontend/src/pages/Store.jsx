import { useState } from 'react';
import { Link } from 'react-router-dom';
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
} from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import SEO from '../components/SEO';

const products = [
  {
    id: 1,
    name: 'Original Kashmiri Saffron',
    description: 'Premium quality Kashmiri saffron (Kesar) - the finest in the world. Hand-picked from the saffron fields of Pampore.',
    image: '/images/saffron.webp',
    category: 'Spices'
  },
  {
    id: 2,
    name: 'Kashmiri Mamra Almonds',
    description: 'Premium Mamra almonds from Kashmir - smaller, sweeter, and more nutritious than regular almonds. Rich in oil content.',
    image: '/images/products/almonds.jpg',
    category: 'Dry Fruits'
  },
  {
    id: 3,
    name: 'Kashmiri Walnuts (Akhrot)',
    description: 'Premium quality Kashmiri walnuts with thin shells and rich flavor. Excellent source of omega-3 fatty acids.',
    image: '/images/walnut.webp',
    category: 'Dry Fruits'
  },
  {
    id: 4,
    name: 'Ladakhi Apricots (Jardalu)',
    description: 'Sun-dried organic apricots from Ladakh. Sweet, nutritious, and naturally grown in the cold desert. Rich in vitamins.',
    image: '/images/apricots.webp',
    category: 'Dry Fruits'
  },
  {
    id: 5,
    name: 'Kashmiri Dried Figs (Anjeer)',
    description: 'Premium dried figs from Kashmir orchards. Naturally sweet and packed with fiber, minerals, and antioxidants.',
    image: '/images/products/figs.jpg',
    category: 'Dry Fruits'
  },
  {
    id: 6,
    name: 'Kashmiri Raisins (Kishmish)',
    description: 'Golden and black raisins from Kashmir vineyards. Sweet, seedless, and perfect for snacking or cooking.',
    image: '/images/products/raisins.jpg',
    category: 'Dry Fruits'
  },
  {
    id: 7,
    name: 'Ladakhi Dried Apricot Kernels',
    description: 'Nutritious apricot kernels from Ladakh. Rich in healthy fats and proteins. Used in traditional Ladakhi cuisine.',
    image: '/images/products/apricot-kernels.jpg',
    category: 'Dry Fruits'
  },
  {
    id: 8,
    name: 'Kashmiri Pine Nuts (Chilgoza)',
    description: 'Premium pine nuts from Kashmir forests. Buttery flavor, rich in vitamins and minerals. Perfect for desserts.',
    image: '/images/products/pine-nuts.jpg',
    category: 'Dry Fruits'
  },
  {
    id: 9,
    name: 'Kashmiri Dried Cherries',
    description: 'Naturally dried cherries from Kashmir orchards. Tangy-sweet flavor, rich in antioxidants and vitamins.',
    image: '/images/products/dried-cherries.jpg',
    category: 'Dry Fruits'
  },
  {
    id: 10,
    name: 'Pure Himalayan Shilajit',
    description: 'Authentic Himalayan Shilajit resin - natural energy booster and wellness supplement from high-altitude mountains.',
    image: '/images/shilajit.webp',
    category: 'Wellness'
  },
  {
    id: 11,
    name: 'Kashmiri Pashmina Shawl',
    description: 'Handwoven authentic Pashmina shawls made from the finest cashmere wool. Soft, warm, and luxurious.',
    image: '/images/pashminaShawl.webp',
    category: 'Clothing'
  },
  {
    id: 12,
    name: 'Traditional Kashmiri Pheran',
    description: 'Traditional Kashmiri winter wear - comfortable, warm, and stylish. Available in various designs and colors.',
    image: '/images/products/pheran.jpg',
    category: 'Clothing'
  }
];

const Store = () => {
  const whatsappNumber = '917006327776';
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  const categories = ['All', 'Spices', 'Dry Fruits', 'Wellness', 'Clothing'];
  
  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(p => p.category === selectedCategory);
  
  const handleWhatsAppInquiry = (productName) => {
    const message = `Hi, I'm interested in ${productName}. Can you provide more details?`;
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      <SEO 
        title="Store - Authentic Kashmir & Ladakh Products | Serene Valley Tours"
        description="Shop authentic Kashmiri saffron, dry fruits, Himalayan shilajit, Ladakhi apricots, Pashmina shawls, and traditional Pherans. Premium quality products from Kashmir and Ladakh."
        keywords="Kashmiri saffron, Kashmir dry fruits, Himalayan shilajit, Ladakhi apricots, Pashmina shawl, Kashmiri Pheran"
        url="https://serenevalleytours.com/store"
      />
      
      <Box component="main">
        {/* Hero Section */}
        <Box
          component="section"
          className="relative bg-cover bg-center"
          sx={{
            height: { xs: '40vh', md: '50vh' },
            backgroundImage:
              'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.5)), url(https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1920&q=80&fm=webp&fit=crop)',
          }}
          role="img"
          aria-label="Kashmir store products"
        >
          <Container className="h-full flex items-center" sx={{ px: { xs: 2, sm: 3 } }}>
            <Box className="text-white">
              <Typography variant="h1" className="font-bold mb-4" sx={{ color: 'white', fontSize: { xs: '2rem', md: '3rem' } }}>
                Authentic Kashmir & Ladakh Products
              </Typography>
              <Typography variant="h2" className="text-gray-200" sx={{ fontSize: { xs: '1rem', md: '1.25rem' }, fontWeight: 400 }}>
                Premium quality products directly from the valleys
              </Typography>
            </Box>
          </Container>
        </Box>

        {/* Products Grid */}
        <Container component="section" className="py-12 md:py-16" sx={{ px: { xs: 2, sm: 3 } }}>
          <Box className="text-center mb-12">
            <Typography variant="h2" className="font-bold mb-4" sx={{ fontSize: { xs: '2rem', md: '2.5rem' } }}>
              Our Products
            </Typography>
            <Typography variant="body1" color="text.secondary" className="mb-2">
              Contact us on WhatsApp for pricing, availability, and orders
            </Typography>
            <Box className="mt-4 p-3 bg-green-50 rounded-lg inline-block">
              <Typography variant="body1" className="text-green-800 font-semibold">
                🚚 7-Day Delivery Available Across India
              </Typography>
            </Box>
            
            {/* Category Filter */}
            <Box className="flex gap-2 justify-center mt-6 flex-wrap">
              {categories.map((cat) => (
                <Chip
                  key={cat}
                  label={cat}
                  onClick={() => setSelectedCategory(cat)}
                  color={selectedCategory === cat ? 'primary' : 'default'}
                  sx={{ cursor: 'pointer' }}
                />
              ))}
            </Box>
          </Box>

          <Grid container spacing={4}>
            {filteredProducts.map((product) => (
              <Grid item xs={12} sm={6} md={4} key={product.id}>
                <Card className="h-full flex flex-col shadow-lg rounded-2xl transition-all duration-300 hover:shadow-xl">
                  <CardMedia
                    component="img"
                    height="250"
                    image={product.image}
                    alt={product.name}
                    className="h-64 object-cover"
                    loading="lazy"
                  />
                  <CardContent className="flex-grow">
                    <Typography variant="caption" color="primary" className="font-semibold">
                      {product.category}
                    </Typography>
                    <Typography variant="h3" className="font-bold mb-2" sx={{ fontSize: '1.5rem' }}>
                      {product.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {product.description}
                    </Typography>
                  </CardContent>
                  <CardActions className="p-4 pt-0">
                    <Button
                      variant="contained"
                      fullWidth
                      startIcon={<WhatsAppIcon />}
                      onClick={() => handleWhatsAppInquiry(product.name)}
                      sx={{ bgcolor: '#25D366', '&:hover': { bgcolor: '#20BA5A' } }}
                    >
                      Inquire on WhatsApp
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>

          {/* Contact Info */}
          <Box className="text-center mt-12 p-6 bg-gray-50 rounded-lg">
            <Typography variant="h3" className="font-bold mb-4" sx={{ fontSize: '1.5rem' }}>
              Need Help?
            </Typography>
            <Typography variant="body1" color="text.secondary" className="mb-4">
              Contact us for bulk orders, custom requirements, or any queries
            </Typography>
            <Box className="flex gap-4 justify-center" sx={{ flexDirection: { xs: 'column', sm: 'row' } }}>
              <Button
                variant="contained"
                startIcon={<WhatsAppIcon />}
                onClick={() => window.open(`https://wa.me/${whatsappNumber}`, '_blank', 'noopener,noreferrer')}
                sx={{ bgcolor: '#25D366', '&:hover': { bgcolor: '#20BA5A' } }}
              >
                WhatsApp: +91 7006327776
              </Button>
              <Button
                component={Link}
                to="/contact"
                variant="outlined"
              >
                Contact Page
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Store;

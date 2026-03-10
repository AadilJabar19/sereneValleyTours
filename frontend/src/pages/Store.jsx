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
import PageHero from '../components/PageHero';
import SectionHeader from '../components/SectionHeader';

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
    image: '/images/walnut.webp',
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
    image: '/images/apricots.webp',
    category: 'Dry Fruits'
  },
  {
    id: 6,
    name: 'Kashmiri Raisins (Kishmish)',
    description: 'Golden and black raisins from Kashmir vineyards. Sweet, seedless, and perfect for snacking or cooking.',
    image: '/images/apricots.webp',
    category: 'Dry Fruits'
  },
  {
    id: 7,
    name: 'Ladakhi Dried Apricot Kernels',
    description: 'Nutritious apricot kernels from Ladakh. Rich in healthy fats and proteins. Used in traditional Ladakhi cuisine.',
    image: '/images/apricots.webp',
    category: 'Dry Fruits'
  },
  {
    id: 8,
    name: 'Kashmiri Pine Nuts (Chilgoza)',
    description: 'Premium pine nuts from Kashmir forests. Buttery flavor, rich in vitamins and minerals. Perfect for desserts.',
    image: '/images/walnut.webp',
    category: 'Dry Fruits'
  },
  {
    id: 9,
    name: 'Kashmiri Dried Cherries',
    description: 'Naturally dried cherries from Kashmir orchards. Tangy-sweet flavor, rich in antioxidants and vitamins.',
    image: '/images/apricots.webp',
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
    image: '/images/pashminaShawl.webp',
    category: 'Clothing'
  }
];

const Store = () => {
  const whatsappNumber = '917006601277';
  const fallbackProductImage = '/images/kashmir.webp';
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
      
      <Box component="main" sx={{ bgcolor: '#FFFFFF' }}>
        <PageHero
          subtitle="Authentic Products"
          title="Kashmir & Ladakh Store"
          description="Premium quality products directly from the valleys"
          image="/images/aruvalley2.webp"
          ariaLabel="Store for authentic Kashmir and Ladakh products"
        />

        {/* Products Grid */}
        <Container component="section" sx={{ py: { xs: 8, md: 12 }, px: { xs: 2, sm: 3 } }}>
          <Box sx={{ mb: 8, textAlign: 'center' }}>
            <SectionHeader
              subtitle="Our Services"
              title="Our Products"
              description="Contact us on WhatsApp for pricing, availability, and orders"
            />
            <Box sx={{ p: 3, bgcolor: 'rgba(28, 168, 175, 0.1)', borderRadius: '12px', display: 'inline-block', mb: 4 }}>
              <Typography variant="body1" sx={{ color: 'primary.main', fontWeight: 600 }}>
                🚚 7-Day Delivery Available Across India
              </Typography>
            </Box>
            
            {/* Category Filter */}
            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
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
                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <CardMedia
                    component="img"
                    height="250"
                    image={product.image}
                    alt={product.name}
                    sx={{ height: 250, objectFit: 'cover' }}
                    loading="lazy"
                    onError={(event) => {
                      event.currentTarget.onerror = null;
                      event.currentTarget.src = fallbackProductImage;
                    }}
                  />
                  <CardContent sx={{ flexGrow: 1, p: 3 }}>
                    <Typography variant="caption" color="primary" sx={{ fontWeight: 600, display: 'block', mb: 1 }}>
                      {product.category}
                    </Typography>
                    <Typography variant="h3" sx={{ fontSize: '1.375rem', fontWeight: 'bold', mb: 1.5, color: '#123E49' }}>
                      {product.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                      {product.description}
                    </Typography>
                  </CardContent>
                  <CardActions sx={{ p: 3, pt: 0 }}>
                    <Button
                      variant="contained"
                      fullWidth
                      startIcon={<WhatsAppIcon />}
                      onClick={() => handleWhatsAppInquiry(product.name)}
                      sx={{ bgcolor: '#25D366', '&:hover': { bgcolor: '#20BA5A' }, py: 1.5 }}
                    >
                      Inquire on WhatsApp
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>

          {/* Contact Info */}
          <Box sx={{ textAlign: 'center', mt: 8, p: 6, bgcolor: '#FAFCFD', borderRadius: '20px' }}>
            <Typography variant="h3" sx={{ fontSize: '1.75rem', fontWeight: 'bold', mb: 2, color: '#123E49' }}>
              Need Help?
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
              Contact us for bulk orders, custom requirements, or any queries
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexDirection: { xs: 'column', sm: 'row' } }}>
              <Button
                variant="contained"
                startIcon={<WhatsAppIcon />}
                onClick={() => window.open(`https://wa.me/${whatsappNumber}`, '_blank', 'noopener,noreferrer')}
                sx={{ bgcolor: '#25D366', '&:hover': { bgcolor: '#20BA5A' }, py: 1.5 }}
              >
                WhatsApp: +91 7006601277
              </Button>
              <Button
                component={Link}
                to="/contact"
                variant="outlined"
                sx={{ py: 1.5 }}
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


import { Helmet } from 'react-helmet-async';

const SEO = ({ 
  title = 'Serene Valley Tours - Kashmir & Ladakh Tour Packages',
  description = 'Explore Kashmir and Ladakh with expertly crafted tour packages. Book your dream vacation with Serene Valley Tours - Best prices, expert guides, safe travel.',
  keywords = 'Kashmir tours, Ladakh tours, Kashmir packages, Ladakh packages, Gulmarg skiing, Pangong Lake, Dal Lake, Srinagar tours, adventure tours Kashmir',
  ogImage = 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=630&fit=crop',
  url = 'https://serenevalleytours.com'
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={url} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Additional SEO */}
      <link rel="canonical" href={url} />
    </Helmet>
  );
};

export default SEO;

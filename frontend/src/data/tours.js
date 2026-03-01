// Static tour data converted from backend seed data
export const tours = [
  // Kashmir Tours
  {
    id: 1,
    name: "Srinagar Gulmarg Pahalgam 5N/6D",
    description: "Experience the best of Kashmir with visits to Dal Lake, Gulmarg's snow-capped peaks, and Pahalgam's scenic valleys. Perfect for families and couples.",
    category: "Kashmir",
    duration: "5 Nights / 6 Days",
    price: 18500,
    priceRange: "₹16,000 - ₹22,000",
    bannerImage: "/images/gulmarg1.webp",
    images: ["/images/gulmarg2.webp", "/images/gulmarg3.webp", "/images/gulmarg4.webp", "/images/gulmarg5.webp"],
    accommodation: ["3-star hotels", "Houseboat"],
    itinerary: [
      { day: "Day 1", title: "Arrival in Srinagar", details: "Airport pickup, Shikara ride on Dal Lake, overnight in houseboat" },
      { day: "Day 2", title: "Srinagar to Gulmarg", details: "Visit Gulmarg, Gondola ride, snow activities" },
      { day: "Day 3", title: "Gulmarg to Pahalgam", details: "Drive to Pahalgam via Saffron fields, Betaab Valley visit" },
      { day: "Day 4", title: "Pahalgam Sightseeing", details: "Aru Valley, Chandanwari, Lidder River" },
      { day: "Day 5", title: "Pahalgam to Srinagar", details: "Return to Srinagar, Mughal Gardens tour" },
      { day: "Day 6", title: "Departure", details: "Drop at Srinagar airport" }
    ],
    inclusions: ["Accommodation", "Daily breakfast", "All transfers", "Shikara ride", "Sightseeing"],
    exclusions: ["Airfare", "Lunch & Dinner", "Personal expenses", "Gondola tickets"],
    isActive: true,
    rating: 5,
    reviewCount: 120
  },
  {
    id: 2,
    name: "Kashmir Honeymoon Special 4N/5D",
    description: "Romantic getaway to Kashmir's most beautiful destinations. Includes houseboat stay, candlelight dinner, and private Shikara rides.",
    category: "Kashmir",
    duration: "4 Nights / 5 Days",
    price: 22000,
    priceRange: "₹20,000 - ₹28,000",
    bannerImage: "/images/doodpathri1.webp",
    images: ["/images/doodpathri2.webp", "/images/doodpathri3.webp", "/images/doodpathri4.webp", "/images/doodpathri5.webp"],
    accommodation: ["Deluxe houseboat", "4-star hotels"],
    itinerary: [
      { day: "Day 1", title: "Arrival Srinagar", details: "Houseboat check-in, romantic Shikara ride" },
      { day: "Day 2", title: "Srinagar to Gulmarg", details: "Gulmarg day trip, Gondola ride" },
      { day: "Day 3", title: "Srinagar to Pahalgam", details: "Pahalgam sightseeing, Betaab Valley" },
      { day: "Day 4", title: "Pahalgam to Srinagar", details: "Return to Srinagar, Mughal Gardens" },
      { day: "Day 5", title: "Departure", details: "Airport drop" }
    ],
    inclusions: ["Houseboat stay", "Hotel accommodation", "Breakfast & Dinner", "Candlelight dinner", "All transfers"],
    exclusions: ["Airfare", "Lunch", "Gondola tickets", "Personal expenses"],
    isActive: true,
    rating: 5,
    reviewCount: 85
  },
  {
    id: 3,
    name: "Srinagar Sonamarg 3N/4D",
    description: "Short Kashmir tour covering Srinagar and the meadow of gold - Sonamarg. Ideal for weekend getaways.",
    category: "Kashmir",
    duration: "3 Nights / 4 Days",
    price: 12500,
    priceRange: "₹10,000 - ₹15,000",
    bannerImage: "https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=800&q=75&fm=webp&fit=crop",
    images: ["https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=800&q=75&fm=webp&fit=crop"],
    accommodation: ["3-star hotels"],
    itinerary: [
      { day: "Day 1", title: "Arrival Srinagar", details: "Dal Lake, Shikara ride, local market" },
      { day: "Day 2", title: "Srinagar to Sonamarg", details: "Day trip to Sonamarg, Thajiwas Glacier" },
      { day: "Day 3", title: "Srinagar Local", details: "Mughal Gardens, Shankaracharya Temple" },
      { day: "Day 4", title: "Departure", details: "Airport transfer" }
    ],
    inclusions: ["Hotel accommodation", "Breakfast", "All transfers", "Shikara ride"],
    exclusions: ["Airfare", "Lunch & Dinner", "Pony rides", "Personal expenses"],
    isActive: true,
    rating: 4,
    reviewCount: 65
  },

  // Ladakh Tours
  {
    id: 4,
    name: "Leh Ladakh Adventure 6N/7D",
    description: "Complete Ladakh experience covering Leh, Nubra Valley, Pangong Lake, and monasteries. Perfect for adventure seekers.",
    category: "Ladakh",
    duration: "6 Nights / 7 Days",
    price: 28500,
    priceRange: "₹25,000 - ₹35,000",
    bannerImage: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=75&fm=webp&fit=crop",
    images: ["https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=75&fm=webp&fit=crop"],
    accommodation: ["Hotels", "Camps"],
    itinerary: [
      { day: "Day 1", title: "Arrival Leh", details: "Acclimatization day, local market visit" },
      { day: "Day 2", title: "Leh Local Sightseeing", details: "Shanti Stupa, Leh Palace, monasteries" },
      { day: "Day 3", title: "Leh to Nubra Valley", details: "Khardung La pass, Diskit Monastery, camel safari" },
      { day: "Day 4", title: "Nubra to Pangong", details: "Drive to Pangong Lake via Shyok route" },
      { day: "Day 5", title: "Pangong to Leh", details: "Return to Leh via Chang La pass" },
      { day: "Day 6", title: "Leh Exploration", details: "Free day for shopping and exploration" },
      { day: "Day 7", title: "Departure", details: "Airport drop" }
    ],
    inclusions: ["Accommodation", "Breakfast & Dinner", "All transfers", "Inner line permits", "Oxygen cylinder"],
    exclusions: ["Airfare", "Lunch", "Camel ride", "Personal expenses"],
    isActive: true,
    rating: 5,
    reviewCount: 150
  },
  {
    id: 5,
    name: "Leh Nubra Pangong 5N/6D",
    description: "Explore the highlights of Ladakh including the famous Pangong Lake and Nubra Valley's sand dunes.",
    category: "Ladakh",
    duration: "5 Nights / 6 Days",
    price: 24500,
    priceRange: "₹22,000 - ₹30,000",
    bannerImage: "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=800&q=75&fm=webp&fit=crop",
    images: ["https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=800&q=75&fm=webp&fit=crop"],
    accommodation: ["Hotels", "Camps"],
    itinerary: [
      { day: "Day 1", title: "Arrival Leh", details: "Rest and acclimatization" },
      { day: "Day 2", title: "Leh Sightseeing", details: "Monasteries, Shanti Stupa, Leh Palace" },
      { day: "Day 3", title: "Leh to Nubra", details: "Khardung La, Diskit, Hunder sand dunes" },
      { day: "Day 4", title: "Nubra to Pangong", details: "Scenic drive to Pangong Lake" },
      { day: "Day 5", title: "Pangong to Leh", details: "Return journey via Chang La" },
      { day: "Day 6", title: "Departure", details: "Airport transfer" }
    ],
    inclusions: ["Hotels & camps", "Breakfast & Dinner", "All transfers", "Permits", "Sightseeing"],
    exclusions: ["Airfare", "Lunch", "Adventure activities", "Personal expenses"],
    isActive: true,
    rating: 5,
    reviewCount: 98
  },

  // Adventure Tours
  {
    id: 6,
    name: "Kashmir Great Lakes Trek 8D/7N",
    description: "One of India's most beautiful treks covering 7 alpine lakes. Moderate to difficult trek through meadows and mountain passes.",
    category: "Trekking",
    duration: "8 Days / 7 Nights",
    price: 16500,
    priceRange: "₹14,000 - ₹20,000",
    bannerImage: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&q=75&fm=webp&fit=crop",
    images: ["https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&q=75&fm=webp&fit=crop"],
    accommodation: ["Camping"],
    itinerary: [
      { day: "Day 1", title: "Srinagar to Sonamarg", details: "Drive and trek to Nichnai" },
      { day: "Day 2", title: "Nichnai to Vishansar", details: "Trek through meadows" },
      { day: "Day 3", title: "Vishansar to Gadsar", details: "Cross Gadsar pass" },
      { day: "Day 4", title: "Gadsar to Satsar", details: "Seven lakes campsite" },
      { day: "Day 5", title: "Satsar to Gangabal", details: "Trek to twin lakes" },
      { day: "Day 6", title: "Gangabal to Naranag", details: "Descend to Naranag" },
      { day: "Day 7", title: "Naranag to Srinagar", details: "Drive back" },
      { day: "Day 8", title: "Departure", details: "Airport drop" }
    ],
    inclusions: ["Camping equipment", "All meals", "Guide & support staff", "Permits", "Transfers"],
    exclusions: ["Airfare", "Personal trekking gear", "Insurance", "Tips"],
    isActive: true,
    rating: 5,
    reviewCount: 75
  },
  {
    id: 7,
    name: "Gulmarg Skiing Package 4N/5D",
    description: "Learn skiing or improve your skills in Asia's premier ski destination. Includes equipment and instructor.",
    category: "Skiing",
    duration: "4 Nights / 5 Days",
    price: 25000,
    priceRange: "₹22,000 - ₹30,000",
    bannerImage: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800&q=75&fm=webp&fit=crop",
    images: ["https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800&q=75&fm=webp&fit=crop"],
    accommodation: ["3-star hotels"],
    itinerary: [
      { day: "Day 1", title: "Arrival Srinagar", details: "Transfer to Gulmarg" },
      { day: "Day 2", title: "Skiing Day 1", details: "Basic training and practice" },
      { day: "Day 3", title: "Skiing Day 2", details: "Intermediate slopes" },
      { day: "Day 4", title: "Skiing Day 3", details: "Advanced runs and Gondola" },
      { day: "Day 5", title: "Departure", details: "Return to Srinagar" }
    ],
    inclusions: ["Accommodation", "Breakfast & Dinner", "Ski equipment", "Instructor", "Gondola tickets"],
    exclusions: ["Airfare", "Lunch", "Personal expenses", "Insurance"],
    isActive: true,
    rating: 5,
    reviewCount: 42
  }
];

// Helper functions
export const getAllTours = (category = '') => {
  if (!category) return tours;
  return tours.filter(tour => tour.category === category);
};

export const getTourById = (id) => {
  return tours.find(tour => tour.id === parseInt(id));
};

export const getFeaturedTours = (limit = 6) => {
  return tours.slice(0, limit);
};

// Static tour data
export const tours = [
  // Kashmir Tours
  {
    id: 1,
    name: "Kashmir Paradise Explorer 8D/7N",
    description: "Embark on a budget-friendly journey through Kashmir's most breathtaking landscapes. From Pahalgam's verdant forests to Sonamarg's pristine glaciers, Doodhpathri's emerald meadows to Gulmarg's legendary ski slopes, this comprehensive tour showcases Kashmir's diverse beauty. Perfect for travelers seeking an authentic Kashmiri experience without compromising on quality.",
    category: "Kashmir",
    duration: "7 Nights / 8 Days",
    price: 28000,
    priceRange: "Starting from ₹25,000",
    bannerImage: "/images/pahalgam1.webp",
    images: ["/images/sonamarg1.webp", "/images/doodpathri1.webp", "/images/gulmarg1.webp", "/images/srinagar1.webp"],
    accommodation: ["3-star hotels"],
    itinerary: [
      { day: "Day 1", title: "Arrival in Srinagar", details: "Airport pickup, transfer to hotel, evening leisure at Dal Lake" },
      { day: "Day 2", title: "Srinagar to Pahalgam", details: "Drive to Pahalgam, explore nature and forests, overnight stay" },
      { day: "Day 3", title: "Pahalgam Sightseeing", details: "Visit Betaab Valley, Aru Valley, Chandanwari" },
      { day: "Day 4", title: "Pahalgam to Sonamarg", details: "Drive to Sonamarg, glacier visit, meadow exploration" },
      { day: "Day 5", title: "Sonamarg to Doodhpathri", details: "Transfer to Doodhpathri, explore meadows and streams" },
      { day: "Day 6", title: "Doodhpathri to Gulmarg", details: "Drive to Gulmarg, Gondola ride, ski slopes visit" },
      { day: "Day 7", title: "Gulmarg to Srinagar", details: "Return to Srinagar, Mughal Gardens tour, Shikara ride" },
      { day: "Day 8", title: "Departure", details: "Airport drop after breakfast" }
    ],
    inclusions: ["Airport pickup and drop", "1 meal per day", "1 hour Shikara ride", "Visits to 7 places", "All transfers"],
    exclusions: ["Additional services", "Travel insurance", "Food and drinks (except included meal)", "Entry tickets", "Personal expenses"],
    isActive: true,
    rating: 5,
    reviewCount: 95
  },
  {
    id: 2,
    name: "Elegant Kashmir Journey 6D/5N",
    description: "Discover Kashmir's timeless elegance on this curated journey along the historic Jhelum River. Marvel at the architectural splendor of Shalimar Garden, cruise through Dal Lake's tranquil waters, and soak in the valley's enchanting atmosphere. This tour perfectly balances cultural exploration with leisurely moments, ideal for those seeking a refined Kashmir experience.",
    category: "Kashmir",
    duration: "5 Nights / 6 Days",
    price: 24000,
    priceRange: "Starting from ₹22,000",
    bannerImage: "/images/srinagar1.webp",
    images: ["/images/srinagar2.webp", "/images/gulmarg2.webp", "/images/pahalgam2.webp", "/images/srinagar3.webp"],
    accommodation: ["3-star hotels", "Houseboat"],
    itinerary: [
      { day: "Day 1", title: "Arrival Srinagar", details: "Airport pickup, Jhelum River view, hotel check-in" },
      { day: "Day 2", title: "Srinagar Sightseeing", details: "Shalimar Garden, Nishat Garden, Dal Lake Shikara ride" },
      { day: "Day 3", title: "Gulmarg Day Trip", details: "Full day excursion to Gulmarg, Gondola ride" },
      { day: "Day 4", title: "Pahalgam Excursion", details: "Day trip to Pahalgam, Betaab Valley visit" },
      { day: "Day 5", title: "Houseboat Experience", details: "Cruise dinner with music, overnight in houseboat" },
      { day: "Day 6", title: "Departure", details: "Airport transfer after breakfast" }
    ],
    inclusions: ["Airport pickup and drop", "2 meals per day", "Cruise dinner with music", "Visits to 5 places", "Sedan transport"],
    exclusions: ["Additional services", "Travel insurance", "Food and drinks (except included)", "Entry tickets", "Personal expenses"],
    isActive: true,
    rating: 5,
    reviewCount: 78
  },
  {
    id: 3,
    name: "Kashmir Highlights Escape 5D/4N",
    description: "Uncover Kashmir's exotic allure in this action-packed 5-day escape. From Srinagar's magnificent Mughal Gardens to Gulmarg's alpine meadows and championship golf course, and Pahalgam's scenic trekking routes - every day brings new adventures. Ideal for active travelers and nature enthusiasts looking to experience Kashmir's highlights in a short timeframe.",
    category: "Kashmir",
    duration: "4 Nights / 5 Days",
    price: 18000,
    priceRange: "Starting from ₹16,000",
    bannerImage: "/images/gulmarg3.webp",
    images: ["/images/srinagar4.webp", "/images/gulmarg4.webp", "/images/pahalgam3.webp"],
    accommodation: ["3-star hotels"],
    itinerary: [
      { day: "Day 1", title: "Srinagar Arrival & Sightseeing", details: "Airport pickup, Mughal Gardens, Dal Lake, local market" },
      { day: "Day 2", title: "Gulmarg Day Trip", details: "Full day in Gulmarg, golf course, ski slopes, Gondola ride" },
      { day: "Day 3", title: "Pahalgam Excursion", details: "Day trip to Pahalgam, trekking trails, valley exploration" },
      { day: "Day 4", title: "Srinagar Leisure", details: "Free day for shopping and relaxation" },
      { day: "Day 5", title: "Departure", details: "Airport drop after breakfast" }
    ],
    inclusions: ["Airport pickup and drop", "2 meals per day", "Visits to 4 places", "All transfers"],
    exclusions: ["Additional services", "Travel insurance", "Food and drinks (except included)", "Entry tickets", "Gondola tickets"],
    isActive: true,
    rating: 4,
    reviewCount: 62
  },
  {
    id: 4,
    name: "Nature's Best Kashmir 6D/5N",
    description: "Immerse yourself in Kashmir's natural splendor with this nature-centric itinerary. Experience authentic Kashmiri hospitality with stays in premium hotels and a traditional houseboat. Journey through Sonamarg's glacier valleys, Gulmarg's flower-carpeted meadows, and Pahalgam's pine-scented forests. A perfect blend of comfort and wilderness for nature lovers.",
    category: "Kashmir",
    duration: "5 Nights / 6 Days",
    price: 25000,
    priceRange: "Starting from ₹23,000",
    bannerImage: "/images/sonamarg2.webp",
    images: ["https://images.unsplash.com/photo-1587474260584-136574528ed5?w=1200&q=80&auto=format&fit=crop", "/images/pahalgam4.webp", "/images/srinagar5.webp"],
    accommodation: ["3 nights Srinagar hotel", "1 night houseboat", "1 night Pahalgam hotel"],
    itinerary: [
      { day: "Day 1", title: "Srinagar Gardens", details: "Arrival, Mughal Gardens tour, Shikara ride" },
      { day: "Day 2", title: "Sonamarg Day Trip", details: "Full day excursion to Sonamarg, glacier visit" },
      { day: "Day 3", title: "Gulmarg Excursion", details: "Day trip to Gulmarg, meadows and Gondola" },
      { day: "Day 4", title: "Pahalgam Transfer", details: "Drive to Pahalgam, local sightseeing" },
      { day: "Day 5", title: "Houseboat Experience", details: "Return to Srinagar, overnight in houseboat" },
      { day: "Day 6", title: "Departure", details: "Airport transfer" }
    ],
    inclusions: ["Accommodation (3N Srinagar, 1N houseboat, 1N Pahalgam)", "2 meals per day", "Local sightseeing", "Day trips", "Transport", "Airport transfers"],
    exclusions: ["Travel insurance", "Food and drinks (except included)", "Flights", "Room service", "Laundry", "Tips", "Pony rides", "Entry tickets", "Gondola tickets", "Personal expenses", "Visa fees"],
    isActive: true,
    rating: 5,
    reviewCount: 88
  },
  {
    id: 5,
    name: "Srinagar Heritage Tour 5D/4N",
    description: "Step into paradise with this romantic Srinagar-based getaway. Relive the Mughal era's grandeur as you wander through terraced gardens, glide across mirror-like lakes in traditional shikaras, and spend a magical night on a heritage houseboat. Whether it's a honeymoon, anniversary, or family bonding, this tour creates unforgettable memories.",
    category: "Kashmir",
    duration: "4 Nights / 5 Days",
    price: 20000,
    priceRange: "Starting from ₹18,000",
    bannerImage: "/images/srinagar2.webp",
    images: ["/images/srinagar3.webp", "/images/srinagar4.webp", "/images/srinagar5.webp"],
    accommodation: ["3-star hotels", "Houseboat"],
    itinerary: [
      { day: "Day 1", title: "Srinagar Arrival", details: "Airport pickup, hotel check-in, evening at Dal Lake" },
      { day: "Day 2", title: "Mughal Gardens Tour", details: "Visit Shalimar, Nishat, Chashme Shahi gardens" },
      { day: "Day 3", title: "Houseboat Stay", details: "Cruise dinner with music, overnight in houseboat" },
      { day: "Day 4", title: "Local Sightseeing", details: "Shankaracharya Temple, local markets, Shikara ride" },
      { day: "Day 5", title: "Departure", details: "Airport drop" }
    ],
    inclusions: ["Airport pickup and drop", "2 meals per day", "Cruise dinner with music", "Visits to 4 places", "Sedan transport"],
    exclusions: ["Additional services", "Travel insurance", "Food and drinks (except included)", "Entry tickets", "Personal expenses"],
    isActive: true,
    rating: 4,
    reviewCount: 55
  },

  // Ladakh Tours
  {
    id: 6,
    name: "Leh Nubra Pangong Express 4D/3N",
    description: "Begin your Ladakh adventure with this compact yet thrilling tour. Conquer the legendary Khardung La, one of the world's highest motorable passes, explore ancient Diskit Monastery, ride camels across Nubra's cold desert dunes, and witness Pangong Lake's mesmerizing blue waters. Perfect for first-time Ladakh visitors seeking maximum experience in minimal time.",
    category: "Ladakh",
    duration: "3 Nights / 4 Days",
    price: 22000,
    priceRange: "Starting from ₹20,000",
    bannerImage: "/images/leh1.webp",
    images: ["/images/nubra1.webp", "/images/pangong1.webp", "/images/leh2.webp"],
    accommodation: ["2 nights Leh hotel", "1 night Nubra camp"],
    itinerary: [
      { day: "Day 1", title: "Leh Arrival & Leisure", details: "Airport pickup, acclimatization rest, evening walk in Leh market" },
      { day: "Day 2", title: "Leh to Nubra Valley", details: "Cross Khardung La (18,380 ft), Diskit Monastery, sand dunes, optional ATV ride" },
      { day: "Day 3", title: "Nubra to Pangong & Back to Leh", details: "Day trip to Pangong Lake via Shyok route, return to Leh" },
      { day: "Day 4", title: "Departure", details: "Airport drop after breakfast" }
    ],
    inclusions: ["Airport pickup and drop", "2 meals per day (breakfast & dinner)", "Innova/Ertiga transport", "Tolls and parking", "Inner line permits", "Accommodation (2N Leh + 1N Nubra)"],
    exclusions: ["Additional services", "Travel insurance", "Food and drinks (except included)", "Entry tickets", "Room service", "Laundry", "Tips", "Pony rides", "Personal expenses", "Visa fees"],
    isActive: true,
    rating: 5,
    reviewCount: 102
  },
  {
    id: 7,
    name: "Complete Ladakh Experience 6D/5N",
    description: "Experience Ladakh's raw beauty and cultural richness on this comprehensive journey. From Leh's Buddhist monasteries to Nubra's double-humped Bactrian camels, the remote Balti village of Turtuk near the Pakistan border, and Pangong's ever-changing hues - this tour reveals Ladakh's hidden treasures. Watch both sunrise and sunset at Pangong for an unforgettable spectacle.",
    category: "Ladakh",
    duration: "5 Nights / 6 Days",
    price: 32000,
    priceRange: "Starting from ₹29,000",
    bannerImage: "/images/nubra2.webp",
    images: ["/images/pangong2.webp", "/images/leh3.webp", "/images/nubra3.webp"],
    accommodation: ["Deluxe hotels and camps"],
    itinerary: [
      { day: "Day 1", title: "Leh Acclimatization", details: "Arrival, rest and acclimatize to high altitude" },
      { day: "Day 2", title: "Leh to Nubra Valley", details: "Khardung La pass, Diskit, Hunder sand dunes, camel ride" },
      { day: "Day 3", title: "Nubra to Turtuk Village", details: "Explore Turtuk village near Pakistan border, Shayok River" },
      { day: "Day 4", title: "Turtuk to Pangong Lake", details: "Drive to Pangong, sunset at the lake" },
      { day: "Day 5", title: "Pangong to Leh", details: "Sunrise at Pangong, return via Chang La, optional monastery visits" },
      { day: "Day 6", title: "Departure", details: "Airport transfer" }
    ],
    inclusions: ["Deluxe accommodation", "MAP meals (breakfast & dinner)", "Private vehicle", "Inner line permits", "Driver allowance, tolls, fuel", "Welcome drink", "Airport assistance"],
    exclusions: ["Travel insurance", "Lunches", "Entry fees", "Airfare", "Tips, laundry, liquors, mineral water", "Personal items"],
    isActive: true,
    rating: 5,
    reviewCount: 125
  },
  {
    id: 8,
    name: "Grand Ladakh Adventure 7D/6N",
    description: "Dive deep into Ladakh's mystical landscape with this extensive 7-day expedition. Marvel at the Hall of Fame's military history, experience the gravity-defying Magnetic Hill, seek blessings at Gurudwara Pathar Sahib, and optionally raft at Indus-Zanskar Sangam. Journey through Nubra's stark beauty, discover Turtuk's apricot orchards, and camp beside Pangong's celestial waters.",
    category: "Ladakh",
    duration: "6 Nights / 7 Days",
    price: 35000,
    priceRange: "Starting from ₹32,000",
    bannerImage: "/images/pangong3.webp",
    images: ["/images/leh4.webp", "/images/nubra4.webp", "/images/pangong4.webp"],
    accommodation: ["Deluxe hotels and camps"],
    itinerary: [
      { day: "Day 1", title: "Leh Arrival & Acclimatization", details: "Airport pickup, rest day, light walk in market" },
      { day: "Day 2", title: "Leh Sightseeing", details: "Hall of Fame, Magnetic Hill, Gurudwara Pathar Sahib, Sangam (rafting optional)" },
      { day: "Day 3", title: "Leh to Nubra Valley", details: "Khardung La, Diskit Monastery, Hunder dunes" },
      { day: "Day 4", title: "Nubra to Turtuk", details: "Explore Turtuk village, Balti culture" },
      { day: "Day 5", title: "Turtuk to Pangong Lake", details: "Scenic drive to Pangong via Shyok" },
      { day: "Day 6", title: "Pangong to Leh", details: "Return via Chang La pass, monastery visits" },
      { day: "Day 7", title: "Departure", details: "Airport drop" }
    ],
    inclusions: ["Deluxe accommodation", "MAP meals (breakfast & dinner)", "Private vehicle", "Inner line permits", "Driver allowance, tolls, fuel", "Welcome drink", "Airport assistance"],
    exclusions: ["5% GST", "Travel insurance", "Lunches", "Entry fees", "Airfare", "Tips, laundry, liquors, mineral water", "Personal items"],
    isActive: true,
    rating: 5,
    reviewCount: 140
  },
  {
    id: 9,
    name: "Ladakh Highlights Tour 5D/4N",
    description: "Witness Ladakh's incredible contrasts in this perfectly paced 5-day journey. From Leh Palace's ancient walls and Shanti Stupa's peaceful ambiance to the adrenaline rush of crossing Khardung La, the spiritual serenity of Diskit Monastery, and the surreal beauty of Pangong Lake - every moment is extraordinary. Experience the Shyok and Chang La routes for diverse Himalayan vistas.",
    category: "Ladakh",
    duration: "4 Nights / 5 Days",
    price: 27000,
    priceRange: "Starting from ₹24,000",
    bannerImage: "/images/leh5.webp",
    images: ["/images/nubra5.webp", "/images/pangong5.webp", "/images/leh1.webp"],
    accommodation: ["Deluxe hotels and camps"],
    itinerary: [
      { day: "Day 1", title: "Arrival & Leisure", details: "Airport pickup, rest and acclimatization" },
      { day: "Day 2", title: "Leh Sightseeing", details: "Leh Palace, Shanti Stupa, local market exploration" },
      { day: "Day 3", title: "Leh to Nubra Valley", details: "Khardung La pass, Diskit Monastery, Hunder dunes (ATV optional)" },
      { day: "Day 4", title: "Nubra to Pangong & Back to Leh", details: "Pangong Lake via Shyok, return via Chang La" },
      { day: "Day 5", title: "Departure", details: "Airport transfer" }
    ],
    inclusions: ["Deluxe accommodation", "MAP meals (breakfast & dinner)", "Private vehicle", "Inner line permits", "Driver allowance, tolls, fuel", "Welcome drink", "Airport assistance"],
    exclusions: ["5% GST", "Travel insurance", "Lunches", "Entry fees", "Airfare", "Tips, laundry, liquors", "Personal expenses"],
    isActive: true,
    rating: 5,
    reviewCount: 92
  },

  // Adventure Tours (Kept from original)
  {
    id: 10,
    name: "Kashmir Great Lakes Trek 8D/7N",
    description: "One of India's most beautiful treks covering 7 alpine lakes. Moderate to difficult trek through meadows and mountain passes.",
    category: "Trekking",
    duration: "8 Days / 7 Nights",
    price: 16500,
    priceRange: "Starting from ₹14,000",
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
    id: 11,
    name: "Gulmarg Skiing Package 4N/5D",
    description: "Learn skiing or improve your skills in Asia's premier ski destination. Includes equipment and instructor.",
    category: "Skiing",
    duration: "4 Nights / 5 Days",
    price: 25000,
    priceRange: "Starting from ₹22,000",
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

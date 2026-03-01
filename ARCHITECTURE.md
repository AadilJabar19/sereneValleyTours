# Project Architecture

## Overview
Modern full-stack travel booking application with React frontend and NestJS backend.

## Architecture Diagram

```
┌─────────────────────────────────────────────────────────┐
│                     FRONTEND (React)                     │
│  ┌──────────────────────────────────────────────────┐  │
│  │  Components (Navbar, Footer, Cards)              │  │
│  │  Pages (Home, Tours, Booking, Auth)              │  │
│  │  Context (AuthContext)                           │  │
│  │  Services (API calls with Axios)                 │  │
│  │  Theme (MUI + Tailwind)                          │  │
│  └──────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────┘
                          ↓ HTTP/REST
┌─────────────────────────────────────────────────────────┐
│                    BACKEND (NestJS)                      │
│  ┌──────────────────────────────────────────────────┐  │
│  │  Controllers (Handle HTTP requests)              │  │
│  │  Services (Business logic)                       │  │
│  │  Entities (Database models)                      │  │
│  │  DTOs (Data validation)                          │  │
│  │  Guards (Authentication)                         │  │
│  └──────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────┘
                          ↓ TypeORM
┌─────────────────────────────────────────────────────────┐
│                   DATABASE (PostgreSQL)                  │
│  ┌──────────────────────────────────────────────────┐  │
│  │  users, tours, bookings tables                   │  │
│  │  Relationships & Constraints                     │  │
│  └──────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────┘
```

## Backend Structure

```
backend/
├── src/
│   ├── auth/                    # Authentication module
│   │   ├── dto/                 # Login, Register DTOs
│   │   ├── guards/              # JWT Auth Guard
│   │   ├── strategies/          # JWT & Local strategies
│   │   ├── auth.controller.ts   # Auth endpoints
│   │   ├── auth.service.ts      # Auth business logic
│   │   └── auth.module.ts
│   │
│   ├── users/                   # Users module
│   │   ├── user.entity.ts       # User database model
│   │   ├── users.service.ts     # User CRUD operations
│   │   ├── users.controller.ts  # User endpoints
│   │   └── users.module.ts
│   │
│   ├── tours/                   # Tours module
│   │   ├── tour.entity.ts       # Tour database model
│   │   ├── tours.service.ts     # Tour CRUD operations
│   │   ├── tours.controller.ts  # Tour endpoints
│   │   └── tours.module.ts
│   │
│   ├── bookings/                # Bookings module
│   │   ├── dto/                 # Create Booking DTO
│   │   ├── booking.entity.ts    # Booking database model
│   │   ├── bookings.service.ts  # Booking operations
│   │   ├── bookings.controller.ts
│   │   └── bookings.module.ts
│   │
│   ├── admin/                   # Admin module
│   │   ├── admin.controller.ts  # Admin dashboard
│   │   └── admin.module.ts
│   │
│   ├── app.module.ts            # Root module
│   └── main.ts                  # Application entry point
│
├── .env                         # Environment variables
├── package.json
└── tsconfig.json
```

## Frontend Structure

```
frontend/
├── src/
│   ├── components/              # Reusable components
│   │   ├── Navbar.jsx           # Navigation bar
│   │   └── Footer.jsx           # Footer component
│   │
│   ├── pages/                   # Page components
│   │   ├── Home.jsx             # Landing page
│   │   ├── Tours.jsx            # Tours listing
│   │   ├── TourDetail.jsx       # Single tour view
│   │   ├── Booking.jsx          # Booking form
│   │   ├── MyBookings.jsx       # User bookings
│   │   ├── Login.jsx            # Login page
│   │   ├── Register.jsx         # Registration page
│   │   └── Contact.jsx          # Contact form
│   │
│   ├── context/                 # React Context
│   │   └── AuthContext.jsx      # Authentication state
│   │
│   ├── services/                # API services
│   │   └── api.js               # Axios instance & API calls
│   │
│   ├── theme/                   # MUI theme
│   │   └── theme.js             # Custom theme config
│   │
│   ├── App.jsx                  # Main app component
│   ├── main.jsx                 # Entry point
│   └── index.css                # Global styles
│
├── index.html
├── vite.config.js
├── tailwind.config.js
└── package.json
```

## Database Schema

### Users Table
```sql
- id (UUID, PK)
- email (VARCHAR, UNIQUE)
- password (VARCHAR, HASHED)
- name (VARCHAR)
- phone (VARCHAR, NULLABLE)
- role (ENUM: user, admin)
- isActive (BOOLEAN)
- createdAt (TIMESTAMP)
- updatedAt (TIMESTAMP)
```

### Tours Table
```sql
- id (UUID, PK)
- name (VARCHAR)
- description (TEXT)
- duration (VARCHAR)
- price (DECIMAL)
- category (VARCHAR)
- images (ARRAY)
- bannerImage (VARCHAR)
- accommodation (JSON)
- inclusions (JSON)
- exclusions (JSON)
- itinerary (JSON)
- isActive (BOOLEAN)
- rating (DECIMAL)
- reviewCount (INTEGER)
- createdAt (TIMESTAMP)
- updatedAt (TIMESTAMP)
```

### Bookings Table
```sql
- id (UUID, PK)
- userId (UUID, FK → users.id)
- tourId (UUID, FK → tours.id)
- customerName (VARCHAR)
- customerEmail (VARCHAR)
- customerPhone (VARCHAR)
- travelDate (DATE)
- numberOfPeople (INTEGER)
- totalPrice (DECIMAL)
- status (ENUM: pending, confirmed, cancelled, completed)
- specialRequests (TEXT, NULLABLE)
- createdAt (TIMESTAMP)
- updatedAt (TIMESTAMP)
```

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user

### Tours
- `GET /api/tours` - Get all tours (with optional category filter)
- `GET /api/tours/:id` - Get single tour
- `POST /api/tours` - Create tour (Admin only)
- `PUT /api/tours/:id` - Update tour (Admin only)
- `DELETE /api/tours/:id` - Delete tour (Admin only)

### Bookings
- `POST /api/bookings` - Create booking (Authenticated)
- `GET /api/bookings` - Get user bookings (Authenticated)
- `GET /api/bookings/:id` - Get single booking (Authenticated)
- `PATCH /api/bookings/:id/status` - Update booking status (Admin)

### Users
- `GET /api/users/profile` - Get user profile (Authenticated)

### Admin
- `GET /api/admin/bookings` - Get all bookings (Admin)
- `GET /api/admin/dashboard` - Get dashboard stats (Admin)

## Authentication Flow

1. User registers/logs in
2. Backend generates JWT token
3. Frontend stores token in localStorage
4. Token sent in Authorization header for protected routes
5. Backend validates token using JWT strategy
6. Request proceeds if valid, rejected if invalid

## State Management

- **AuthContext**: Global authentication state
  - user object
  - login/logout functions
  - loading state

## Styling Approach

1. **Material UI**: Base components with built-in functionality
2. **Tailwind CSS**: Utility classes for spacing, colors, layout
3. **Custom Theme**: MUI theme with Tourm-inspired colors
   - Primary: Teal (#0f766e)
   - Secondary: Orange (#f97316)

## Key Features

✅ User authentication (JWT)
✅ Tour browsing with category filters
✅ Detailed tour pages with itinerary
✅ Booking system with form validation
✅ User booking history
✅ Responsive design (mobile-first)
✅ Protected routes
✅ Admin dashboard (basic)
✅ Modern UI with smooth animations

## Security Measures

- Password hashing with bcrypt
- JWT token authentication
- Input validation with class-validator
- CORS configuration
- Environment variables for secrets
- SQL injection prevention (TypeORM)

## Performance Optimizations

- React lazy loading (can be added)
- Database indexing on foreign keys
- Efficient queries with TypeORM
- Vite for fast development builds
- Production build optimization

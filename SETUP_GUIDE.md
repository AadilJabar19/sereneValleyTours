# Setup Guide - Aadil & Kamran Travel Agency

## Complete Installation Instructions

### Prerequisites
- Node.js 18+ installed
- PostgreSQL 14+ installed and running
- Git (optional)

---

## Backend Setup

### 1. Navigate to backend folder
```bash
cd backend
```

### 2. Install dependencies
```bash
npm install
```

### 3. Setup PostgreSQL Database

**Option A: Using psql command line**
```bash
psql -U postgres
CREATE DATABASE travel_agency;
\q
```

**Option B: Using pgAdmin**
- Open pgAdmin
- Right-click on Databases → Create → Database
- Name: `travel_agency`

### 4. Configure Environment Variables
```bash
cp .env.example .env
```

Edit `.env` file with your database credentials:
```env
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=postgres
DB_PASSWORD=your_postgres_password
DB_DATABASE=travel_agency

JWT_SECRET=your-super-secret-jwt-key-change-this
JWT_EXPIRATION=7d

PORT=3000
NODE_ENV=development
```

### 5. Start Backend Server
```bash
npm run start:dev
```

Backend will run on: `http://localhost:3000`

**Verify backend is running:**
- Open browser: `http://localhost:3000/api`
- You should see a response (might be 404, that's okay)

---

## Frontend Setup

### 1. Open NEW terminal and navigate to frontend
```bash
cd frontend
```

### 2. Install dependencies
```bash
npm install
```

### 3. Configure Environment (Optional)
```bash
cp .env.example .env
```

### 4. Start Frontend Development Server
```bash
npm run dev
```

Frontend will run on: `http://localhost:5173`

**Open in browser:** `http://localhost:5173`

---

## Initial Data Setup

### Create Admin User

**Method 1: Using API (Postman/Thunder Client)**

POST `http://localhost:3000/api/auth/register`
```json
{
  "name": "Admin User",
  "email": "admin@neokashmir.com",
  "password": "Admin@123"
}
```

**Method 2: Using Frontend**
1. Go to `http://localhost:5173/register`
2. Fill in the form
3. Click Sign Up

### Add Sample Tours

POST `http://localhost:3000/api/tours`
Headers: `Authorization: Bearer YOUR_JWT_TOKEN`

```json
{
  "name": "Kashmir Paradise - 5 Days",
  "description": "Experience the breathtaking beauty of Kashmir with our 5-day tour package",
  "duration": "5 Days / 4 Nights",
  "price": 25000,
  "category": "Kashmir",
  "bannerImage": "https://images.unsplash.com/photo-1506905925346-21bda4d32df4",
  "images": [
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4",
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4"
  ],
  "accommodation": [
    "3 Nights in Srinagar",
    "1 Night in Gulmarg"
  ],
  "inclusions": [
    "Hotel accommodation",
    "Daily breakfast",
    "Airport transfers",
    "Sightseeing tours"
  ],
  "exclusions": [
    "Airfare",
    "Lunch and dinner",
    "Personal expenses"
  ],
  "itinerary": [
    {
      "day": "Day 1",
      "title": "Arrival in Srinagar",
      "details": "Arrive at Srinagar airport, transfer to hotel, evening Shikara ride on Dal Lake"
    },
    {
      "day": "Day 2",
      "title": "Srinagar Sightseeing",
      "details": "Visit Mughal Gardens, Shankaracharya Temple, and local markets"
    }
  ]
}
```

---

## Troubleshooting

### Backend Issues

**Error: "Cannot connect to database"**
- Check PostgreSQL is running: `pg_isready`
- Verify credentials in `.env`
- Ensure database exists

**Error: "Port 3000 already in use"**
- Change PORT in `.env` to 3001
- Update frontend proxy in `vite.config.js`

### Frontend Issues

**Error: "Cannot connect to API"**
- Ensure backend is running on port 3000
- Check browser console for CORS errors
- Verify API_URL in frontend `.env`

**Blank page / White screen**
- Check browser console for errors
- Clear browser cache
- Run `npm install` again

---

## Development Workflow

### Making Changes

**Backend:**
1. Edit files in `backend/src/`
2. Server auto-restarts (watch mode)
3. Test API endpoints

**Frontend:**
1. Edit files in `frontend/src/`
2. Browser auto-refreshes (HMR)
3. Check browser console for errors

### Testing the Application

1. **Register a user** → `http://localhost:5173/register`
2. **Login** → `http://localhost:5173/login`
3. **Browse tours** → `http://localhost:5173/tours`
4. **View tour details** → Click on any tour
5. **Make a booking** → Click "Book Now"
6. **View bookings** → `http://localhost:5173/bookings`

---

## Production Build

### Backend
```bash
cd backend
npm run build
npm run start:prod
```

### Frontend
```bash
cd frontend
npm run build
# Output in dist/ folder
```

---

## Tech Stack Summary

**Backend:**
- NestJS (Node.js framework)
- TypeORM (Database ORM)
- PostgreSQL (Database)
- JWT (Authentication)
- Passport (Auth strategies)

**Frontend:**
- React 18 (UI library)
- Vite (Build tool)
- Material UI (Component library)
- Tailwind CSS (Utility styling)
- React Router (Navigation)
- Axios (HTTP client)

---

## Support

For issues or questions:
- Check console logs (backend terminal & browser console)
- Review error messages carefully
- Ensure all dependencies are installed
- Verify environment variables are set correctly

## Next Steps

1. Add more tour packages
2. Customize theme colors
3. Add payment gateway integration
4. Implement email notifications
5. Add admin dashboard

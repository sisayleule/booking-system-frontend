# Online Booking System

A full-stack online booking system built with React, Tailwind CSS, Node.js, Express, and MongoDB.

## Features

- **Frontend**: Modern React application with Tailwind CSS
- **Backend**: Express.js REST API with MongoDB
- **Pages**: Home, Booking Form, Admin Dashboard
- **Components**: Reusable Navbar, Footer, Booking Card, and Button components
- **Responsive Design**: Fully responsive layout for all screen sizes
- **Animations**: Smooth scroll and hover animations
- **SEO**: Meta tags for better search engine optimization

## Project Structure

```
.
├── backend/
│   ├── models/
│   │   └── Booking.js          # Mongoose schema for bookings
│   ├── routes/
│   │   └── bookings.js          # API routes for bookings
│   ├── server.js                # Express server
│   ├── package.json
│   └── .env.example
├── frontend/
│   ├── public/
│   │   └── index.html           # HTML template with SEO meta tags
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.js        # Navigation component
│   │   │   ├── Footer.js        # Footer component
│   │   │   ├── Button.js        # Reusable button component
│   │   │   └── BookingCard.js   # Booking card component
│   │   ├── pages/
│   │   │   ├── Home.js          # Home page
│   │   │   ├── BookingForm.js   # Booking form page
│   │   │   └── AdminDashboard.js # Admin dashboard page
│   │   ├── App.js               # Main app component with routing
│   │   ├── index.js             # React entry point
│   │   └── index.css            # Global styles with Tailwind
│   ├── package.json
│   ├── tailwind.config.js
│   └── postcss.config.js
└── README.md
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (local installation or MongoDB Atlas)
- npm or yarn

### Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file (copy from `.env.example`):
```bash
cp .env.example .env
```

4. Update the `.env` file with your MongoDB connection string:
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/booking-system
```

5. Start the backend server:
```bash
npm start
# Or for development with auto-reload:
npm run dev
```

The backend server will run on `http://localhost:5000`

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The frontend will run on `http://localhost:3000`

## API Endpoints

### POST /api/bookings
Create a new booking

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "123-456-7890",
  "service": "Consultation",
  "date": "2024-01-15",
  "time": "10:00",
  "notes": "Optional notes"
}
```

### GET /api/bookings
Get all bookings (for admin dashboard)

**Response:**
```json
{
  "success": true,
  "count": 5,
  "data": [...]
}
```

### DELETE /api/bookings/:id
Delete a booking by ID

### PATCH /api/bookings/:id/status
Update booking status

**Request Body:**
```json
{
  "status": "completed"
}
```

## Features Breakdown

### Frontend Pages

1. **Home Page**: 
   - Hero section with call-to-action
   - Features section
   - Services showcase
   - Smooth animations

2. **Booking Form**:
   - All required fields (Name, Email, Phone, Service, Date, Time, Notes)
   - Form validation
   - Success confirmation message
   - Responsive design

3. **Admin Dashboard**:
   - Statistics cards
   - Filter bookings by status
   - Card view and table view
   - Delete and status update functionality

### Components

- **Navbar**: Fixed navigation with scroll effects
- **Footer**: Company info and quick links
- **Button**: Reusable button with multiple variants
- **BookingCard**: Display booking information with actions

## Technologies Used

- **Frontend**: React 18, React Router, Tailwind CSS, Axios
- **Backend**: Node.js, Express.js, Mongoose
- **Database**: MongoDB
- **Styling**: Tailwind CSS with custom animations

## Development Notes

- All code is thoroughly commented
- Responsive design for mobile, tablet, and desktop
- Smooth animations on scroll and hover
- SEO meta tags included
- Error handling implemented
- Loading states for better UX

## License

ISC




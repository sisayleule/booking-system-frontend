// Express routes for booking operations
const express = require('express');
const router = express.Router();
const Booking = require('../models/Booking');

// POST /bookings - Create a new booking
router.post('/', async (req, res) => {
  try {
    // Create a new booking from request body
    const booking = new Booking(req.body);
    
    // Save booking to database
    const savedBooking = await booking.save();
    
    // Return success response with saved booking
    res.status(201).json({
      success: true,
      message: 'Booking created successfully',
      data: savedBooking
    });
  } catch (error) {
    // Handle validation errors and other errors
    res.status(400).json({
      success: false,
      message: 'Error creating booking',
      error: error.message
    });
  }
});

// GET /bookings - Get all bookings (for admin dashboard)
router.get('/', async (req, res) => {
  try {
    // Fetch all bookings from database, sorted by creation date (newest first)
    const bookings = await Booking.find().sort({ createdAt: -1 });
    
    // Return success response with bookings array
    res.status(200).json({
      success: true,
      count: bookings.length,
      data: bookings
    });
  } catch (error) {
    // Handle database errors
    res.status(500).json({
      success: false,
      message: 'Error fetching bookings',
      error: error.message
    });
  }
});

// DELETE /bookings/:id - Delete a booking (optional functionality)
router.delete('/:id', async (req, res) => {
  try {
    // Find and delete booking by ID
    const deletedBooking = await Booking.findByIdAndDelete(req.params.id);
    
    if (!deletedBooking) {
      return res.status(404).json({
        success: false,
        message: 'Booking not found'
      });
    }
    
    // Return success response
    res.status(200).json({
      success: true,
      message: 'Booking deleted successfully',
      data: deletedBooking
    });
  } catch (error) {
    // Handle errors
    res.status(500).json({
      success: false,
      message: 'Error deleting booking',
      error: error.message
    });
  }
});

// PATCH /bookings/:id/status - Update booking status (optional functionality)
router.patch('/:id/status', async (req, res) => {
  try {
    // Find and update booking status
    const booking = await Booking.findByIdAndUpdate(
      req.params.id,
      { status: req.body.status },
      { new: true, runValidators: true }
    );
    
    if (!booking) {
      return res.status(404).json({
        success: false,
        message: 'Booking not found'
      });
    }
    
    // Return success response
    res.status(200).json({
      success: true,
      message: 'Booking status updated successfully',
      data: booking
    });
  } catch (error) {
    // Handle errors
    res.status(500).json({
      success: false,
      message: 'Error updating booking status',
      error: error.message
    });
  }
});

module.exports = router;




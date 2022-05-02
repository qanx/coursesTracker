const express = require('express')
const { createBooking, getBookingReq, confirmBooking } = require('../Controllers/BookingController')
const router = express.Router()

router.route('/').post(createBooking).get(getBookingReq).put(confirmBooking)

module.exports = router
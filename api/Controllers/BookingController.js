const Booking = require("../Models/Booking")

const createBooking = async (req, res) => {

   const { course, user, date } = req.body

   try {
      const newBooking = await Booking.create({ course, user, date })

      console.log(newBooking)
      res.status(201).json(newBooking)
   } catch (error) {
      res.status(500).json(error)

   }

}

const getBookingReq = async (req, res) => {

   try {
      const allBookingReq = await Booking.find().populate("user").populate('course')
      res.status(200).json(allBookingReq)
   } catch (error) {
      res.status(500).json(error)

   }
}

const confirmBooking = async (req, res) => {

   const { bookingId } = req.body
   try {
      const confirmation = await Booking.findByIdAndUpdate(bookingId,
         function (error, booking) {

            booking.reqStatus = !booking.reqStatus;
            booking.save(function(err,updated){
               if(err){console.log(err)}else{
                  console.log(updated)
               }
            })
   
   
   
         }
         )
      res.status(200).json(confirmation)

   } catch (error) {
      res.status(500).json(error)

   }
}

module.exports = { confirmBooking, createBooking, getBookingReq }
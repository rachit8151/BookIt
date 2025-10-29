import Booking from "../models/Booking.js";
import Experience from "../models/Experience.js";

export const createBooking = async (req, res) => {
  try {
    const { experienceId, userName, email, date, slot, totalPrice } = req.body;
    const experience = await Experience.findById(experienceId);

    const selectedDate = experience.availableSlots.find(d => d.date === date);
    const selectedSlot = selectedDate.slots.find(s => s.time === slot);

    if (selectedSlot.isBooked) {
      return res.status(400).json({ message: "Slot already booked" });
    }

    selectedSlot.isBooked = true;
    await experience.save();

    const booking = await Booking.create({
      experienceId,
      userName,
      email,
      date,
      slot,
      totalPrice,
    });

    res.json({ success: true, booking });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

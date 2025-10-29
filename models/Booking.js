import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
  experienceId: { type: mongoose.Schema.Types.ObjectId, ref: "Experience" },
  userName: String,
  email: String,
  slot: String,
  date: String,
  totalPrice: Number,
  status: { type: String, default: "Confirmed" },
});

export default mongoose.model("Booking", bookingSchema);

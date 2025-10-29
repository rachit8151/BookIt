import mongoose from "mongoose";

const experienceSchema = new mongoose.Schema({
  title: String,
  description: String,
  image: String,
  location: String,
  price: Number,
  availableSlots: [
    {
      date: String,
      slots: [
        {
          time: String,
          isBooked: { type: Boolean, default: false }
        }
      ]
    }
  ],
});

export default mongoose.model("Experience", experienceSchema);

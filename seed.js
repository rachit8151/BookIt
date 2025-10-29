import mongoose from "mongoose";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import Experience from "./models/Experience.js";

dotenv.config();
connectDB();

const seedExperiences = async () => {
  try {
    const experiences = [
      {
        title: "Desert Safari",
        description:
          "Experience the thrill of dune bashing, camel rides, and dinner under the stars.",
        image:
          "https://images.unsplash.com/photo-1529253355930-c6c4c0df18f8?w=800",
        location: "Dubai, UAE",
        price: 2500,
        availableSlots: [
          {
            date: "2025-11-10",
            slots: [
              { time: "10 AM - 12 PM", isBooked: false },
              { time: "2 PM - 4 PM", isBooked: false },
            ],
          },
        ],
      },
      {
        title: "Mountain Trekking",
        description: "Enjoy a scenic trek through the Himalayas in Manali.",
        image:
          "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800",
        location: "Manali, India",
        price: 1800,
        availableSlots: [
          {
            date: "2025-11-15",
            slots: [{ time: "6 AM - 12 PM", isBooked: false }],
          },
        ],
      },
    ];

    await Experience.deleteMany();
    await Experience.insertMany(experiences);

    console.log("✅ Data Seeded Successfully!");
    process.exit();
  } catch (err) {
    console.error("❌ Error Seeding Data:", err.message);
    process.exit(1);
  }
};

seedExperiences();

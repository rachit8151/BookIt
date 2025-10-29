import mongoose from "mongoose";

const promoSchema = new mongoose.Schema({
  code: String,
  discountPercent: Number,
});

export default mongoose.model("Promo", promoSchema);

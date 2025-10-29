import Promo from "../models/Promo.js";

export const validatePromo = async (req, res) => {
  const { code } = req.body;
  const promo = await Promo.findOne({ code });

  if (!promo) return res.status(400).json({ message: "Invalid promo" });
  res.json({ valid: true, discount: promo.discountPercent });
};

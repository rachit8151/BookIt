import Experience from "../models/Experience.js";

export const getExperiences = async (req, res) => {
  const experiences = await Experience.find();
  res.json(experiences);
};

export const getExperienceById = async (req, res) => {
  const exp = await Experience.findById(req.params.id);
  res.json(exp);
};

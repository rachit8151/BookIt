import { useEffect, useState } from "react";
import api from "../api/api";
import { Link } from "react-router-dom";

export default function Home() {
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    api
      .get("/experiences")
      .then((res) => setExperiences(res.data))
      .catch((err) => console.error("Error fetching experiences:", err));
  }, []);

  if (!experiences.length)
    return <p className="text-center text-gray-500 mt-20">Loading experiences...</p>;

  return (
    <div className="p-8 grid md:grid-cols-3 sm:grid-cols-2 gap-6">
      {experiences.map((exp) => (
        <div key={exp._id} className="bg-white shadow-lg rounded-lg p-4">
          <img
            src={exp.image}
            alt={exp.title}
            className="rounded-lg h-48 w-full object-cover"
          />
          <h2 className="text-xl font-bold mt-2">{exp.title}</h2>
          <p className="text-gray-600">{exp.location}</p>
          <p className="font-semibold text-blue-600">₹{exp.price}</p>
          <Link to={`/details/${exp._id}`}>
            <button className="mt-3 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg">
              View Details
            </button>
          </Link>
        </div>
      ))}
    </div>
  );
}

import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../api/api";

export default function Details() {
  const { id } = useParams();
  const [exp, setExp] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    api.get(`/experiences/${id}`)
      .then((res) => setExp(res.data))
      .catch((err) => console.error("Error fetching experience:", err));
  }, [id]);

  if (!exp) return <p className="text-center mt-20 text-gray-500">Loading...</p>;

  return (
    <div className="p-10 flex flex-col md:flex-row gap-8">
      <img src={exp.image} alt={exp.title} className="rounded-xl w-full md:w-1/2 h-80 object-cover" />
      <div>
        <h1 className="text-3xl font-bold mb-2">{exp.title}</h1>
        <p className="text-gray-700 mb-3">{exp.description}</p>
        <p className="text-blue-600 font-semibold text-lg">₹{exp.price}</p>
        <button
          className="mt-4 bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-lg"
          onClick={() => navigate(`/checkout/${exp._id}`)}
        >
          Book Now
        </button>
      </div>
    </div>
  );
}

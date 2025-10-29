import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../api/api";

export default function Checkout() {
  const { id } = useParams();
  const [form, setForm] = useState({ name: "", email: "", date: "", slot: "" });
  const [promo, setPromo] = useState("");
  const [discount, setDiscount] = useState(0);
  const navigate = useNavigate();

  const handlePromo = async () => {
    try {
      const res = await api.post("/promo/validate", { code: promo });
      setDiscount(res.data.discount);
      alert(`Promo Applied: ${res.data.discount}% off`);
    } catch {
      alert("Invalid promo code");
    }
  };

  const handleBooking = async () => {
    try {
      await api.post("/bookings", {
        experienceId: id,
        userName: form.name,
        email: form.email,
        date: form.date,
        slot: form.slot,
        totalPrice: 1000 - (1000 * discount) / 100, // demo
      });
      navigate("/result?status=success");
    } catch {
      navigate("/result?status=failure");
    }
  };

  return (
    <div className="p-10 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Checkout</h2>

      <div className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Full Name"
          className="border p-2 rounded"
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email"
          className="border p-2 rounded"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <input
          type="date"
          className="border p-2 rounded"
          onChange={(e) => setForm({ ...form, date: e.target.value })}
        />
        <input
          type="text"
          placeholder="Preferred Slot (e.g., 10AM - 12PM)"
          className="border p-2 rounded"
          onChange={(e) => setForm({ ...form, slot: e.target.value })}
        />

        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Promo Code"
            className="border p-2 rounded flex-grow"
            onChange={(e) => setPromo(e.target.value)}
          />
          <button onClick={handlePromo} className="bg-yellow-500 text-white px-3 rounded">
            Apply
          </button>
        </div>

        <button
          onClick={handleBooking}
          className="bg-blue-600 hover:bg-blue-700 text-white py-2 rounded"
        >
          Confirm Booking
        </button>
      </div>
    </div>
  );
}

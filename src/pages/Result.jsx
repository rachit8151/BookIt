import { useLocation, Link } from "react-router-dom";

export default function Result() {
  const query = new URLSearchParams(useLocation().search);
  const success = query.get("status") === "success";

  return (
    <div className="flex flex-col justify-center items-center h-[70vh]">
      {success ? (
        <>
          <h1 className="text-3xl font-bold text-green-600">🎉 Booking Confirmed!</h1>
          <p className="text-gray-600 mt-2">You’ll receive details via email soon.</p>
        </>
      ) : (
        <>
          <h1 className="text-3xl font-bold text-red-600">❌ Booking Failed</h1>
          <p className="text-gray-600 mt-2">Please try again later.</p>
        </>
      )}
      <Link to="/" className="mt-5 text-blue-600 underline">
        Back to Home
      </Link>
    </div>
  );
}

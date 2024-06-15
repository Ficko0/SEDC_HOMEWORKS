import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center h-screen text-center">
      <h1 className="text-4xl font-bold">Page Not Found</h1>
      <h3 className="text-red-600 text-2xl font-medium p-4">404</h3>
      <Link to="/" className="p-3 bg-green-500 text-white rounded-xl hover:bg-green-600 transition">Go To Homepage</Link>
    </div>
  );
}

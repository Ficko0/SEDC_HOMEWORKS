import { Link, NavLink } from "react-router-dom";
import { Continents } from "../common/types/continents.enum";

export default function Header() {
  const continents = Object.values(Continents);

  return (
    <div className="p-10 bg-blue-300 flex items-center justify-between">
      <h1 className="text-3xl font-bold hover:text-white transition">
        <Link to="/">Trip Planner</Link>
      </h1>
      <nav>
        <ul className="flex flex-row p-4 gap-4 text-xl font-medium">
          <li className="hover:text-white transition">
            <Link to="/">Home</Link>
          </li>
          {continents.map((continent) => (
            <li key={continent} className="hover:text-white transition">
              <NavLink
                to={`continent/${continent}`}
                className={({ isActive, isPending }) => {
                  if (isActive) {
                    return "text-gray-300 transition";
                  }
                  if (isPending) {
                    return "text-gray-400 transition";
                  }
                }}
              >
                {continent}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

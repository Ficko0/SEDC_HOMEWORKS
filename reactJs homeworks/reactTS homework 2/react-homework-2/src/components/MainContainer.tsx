import { useContext, useState } from "react";
import { CountryContext } from "../context/country.context";
import CountryCard from "./CountryCard";
import LoadingIcon from "./LoadingIcon";

export default function MainContainer() {
  const { isLoading, country } = useContext(CountryContext);
  const [search, setSearch] = useState("");

  const filteredCountries = country.filter(
    (country) =>
      search === "" ||
      country.name.common.toLowerCase().includes(search.toLowerCase())
  );

  if (isLoading) {
    return <LoadingIcon />;
  }

  return (
    <div>
      <div className="flex justify-center items-center py-3 transition">
        <input
          type="text"
          placeholder="Search Country"
          className="p-2 rounded-xl bg-gray-300"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="grid grid-cols-4 items-center justify-center w-full">
        {filteredCountries.map((country) => (
          <CountryCard country={country} />
        ))}
      </div>
    </div>
  );
}

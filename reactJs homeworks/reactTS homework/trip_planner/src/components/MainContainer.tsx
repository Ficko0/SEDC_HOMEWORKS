import { useState } from "react";
import countryData from "../database/data.json";
import CountryCard from "./CountryCard";

export default function MainContainer() {
  const countries = [...countryData];

  const [search, setSearch] = useState("");

  return (
    <div className="flex flex-col p-5 gap-5">
      <h2 className="p-3 font-bold text-2xl text-center">
        10 Most Popular Tourist Destinations
      </h2>
      <input
        type="text"
        placeholder="Search Country"
        onChange={(e) => setSearch(e.target.value)}
        className="border rounded-xl p-3 border-slate-600"
      />
      <div>
        {countries
          .filter((country) => {
            return search.toLowerCase() === ""
              ? country
              : country.countryName.toLowerCase().includes(search);
          })
          .map((country) => (
            <CountryCard country={country} />
          ))}
      </div>
    </div>
  );
}

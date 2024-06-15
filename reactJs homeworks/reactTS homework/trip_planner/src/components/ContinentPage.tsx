import { useParams } from "react-router-dom";
import { ICountry } from "../common/types/country.interface";
import CountryCard from "./CountryCard";

type ContinentPageProps = {
  country: ICountry[];
};

export default function ContinentPage({ country }: ContinentPageProps) {
  const { continentName: continent } = useParams();

  const filteredCountries: ICountry[] = country.filter(
    (country) => country.continent === continent
  );

  return (
    <div className="p-5 gap-5">
      <h2 className="text-center font-bold text-3xl mb-5">{continent}</h2>
      <div>
        {filteredCountries.map((country) => (
          <CountryCard country={country} />
        ))}
      </div>
    </div>
  );
}

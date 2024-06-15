import { ICountry } from "../common/types/country.interface";

type CountryProps = {
  country: ICountry;
};

export default function CountryCard({ country }: CountryProps) {
  return (
    <div key={country.id} className="p-4 border rounded-xl border-slate-800 mb-5">
      <h2 className="text-2xl font-bold p-2">{country.countryName}</h2>
      <h3 className="text-xl font-medium p-2">{country.capitalCity}</h3>
      <section className="p-2">{country.description}</section>
    </div>
  );
}

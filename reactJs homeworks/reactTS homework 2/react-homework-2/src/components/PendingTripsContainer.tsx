import { Country } from "../common/interface/country.interface";

type PendingTripProps = {
  country: Country;
};

export default function PendingTripsContainer({ country }: PendingTripProps) {
  return (
    <div>
      <div>
        <img src={country.flags.svg} />
      </div>
      <span>{country.name.common}</span>
      <div>
        <h3>Number of Days:</h3>
        <button>+</button>
        <button>-</button>
      </div>
    </div>
  );
}

import { ReactNode, createContext, useEffect, useState } from "react";
import { Country } from "../common/interface/country.interface";
import axios from "axios";

type CountryContextProviderType = {
  children: ReactNode | ReactNode[];
};

type CountryContextType = {
  country: Country[];
  isLoading: boolean;
};

const defaultValues: CountryContextType = {
  country: [],
  isLoading: false,
};

export const CountryContext = createContext<CountryContextType>(defaultValues);

export default function CountryProvider({
  children,
}: CountryContextProviderType) {
  const [country, setCountry] = useState<Country[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((res) => setCountry(res.data))
      .catch((err) => console.error(`Error: ${err}`))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <CountryContext.Provider value={{ country, isLoading }}>
      {children}
    </CountryContext.Provider>
  );
}

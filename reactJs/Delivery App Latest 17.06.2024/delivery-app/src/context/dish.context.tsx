import { ReactNode, createContext } from "react";
import { Dish } from "../common/types/dish.interface";

type DishContextType = {
  greeting: (name: string) => void;
  dishes: Dish[]
};

type DishContextProviderType = {
    childer: 
};

const defaultValues: DishContextType = {
  greeting: () => {},
};

export const DishContext = createContext<DishContextType>(defaultValues);

export default function DishProvider({ children }: { children: ReactNode }) {
  const greeting = (name: string) => `Hello ${name}`;

  return (
    <DishContext.Provider value={{ greeting }}>{children}</DishContext.Provider>
  );
}

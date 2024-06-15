import { Dish } from "../common/types/dish.interface";
import DishCard from "./DishCard";

type TopDishesProps = {
  title: string;
  dishes: Dish[];
};

export default function TopDishes({ title, dishes }: TopDishesProps) {
  return (
    <section className="p-3">
      <h2 className="text-2xl font-bold p-6 text-center">{title}</h2>
      <div className="flex gap-10">
        {dishes.map((dish) => (
          <DishCard dish={dish} />
        ))}
      </div>
    </section>
  );
}

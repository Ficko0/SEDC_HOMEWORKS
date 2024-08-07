import { Dish } from "../common/types/dish.interface";
import TopDishes from "./TopDishes";

type MainComponentProps = {
  dishes: Dish[];
};

export default function MainComponent({ dishes }: MainComponentProps) {
  const popularDishes = [...dishes]
    .sort((a, b) => b.orders - a.orders)
    .slice(0, 5) as Dish[];
  const recentDishes = [...dishes]
    .sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    )
    .slice(0, 5) as Dish[];

  return (
    <div className="p-4">
      <TopDishes title="Top 5 Most Popular Dishes" dishes={popularDishes} />
      <TopDishes title="Top 5 Recent Dishes" dishes={recentDishes} />
    </div>
  );
}

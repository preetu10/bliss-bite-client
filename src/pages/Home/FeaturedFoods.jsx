/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import FoodCard from "./FoodCard";
import { Link } from "react-router-dom";
import {useQuery} from '@tanstack/react-query';
const FeaturedFoods = () => {
  const [food, setFood] = useState([]);

  const { isLoading, error, data } = useQuery({
    queryKey: ['repoData'],
    queryFn: () =>
      fetch('https://bliss-bite-server.vercel.app/get-featured-food').then((res) =>
        res.json()
      ),
  });

  useEffect(() => {
    if (data) {
      setFood(data.slice(0, 6));
    }
  }, [data]);

  if (isLoading) return <span className="loading loading-spinner loading-lg"></span>;
  if (error) return <span>Error: {error.message}</span>;
  return (
    <div>
      <h1 className="text-center text-3xl font-bold mt-3 mb-5 text-[#F5A834]">
        Featured Foods
      </h1>
      <p className="text-center px-4 text-base text-gray-500 font-medium mb-12 max-w-3xl mx-auto ">
        Discover fresh, surplus foods shared by our community. Help reduce waste
        by enjoying these delicious items available near you.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-4">
        {food.map((f, idx) => (
          <FoodCard key={idx} data={f}></FoodCard>
        ))}
      </div>
      <div className="flex flex-row items-center justify-center mx-auto">
        <button
          type="submit"
          className="btn btn-ghost btn-wide my-5  text-center bg-[#f7bb61] text-black text-lg"
        >
          <Link to="/available-foods">Show All Foods</Link>
        </button>
      </div>
    </div>
  );
};

export default FeaturedFoods;

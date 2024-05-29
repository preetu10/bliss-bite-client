import { useLoaderData } from "react-router-dom";
import FoodCard from "./Home/FoodCard";
import { useEffect, useState } from "react";

const AvailableFoods = () => {
  const data = useLoaderData();
  const [foods, setFoods] = useState(data);
  const [displayFoods, setDisplayFoods] = useState(foods);
  const [searchQuery, setSearchQuery] = useState("");
  const [display, setDisplay] = useState(false);

  console.log(foods);
  useEffect(() => {
    document.title = "BlissBite-Available-Foods";
    setDisplayFoods(foods);
  }, [foods]);
  const handleSort = (value) => {
    let sortedFoods = [];
    if (value === "Ascending") {
      sortedFoods = [...foods].sort(
        (a, b) => new Date(a.selectedDate) - new Date(b.selectedDate)
      );
    } else {
      sortedFoods = [...foods].sort(
        (a, b) => new Date(b.selectedDate) - new Date(a.selectedDate)
      );
    }
    setFoods(sortedFoods);
    setDisplayFoods(sortedFoods);
  };

  const handleSearch = () => {
    const filteredFoods = data.filter((food) =>
      food.food_name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFoods(filteredFoods);
    setDisplayFoods(filteredFoods);
  };

  return (
    <div className="my-5 max-w-7xl px-2">
      <h1 className="text-center text-3xl font-medium mt-3 mb-5 text-[#F5A834]">
        Available Foods
      </h1>
      <div className="flex flex-row gap-2 items-center justify-center">
        <input
          type="text"
          name="search"
          onChange={(e) => setSearchQuery(e.target.value)}
          id=""
          placeholder="Search by Food Name"
          className="border-2  rounded-lg  border-gray-400 p-3"
        />
        <button
          onClick={handleSearch}
          className="btn btn-ghost border-2 bg-[#F5A834] text-lg "
        >
          Search
        </button>
      </div>
      <div className="flex flex-col gap-2 md:flex-row justify-between items-center">
        <div className="text-left md:mb-8 mt-5">
          <button 
          onClick={()=>setDisplay(!display)}
          className="btn text-base bg-[#F5A834] text-black pr-2 rounded-lg font-medium">
            Change Layout
          </button>
        </div>
        <div className="text-right mb-8 md:mt-5">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn text-base bg-[#F5A834] text-black pr-2 rounded-lg font-medium"
            >
              Sort by Expiry Date
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content  text-base z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li onClick={() => handleSort("Ascending")}>
                <a>Ascending</a>
              </li>
              <li onClick={() => handleSort("Descending")}>
                <a>Descending</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={`grid ${display?"md:grid-cols-2":"md:grid-cols-3"} grid-cols-1 gap-2 px-2`}>
        {displayFoods.map((f, idx) => (
          <FoodCard key={idx} data={f}></FoodCard>
        ))}
      </div>
    </div>
  );
};

export default AvailableFoods;

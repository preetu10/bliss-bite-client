import { Link } from "react-router-dom";
import { format } from "date-fns";
import {  FaCalendarCheck, FaUser } from "react-icons/fa";
import { FaLocationDot} from "react-icons/fa6";
import { GiMeal } from "react-icons/gi";

const FoodCard = ({ data }) => {
  const date = data.selectedDate;
  const corrDate = format(date, "yyyy-MM-dd");
  return (
    <div className="card  bg-base-100 shadow-xl">
      <figure className="px-5 pt-10">
        <img
          src={data.food_photo}
          alt="food"
          className="rounded-xl w-[270px] h-[300px]"
        />
      </figure>
      <div className="card-body  text-left">
        <h2 className="text-xl font-semibold">{data.food_name}</h2>
          <div className="flex flex-row items-center gap-2">
          <GiMeal />
          <span className="text-black font-medium">
            No of persons to be served:{" "}
          </span>
          {data.food_quantity}
     </div>
        <div className="flex flex-row items-center gap-2">
          <FaCalendarCheck></FaCalendarCheck>
          <span className="text-black font-medium"> Expiry Date:</span>{" "}
          {corrDate}
        </div>
      
        <div className="flex flex-row items-center gap-2">
        <FaLocationDot></FaLocationDot>
          <span className="text-black font-medium">Pickup Location:</span>{" "}
          {data.pickup}
          </div>
     
      <hr className="mb-3 text-black" />

      <div className="flex flex-row gap-4 items-center">
        <FaUser></FaUser>
      <span className="text-black font-medium">Donator:</span>{" "}
        <img
          src={data.donator_image}
          alt="donator"
          className="rounded-full w-7 h-7"
        />
        <p>{data.name}</p>
      </div>
      <hr className=" text-black" />
      </div>
      <div className="card-actions items-center text-center mx-auto mb-5">
        <button className="btn btn-ghost bg-[#f7bb61] text-black font-semibold text-lg">
          <Link to={`/view-food/${data._id}`}>View Details</Link>
        </button>
      </div>
    </div>
  );
};

export default FoodCard;

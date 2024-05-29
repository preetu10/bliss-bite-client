/* eslint-disable react/no-unescaped-entities */
import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { format } from "date-fns";
const MyRequestedFoods = () => {
    const data=useLoaderData();
    useEffect(() => {
        document.title ="BlissBite-My Requested Foods";
      }, [data]);
    return (
        <div className="bg-[#f7f6f6] p-5 rounded-2xl my-5 min-h-48">
      <h1 className="text-center text-3xl font-medium mt-3 mb-5 text-[#F5A834]">
        My Requested Foods
      </h1>
            <div className="overflow-x-auto text-center mx-auto">
        <table className="table mx-auto">
          {/* head */}
          <thead>
            <tr className="text-base text-center">
              <th>Serial No</th>
              <th>Name of Food Item</th>
              <th>Pickup Location</th>
              <th>Expiry Date</th>
              <th>Donator's Name</th>
              <th>Donator's Email</th>
              <th>Request Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {data.map((food, idx) => {
              return (
                <tr key={idx} className="text-base hover text-center">
                  <th>{idx + 1}</th>
                  <td>{food.food_name}</td>
                  <td>{food.pickup}</td>
                  <td>{format(food.selectedDate, "yyyy-MM-dd")}</td>
                  <td>{food.name}</td>
                  <td>{food.email}</td>
                  <td>{format(food.request_date, "yyyy-MM-dd")}</td>
                  <td className="text-[#F5A834] font-bold text-lg">{food.status}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
          </div>
    );
};

export default MyRequestedFoods;
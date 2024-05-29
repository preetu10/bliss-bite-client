import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { format } from "date-fns";
const ManageMyFoods = () => {
  const data = useLoaderData();
  const [foods, setFoods] = useState(data);
  console.log(foods);
  useEffect(() => {
    document.title="BlissBite-My-Foods";
  }, []);
  const handleDelete=(id)=>{
    console.log(id);
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
            fetch(`https://bliss-bite-server.vercel.app/delete-food/${id}`,{
                method: "DELETE",
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
                if(data.deletedCount>0){
                   toast.success("Deleted successfully!");
                   const remaining=foods.filter(food =>food._id !== id);
                   setFoods(remaining);
                }
            })
        }
      });
  }
  return (
    <div className="bg-[#f7f6f6] p-5 rounded-2xl my-5 min-h-48">
      <h1 className="text-center text-3xl font-medium mt-3 mb-5 text-[#F5A834]">
        My Foods For Donation
      </h1>
            <div className="overflow-x-auto text-center mx-auto">
        <table className="table mx-auto">
          {/* head */}
          <thead>
            <tr className="text-base text-center">
              <th>Serial No</th>
              <th>Name of Food Item</th>
              <th>Quantity<br></br><span className="text-sm text-gray-500">(No. of persons to be served)</span></th>
              <th>Pickup Location</th>
              <th>Expiry Date</th>
              <th>Availability</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {foods.map((food, idx) => {
              return (
                <tr key={idx} className="text-base hover text-center">
                  <th>{idx + 1}</th>
                  <td>{food.food_name}</td>
                  <td>{food.food_quantity}</td>
                  <td>{food.pickup}</td>
                  <td>{format(food.selectedDate, "yyyy-MM-dd")}</td>
                  <td>{food.stockStatus}</td>
                  <td>
                    <button className="btn bg-[#e9aa52] text-white">
                      <Link to={`/update-food/${food._id}`}>
                        Update
                      </Link>
                    </button>
                  </td>
                  <td>
                    <button onClick={()=>handleDelete(food._id)} className="btn bg-red-500 text-white">
                     Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
          </div>
        );
      
};

export default ManageMyFoods;
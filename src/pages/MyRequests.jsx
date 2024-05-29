import { useEffect, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { format } from "date-fns";


const MyRequests = () => {
    const data = useLoaderData();
  const [foods, setFoods] = useState(data);
  const navigate = useNavigate();
  console.log(foods);
  useEffect(() => {
    document.title="BlissBite-Requests-for-foods";
  }, []);

  const handleAccept=(id)=>{
    const status="Accepted";
    console.log(id);
    Swal.fire({
        title: "Do you want to accept the request?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, reject it!"
      }).then((result) => {
        if (result.isConfirmed) {
            fetch(`https://bliss-bite-server.vercel.app/accept-request/${id}`,{
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(status),
              })
                .then((res) => res.json)
                .then((data) => {
                  console.log(data);
                  toast.success("Updated successfully");
                  navigate("/");
                })
                .catch((err) => {
                  console.log(err);
                  toast.error("Failed to update. Try again later");
                });
        }
      });
  }
  const handleDelete=(id)=>{
    const status="Rejected";
    console.log(id);
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, reject it!"
      }).then((result) => {
        if (result.isConfirmed) {
            fetch(`https://bliss-bite-server.vercel.app/reject-request/${id}`,{
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(status),
        
            
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
                if(data.deletedCount>0){
                   toast.success("Request Rejected!");
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
          Requests for My Food
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
                <th>Availability</th>
                <th>Requested By</th>
                <th>Accept</th>
                <th>Reject</th>
              </tr>
            </thead>
            <tbody>
              {foods.map((food, idx) => {
                return (
                  <tr key={idx} className="text-base hover text-center">
                    <th>{idx + 1}</th>
                    <td>{food.food_name}</td>
                    <td>{food.pickup}</td>
                    <td>{format(food.selectedDate, "yyyy-MM-dd")}</td>
                    <td>{food.stockStatus}</td>
                    <td>{food.requested_by}</td>
                    <td>
                      <button onClick={()=>handleAccept(food._id)} className="btn bg-[#e9aa52] text-white">
                     Accept
                      </button>
                    </td>
                    <td>
                      <button onClick={()=>handleDelete(food._id)} className="btn bg-red-500 text-white">
                       Reject
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

export default MyRequests;
/* eslint-disable react/no-unescaped-entities */
import { useLoaderData, useNavigate } from "react-router-dom";
import { format } from "date-fns";
import { FaCalendarCheck, FaUser } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { GiMeal } from "react-icons/gi";
import { SlNote } from "react-icons/sl";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const ViewFood = () => {
  const data = useLoaderData();
  const { user } = useContext(AuthContext);
  const date = data.selectedDate;
  const corrDate = format(date, "yyyy-MM-dd");
  const today = new Date();
  const day = today.toISOString().split("T")[0];
  const [notes, setNotes] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    document.title =`${data.food_name}`;
  }, [data]);

const handleSubmit = () => {
    const request={
        food_name:data.food_name,
        food_id:data._id,
        food_photo:data.food_photo,
        email:data.email,
        name:data.name,
        requested_by:user.email,
        selectedDate:data.selectedDate,
        request_date:today,
        pickup:data.pickup,
        notes:notes,
        status:"Requested"
    }
    console.log(request);
    fetch("https://bliss-bite-server.vercel.app/request-food", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(request),
      })
        .then((res) => res.json)
        .then((data) => {
          console.log(data);
          toast.success("Request Sent Successfully");
          navigate("/");
        })
        .catch((err) => {
          console.log(err);
          toast.error("Failed to make request. Try again later");
        });
    
}


  return (
    <div className="hero py-16 bg-[#f7f6f6] px-2 mb-8 mt-4 rounded-xl">
      <div className="hero-content flex-col lg:flex-row-reverse gap-16">
        <img
          src={data.food_photo}
          className=" w-[330px] h-[350px] rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold">{data.food_name}</h1>
          <p className="py-6"></p>
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
            <span className="text-black font-medium">
              Pickup Location:
            </span>{" "}
            {data.pickup}
          </div>
          <div className="flex flex-row items-center gap-2 my-3">
            <SlNote />
            <p className="text-black font-medium">Additional Notes:</p>{" "}
          </div>
          <p className="max-w-2xl">{data.additional_notes}</p>

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
          <button
            type="submit"
            className="btn btn-ghost btn-wide my-5  text-center bg-[#F5A834] text-black text-lg"
            onClick={() => document.getElementById("my_modal_5").showModal()}
          >
            Request
          </button>
        </div>
      </div>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle p-4">
        <div className="modal-box">
            <h1 className="text-center font-bold text-2xl my-3">Want to make a request for this food?</h1>
          <div>
            <label className="label">
              <span className="label-text">Name of Food</span>
            </label>
            <input
              type="text"
              defaultValue={data.food_name}
              className="input input-bordered w-full"
              disabled={true}
            />
          </div>
          <div>
            <label className="label">
              <span className="label-text">Image of Food</span>
            </label>
            <input
              type="text"
              defaultValue={data.food_photo}
              className="input input-bordered w-full"
              disabled={true}
            />
          </div>
          <div>
            <label className="label">
              <span className="label-text">ID of Food</span>
            </label>
            <input
              type="text"
             
              defaultValue={data._id}
              className="input input-bordered w-full"
              disabled={true}
            />
          </div>
          <div>
            <label className="label">
              <span className="label-text">Donator's Email</span>
            </label>
            <input
              type="email"
              defaultValue={data.email}
              className="input input-bordered w-full"
              disabled={true}
            />
          </div>
          <div>
            <label className="label">
              <span className="label-text">Donator's Name</span>
            </label>
            <input
              type="text"
              defaultValue={data.name}
              className="input input-bordered w-full"
              disabled={true}
            />
          </div>
          <div>
            <label className="label">
              <span className="label-text">Your Email</span>
            </label>
            <input
              type="Email"
              defaultValue={user.email}
              className="input input-bordered w-full"
              disabled={true}
            />
          </div>
          <div>
            <label className="label">
              <span className="label-text">Request Date</span>
            </label>
            <input
              defaultValue={day}
              className="input input-bordered w-full"
              disabled={true}
            />
          </div>
          <div>
            <label className="label">
              <span className="label-text">Pickup Location</span>
            </label>
            <input
              type="text"
              defaultValue={data.pickup}
              className="input input-bordered w-full"
              disabled={true}
            />
          </div>
          <div>
            <label className="label">
              <span className="label-text">Expiry Date</span>
            </label>
            <input
              defaultValue={corrDate}
              className="input input-bordered w-full"
              disabled={true}
            />
          </div>
          <div className=" mx-auto">
            <form method="dialog">
              <div className=" my-2 px-3">
                <label className="label">
                  <span className="label-text">Additional Notes</span>
                </label>
                <textarea
                  name="additional_notes"
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Write here..."
                  className="textarea textarea-bordered textarea-sm w-full "
                ></textarea>
              </div>
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
              <div className="flex flex-row items-center">
                <button onClick={()=>handleSubmit()} className="btn bg-[#F5A834] text-center mx-auto ">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default ViewFood;

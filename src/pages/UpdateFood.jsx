import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useLoaderData, useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const UpdateFood = () => {
  const data = useLoaderData();
  const { user } = useContext(AuthContext);
  const [stockStatus, setStockStatus] = useState(data.stockStatus);
  const [selectedDate, setSelectedDate] = useState(data.selectedDate);
  const navigate = useNavigate();
  console.log(data);

  useEffect(() => {
    document.title = `BlissBite-Update-${data.food_name}`;
  }, [data]);

  const handleUpdate = (e) => {
    e.preventDefault();
    const food_name = e.target.food_name.value;
    const food_photo = e.target.food_photo.value;
    const food_quantity = e.target.food_quantity.value;
    const pickup = e.target.pickup.value;
    const additional_notes = e.target.additional_notes.value;
    const name = user.displayName;
    const email = user.email;
    const donator_image = user.photoURL;
    const food = {
      food_name,
      food_photo,
      additional_notes,
      food_quantity,
      pickup,
      name,
      email,
      donator_image,
      stockStatus,
      selectedDate,
    };
    console.log(food);
    fetch(`https://bliss-bite-server.vercel.app/update-food/${data._id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(food),
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
  };
  return (
    <div className="bg-[#f7f6f6] p-5 rounded-2xl my-5">
      <h1 className="text-center text-3xl font-medium mt-8 mb-5 text-[#F5A834]">
        Update Information of Your Food
      </h1>
      <form onSubmit={handleUpdate} className="mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-5 foods-stretch justify-center ">
          <div className="">
            <label className="label">
              <span className="label-text">Name of Your food</span>
            </label>
            <input
              type="text"
              name="food_name"
              defaultValue={data.food_name}
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="">
            <label className="label">
              <span className="label-text">Image of Your food</span>
            </label>
            <input
              type="text"
              name="food_photo"
              defaultValue={data.food_photo}
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="">
            <label className="label">
              <span className="label-text">
                Quantity of Food You Want to Donate (Number of persons to be served)
              </span>
            </label>
            <input
              type="number"
              name="food_quantity"
              defaultValue={data.food_quantity}
              className="input input-bordered w-full"
              required
            />
          </div>
          <div>
            <label className="label">
              <span className="label-text">Pickup Location</span>
            </label>
            <input
              type="text"
              name="pickup"
              defaultValue={data.pickup}
              className="input input-bordered w-full"
              required
            />
          </div>
          <div>
            <label className="label">
              <span className="label-text">Time of Expire</span>
            </label>
            <DatePicker
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              defaultValue={data.selectedDate}
              className="border-2 p-2"
            />
          </div>
          <div>
            <label className="label">
              <span className="label-text">Your Image</span>
            </label>
            <input
              type="text"
              name="donator_image"
              defaultValue={data.donator_image}
              className="input input-bordered w-full"
              disabled={true}
            />
          </div>

          <div>
            <label className="label">
              <span className="label-text">Your email</span>
            </label>
            <input
              type="email"
              name="email"
              defaultValue={data.email}
              className="input input-bordered w-full"
              disabled={true}
            />
          </div>
          <div>
            <label className="label">
              <span className="label-text">Your Name</span>
            </label>
            <input
              type="text"
              name="name"
              defaultValue={data.name}
              className="input input-bordered w-full"
              disabled={true}
            />
          </div>
          <div className="">
            <label className="label">
              <span className="label-text">
                {" "}
                Select Stock Status of Your food
              </span>
            </label>
            <div className="flex flex-row items-center gap-3">
              <div className="flex flex-row gap-1 items-center">
                <input
                  type="radio"
                  name="stockStatus"
                  value="Available"
                  className="radio"
                  onChange={(e) => setStockStatus(e.target.value)}
                  checked={stockStatus === "Available"}
                />
                <p>Available</p>
              </div>
              <div className="flex flex-row gap-1 items-center">
                <input
                  type="radio"
                  name="stockStatus"
                  value="Not Available"
                  className="radio"
                  onChange={(e) => setStockStatus(e.target.value)}
                  checked={stockStatus === "Not Available"}
                />
                <p>Not Available</p>
              </div>
            </div>
          </div>
        </div>
        <div className=" my-5 px-5">
          <label className="label">
            <span className="label-text">Additional Notes</span>
          </label>
          <textarea
            name="additional_notes"
            defaultValue={data.additional_notes}
            className="textarea textarea-bordered textarea-md w-full "
          ></textarea>
        </div>
        <div className="flex flex-row items-center justify-center mx-auto">
          <button
            type="submit"
            className="btn btn-ghost btn-wide my-5  text-center bg-[#F5A834] text-black text-lg"
            required
          >
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateFood;

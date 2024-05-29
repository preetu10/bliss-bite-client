import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const AddFood = () => {
  const { user } = useContext(AuthContext);
  const [stockStatus, setStockStatus] = useState("Available");
  const [selectedDate, setSelectedDate] = useState(null);
  const navigate = useNavigate();
  console.log(user);

  useEffect(() => {
    document.title = "BlissBite-Add-Food";
  }, []);
  const handleAdd = (e) => {
    e.preventDefault();
    const food_name = e.target.food_name.value;
    const food_photo = e.target.food_photo.value;
    const food_quantity = e.target.food_quantity.value;
    const pickup = e.target.pickup.value;
    const additional_notes = e.target.additional_notes.value;
    const name = user.displayName;
    const email = user.email;
    const donator_image = user.photoURL;
    const item = {
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
   // console.log(item);
    fetch("https://bliss-bite-server.vercel.app/add-food", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(item),
    })
      .then((res) => res.json)
      .then((data) => {
        console.log(data);
        toast.success("Added successfully");
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Failed to add. Try again later");
      });
  };
  return (
    <div className="bg-[#f7f6f6] p-5 rounded-2xl my-5">
      <h1 className="text-center text-3xl font-medium mt-8 mb-5 text-[#F5A834]">
        Add Your Food For Donation
      </h1>
      <p className="text-center px-4 text-base text-gray-500 font-medium mb-8 max-w-4xl mx-auto ">
        Share your surplus food with the community to help reduce waste and
        provide meals for those in need. Simply upload details and connect with
        others who can benefit from your generosity.
      </p>

      <form onSubmit={handleAdd} className="mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-5 items-stretch justify-center ">
          <div className="">
            <label className="label">
              <span className="label-text">Name of Your Food Item</span>
            </label>
            <input
              type="text"
              name="food_name"
              placeholder="Enter the name of your food item"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="">
            <label className="label">
              <span className="label-text">Image of Your Food Item</span>
            </label>
            <input
              type="text"
              name="food_photo"
              placeholder="Enter the photoURL of your food item"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="">
            <label className="label">
              <span className="label-text">
                Quantity of Food You Want to Donate  (Number of persons to be served)
              </span>
            </label>
            <input
              type="number"
              name="food_quantity"
              placeholder="Enter quantity of food you want to donate"
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
              placeholder="Enter the location to pick up the food"
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
              placeholderText="Select a date"
              className="border-2 p-2"
              required
            />
          </div>
          <div>
            <label className="label">
              <span className="label-text">Your Image</span>
            </label>
            <input
              type="text"
              name="donator_image"
              defaultValue={user.photoURL}
              className="input input-bordered w-full"
              disabled={true}
            />
          </div>
          <div>
            <label className="label">
              <span className="label-text">Your Email</span>
            </label>
            <input
              type="email"
              name="email"
              defaultValue={user.email}
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
              defaultValue={user.displayName}
              className="input input-bordered w-full"
              disabled={true}
            />
          </div>

          <div className="">
            <label className="label">
              <span className="label-text">
                {" "}
                Select Stock Status of Your Food Item
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
            placeholder="Write Here"
            className="textarea textarea-bordered textarea-md w-full "
          ></textarea>
        </div>
        <div className="flex flex-row items-center justify-center mx-auto">
          <button
            type="submit"
            className="btn btn-ghost btn-wide my-5 text-center bg-[#F5A834] text-white text-lg"
            required
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddFood;

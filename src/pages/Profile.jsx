import { useContext, useEffect } from "react";
import { AuthContext } from "../provider/AuthProvider";
const Profile = () => {
const {user}=useContext(AuthContext);
useEffect(() =>{
    document.title=`BlissBite-${user.displayName}`
},[user])

  return (
    <div className="card bg-base-100 shadow-2xl shadow-[#f7e0e0] py-4 my-5">
      <figure className="px-10 pt-10">
        <img
          src={user.photoURL}
          alt="user image"
          className=" rounded-xl w-72 h-72"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{user.displayName}</h2>
        <p className="">{user.email}</p>
       
      </div>
    </div>
  );
};

export default Profile;
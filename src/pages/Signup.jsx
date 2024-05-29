import { useContext,useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
 import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaEye,FaEyeSlash } from "react-icons/fa";
 import { updateProfile } from "firebase/auth";
import { AuthContext } from "../provider/AuthProvider";
const Signup = () => {
const {createUser,logout}=useContext(AuthContext)
const [showPW,setShowPW]=useState(false);
 const navigate=useNavigate();

useEffect(() => {
  document.title="BlissBite-SignUp";
},[]);

const handleRegister = (e) => {
    e.preventDefault();
    const accepted=e.target.terms.checked;
    const name=e.target.name.value;
    const photoURL=e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    const passwordRegex = /(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!passwordRegex.test(password)) {
      toast.error("Password must contain at least one uppercase letter, one lowercase letter, and be at least 6 characters long");
      return;
    }

    if (!accepted) {
      toast.info("Please accept our terms and conditions");
      return;
    }
    createUser(email,password)
        .then((res)=>{
      updateProfile(res.user,{
        displayName:name,
        photoURL:photoURL
      })
      .then(()=>{
        logout().
        then(()=>console.log("You have successfully logged out!"))
        .catch((err)=>console.log(err));
        toast.success("You have successfully registered!");
        navigate("/login");
      })
      .catch(err=>{
        console.error(err);
        toast.error("something went wrong.try again later");
      })
    })
    .catch(err=>{
      console.error(err);
      toast.error("You may already have an account. Try to login.");
    })   
}
    return (
        <div className="flex flex-col items-center justify-center px-2">
        <div className="w-full py-6 rounded-xl border-[#CC935C] border-1 max-w-lg shadow-2xl shadow-[#b79b7c] bg-[#fcf1ea] my-6">
        <p className="text-4xl font-bold text-center mx-auto mt-5">
          Bliss<span className="text-[#F5A834]">Bite</span>
        </p>
        <p className="text-center font-semibold text-3xl  mb-2 mt-5">
         Please Sign Up
          </p>
          <form className="card-body" onSubmit={handleRegister}>
          <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="input input-bordered"
                name="name"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Enter your email address"
                className="input input-bordered"
                name="email"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                placeholder="Enter your photo URL"
                className="input input-bordered"
                name="photo"
                required
              />
            </div>
            <div className="form-control relative">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type={showPW?"text":"password"}
                placeholder="Enter your password"
                className="input input-bordered"
                name="password"
                required
              />
              <span className="absolute top-12 right-5" onClick={()=>setShowPW(!showPW)}>{showPW?<FaEyeSlash></FaEyeSlash>:<FaEye></FaEye>}</span>
            </div>
            <div className="mb-3">
              <input type="checkbox" name="terms" id="terms" />
              <label htmlFor="terms" className="ml-3">I accept all terms and conditions of this website.</label>
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-[#F5A834] font-semibold text-lg text-black">Register</button>
            </div>
          </form>
          <hr/>
          <div>
              <p className="text-center font-base text-base mb-2 mt-5">Already have an account? Please <Link to="/login" className="font-bold text-[#F5A834]">Log In</Link></p>
          </div>
        </div>
      </div>
    );
};

export default Signup;
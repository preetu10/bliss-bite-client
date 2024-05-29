/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from "react";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { Link,  useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { AuthContext } from "../provider/AuthProvider";
import login from "../assets/login.jpg"
import { motion } from "framer-motion";
import axios from "axios";
const Login = () => {
    const {
      signInWithGoogle,
      signInWithGithub,
      signInUser } = useContext(AuthContext);

  const [showPW, setShowPW] = useState(false);
  const navigate = useNavigate();


  useEffect(() => {
    document.title = "BlissBite-LogIn";
  }, []);

  const handleLogIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    signInUser(email, password)
      .then(() => {
        toast.success("You have successfully logged in.");
          navigate("/");
      })
      .catch((error) => {
        console.error(error);
        toast.error("Incorrect email or password. Please try again.");
      });
  };

  const handleGoogle = () => {
    signInWithGoogle()
      .then(() => {
        toast.success("You have successfully logged in.");
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
        toast.error("Failed to log in with Google. Please try again.");
      });
  };

  const handleGithub = () => {
    signInWithGithub()
      .then(() => {
        toast.success("You have successfully logged in.");
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
        toast.error("Failed to log in with Github. Please try again.");
      });
  };
    return (
        <div className="hero min-h-screen mt-8">
        <div className="hero-content flex-col lg:flex-row md:gap-12 justify-between">
          <div className="text-center lg:text-left">
          <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 1,
        delay: 0.2,
        ease: [0, 0.71, 0.2, 1.01]
      }}
    >
         <img src={login} alt="" className=""/>
         </motion.div>
        
          </div>
      <div className="w-full py-6 rounded-xl  max-w-xl shadow-2xl  bg-[#fcf1ea] my-6">
        <p className="text-center font-semibold text-3xl  mb-2 mt-5">
         Please Log In
        </p>
        <form className="card-body" onSubmit={handleLogIn}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email address"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control relative">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type={showPW ? "text" : "password"}
              name="password"
              placeholder="Enter your password"
              className="input input-bordered"
              required
            />
            <span
              className="absolute top-12 right-5"
              onClick={() => setShowPW(!showPW)}
            >
              {showPW ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
            </span>
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-[#F5A834] text-lg font-semibold text-black">Login</button>
          </div>
        </form>
        <hr></hr>
        <div className="text-center my-4">
          <button
            onClick={handleGoogle}
            className="btn bg-[#F5A834] mb-1 text-black text-base font-semibold p-3"
          >
            <FaGoogle></FaGoogle>
            Log In With Google
          </button>
          <p className="mb-1">OR</p>
          <button
            onClick={handleGithub}
            className="btn bg-[#F5A834] text-black text-base font-semibold p-3"
          >
            <FaGithub></FaGithub>
            Log In With Github
          </button>
        </div>
        <hr />
        <div>
          <p className="text-center font-base text-base mb-2 mt-5">
            Do not have an account? Please{" "}
            <Link to="/signup" className="font-bold text-[#F5A834]">
              Sign Up
            </Link>
          </p>
        </div>
   
    </div>
        </div>
      </div>
    );
};

export default Login;
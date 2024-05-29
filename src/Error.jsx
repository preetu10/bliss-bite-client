import Lottie from 'lottie-react';
import animationData from './assets/Animation - 1715457646226.json';
import { Link } from 'react-router-dom';
const Error = () => {
   
    return (
        <div className='text-center'>
              <Lottie animationData={animationData} className='w-1/3 h-1/2 mx-auto mt-24'/>
              <button className="btn bg-[#F5A834] mt-8 font-bold">
             <Link to='/'>
             Go to Home
             </Link>
            </button>
        </div>
    );
};

export default Error;
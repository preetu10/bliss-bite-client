import { useEffect } from "react";
import Banner from "./Banner";
import FeaturedFoods from "./FeaturedFoods";
import AboutUs from "./AboutUs";
import OurTeam from "./OurTeam";
import {
    QueryClient,
    QueryClientProvider,
   
  } from '@tanstack/react-query';
  
  const queryClient = new QueryClient();
const Home = () => {
    useEffect   (() =>{
        document.title="BlissBite"
    },[]);
    return (
        <div>
            <Banner></Banner>
            <QueryClientProvider client={queryClient}>
            <FeaturedFoods></FeaturedFoods>
            </QueryClientProvider>
            <AboutUs></AboutUs>
            <OurTeam></OurTeam>
        </div>
    );
};

export default Home;
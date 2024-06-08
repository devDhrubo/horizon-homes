import Homes from "../../components/Homes/Homes";
import Slider from "../../components/Slider/Slider";
import {useLoaderData} from "react-router-dom";
import Work from "../Work/Work";
import Review from "../Review/Review";
import {Helmet} from "react-helmet";
export default function Home() {

  const homes = useLoaderData();
  console.log(homes);

  return (
    <div className="">
      <Slider></Slider>
      <div>
      <h2 data-aos="fade-up" className="text-3xl text-center font-semibold mt-7 mb-2">Discover Our Best Deals</h2>
          <p data-aos="fade-up" className="text-center mb-10">Find Your Real Home Now</p>
      </div>   

      {/* home section */}

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 container mx-auto gap-10 mb-10">
      {
        homes.map(home => <Homes key={home.id} homes={home}>
          
        </Homes>)
      }
      </div>
      <div data-aos="fade-up" className="container mx-auto mt-20">
      <h2 className="text-4xl mt-7 mb-2">How it works</h2>
      <h2 className="text-5xl ">Find a perfect home</h2>
      </div> 
      <Work></Work>

      <div>
      <h2 data-aos="fade-up" className="text-3xl text-center font-semibold mt-7 mb-2">What Our Client Says</h2>
          <p data-aos="fade-up" className="text-center mb-10">Listen From Our Beautiful Clients</p>
      </div> 
      <Review></Review>
      <Helmet>
        <title>HorizonHomes | Your Gateway to Limitless Living</title>
      </Helmet>
    </div>
    
    
  );
}

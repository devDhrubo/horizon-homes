import { MdOutlineHomeWork } from "react-icons/md";
import { RiHomeOfficeLine } from "react-icons/ri";
import { IoDocumentTextOutline } from "react-icons/io5";
import { GiHouseKeys } from "react-icons/gi";
const Work = () => {
  return (
    <div className="container grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-14 lg:px-14 lg:py-10">
      <div data-aos="fade-right" className="card lg:w-96 w-72 mt-10">
          <MdOutlineHomeWork className="text-7xl ml-8"></MdOutlineHomeWork>
        <div className="card-body">
          <h2 className="text-left text-3xl">Find real estate</h2>
          <p className="mr-4">Find your dream property with ease! Discover listings, compare prices, and receive expert guidance from trusted agents</p>
        </div>
      </div>
      <div data-aos="fade-right" className="card lg:w-96 w-72 mt-10">
          <RiHomeOfficeLine className="text-7xl ml-8"></RiHomeOfficeLine>
        <div className="card-body">
          <h2 className="text-left text-3xl">Meet relator</h2>
          <p className="mr-4">Meet your dedicated realtor—experienced, knowledgeable, and committed to guiding you through every step of your real estate journey..</p>
        </div>
      </div>
      <div  data-aos="fade-right" className="card lg:w-96 w-72  lg:mt-10">
          <IoDocumentTextOutline className="text-7xl ml-8"></IoDocumentTextOutline>
        <div className="card-body">
          <h2 className="text-left text-3xl">Documents</h2>
          <p className="mr-4">Organize essential documents with ease: contracts, deeds, and records. Stay prepared for smooth, hassle-free real estate transactions.</p>
        </div>
      </div>
      <div  data-aos="fade-right" className="card lg:w-96 w-72  lg:mt-10">
          <GiHouseKeys className="text-7xl ml-8"></GiHouseKeys>
        <div className="card-body">
          <h2 className="text-left text-3xl">Take the keys</h2>
          <p className="mr-4">Take the keys and step into your new home! Experience the joy of owning your perfect property.</p>
        </div>
      </div>
    </div>
  );
};

export default Work;

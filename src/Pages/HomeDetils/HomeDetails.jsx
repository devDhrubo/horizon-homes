import { useLoaderData, useParams } from "react-router-dom";
import { AiOutlineDollar } from "react-icons/ai";
import { LuTriangleRight } from "react-icons/lu";
import { IoLocationOutline } from "react-icons/io5";
import {Helmet} from "react-helmet";
const HomeDetails = () => {
  const { id } = useParams();
  const homes = useLoaderData();

  const idInt = parseInt(id);
  const {
    estate_title,
    segment_name,
    image,
    description,
    price,
    status,
    area,
    location,
    facilities,
  } = homes;

  const home = homes.find((home) => home.id === idInt);

  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 card card-side lg:p-20 bg-base-100 shadow-xl mb-10">
      <figure className="p-4">
              <img
                  className="rounded-xl"
          src={home.image}
        />
      </figure>
      <div className="card-body">
              <h2 className="card-title text-4xl">{home.estate_title}</h2>
              <div className="flex items-center gap-3">
              <div className="badge badge-primary">{home.status}</div>
              <div className="badge badge-accent">{home.segment_name}</div>
              </div>
              <p>{home.description}</p>
              <p>
                  <span className="font-bold">Facilities:</span>
                  {home.facilities.map(fac => <li key={fac.id}>{ fac}</li>)}
              </p>
              <div className="flex items-center text-sm">
                  <p className="flex items-center gap-1"><AiOutlineDollar className="text-lg"></AiOutlineDollar>{ home.price}</p>
                  <p className="flex items-center gap-1"><LuTriangleRight className="text-lg"/>{ home.area}</p>
                  <p className="flex items-center gap-1"><IoLocationOutline className="text-xl"/>{ home.location}</p>
              </div>
        <div className="card-actions">
        <button className="px-4 py-2 bg-green-500 rounded-lg text-white mt-3">Buy Now</button>
        </div>
      </div>
      <Helmet>
        <title>Property Details</title>
      </Helmet>
    </div>
  );
};

export default HomeDetails;

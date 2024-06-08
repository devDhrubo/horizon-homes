import { Link } from "react-router-dom";

const Homes = ({ homes }) => {
  const { estate_title, id, image, status, segment_name, description } = homes;

  return (
    <div id="homes" data-aos="fade-up" className="card lg:w-96 w-72 mx-auto bg-base-100 h-[400px] shadow-xl">
      <figure>
        <img className="h-52 w-full" src={image} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{estate_title}</h2>
        <div className="flex items-center gap-4">
          <div className="badge badge-primary">{status}</div>
          <div className="badge badge-accent">{segment_name}</div>
        </div>
        {description.length > 100 ? (
          <p>
            {description.slice(0, 50)}{" "}
            <span className="text-blue-500">Read More...</span>
          </p>
        ) : (
          <p>{description}</p>
        )}
        <div className="card-actions">
          <Link to={`/homes/${id}`}>
            <button className="px-3 py-2 text-white bg-green-500 rounded-lg">
              View Property
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Homes;

import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Helmet } from "react-helmet";

const UserProfile = () => {
    const { user, updateUserProfile } = useContext(AuthContext);
    return (
        <div>
        <h2 className="text-2xl font-bold text-center mt-5">
       Your Profile Details
        </h2>
  
        <div>
          <div className="card w-96 bg-base-100 shadow-xl mx-auto my-10">
            <figure className="rounded-full w-30 h-30">
              <img src={user.photoURL} className="rounded-xl mt-4" />
            </figure>
            <div className="card-body items-center text-center">
              <form>
              <label className="input input-bordered flex items-center gap-2 mb-2">
                  <input type="text" className="grow" value={user.displayName} />
                </label>
              <label className="input input-bordered flex items-center gap-2 mb-2">
                 <input type="text" className="grow" value={user.email} />
                </label>
              <label className="input input-bordered flex items-center gap-2 mb-2">
                 <input type="text" className="grow" value={user.photoURL} />
                </label>
                <div>
                </div>
              </form>
            </div>
          </div>
  
          <div></div>
        </div>
        <Helmet>
          <title>Your Profile Details</title>
        </Helmet>
      </div>
    );
};

export default UserProfile;
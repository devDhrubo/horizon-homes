import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Helmet } from "react-helmet";
import Swal from 'sweetalert2';
const UpdateProfile = () => {
  const { user, updateUserProfile } = useContext(AuthContext);


  const updateData = (e) => {
    e.preventDefault();
    updateUserProfile(user.displayName, user.photoURL)
      .then(() => {
        Swal.fire("Profile Updated");
      })
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-center mt-5">
     Update Your Profile Details
      </h2>
      <div>
        <div className="card w-96 bg-base-100 shadow-xl mx-auto my-10">
          <div className="card-body items-center text-center">
            <form onSubmit={updateData}>
            <label className="input input-bordered flex items-center gap-2 mb-2">
                <input type="text" className="grow" placeholder={user.displayName} />
              </label>
            <label className="input input-bordered flex items-center gap-2 mb-2">
                <input type="text" className="grow" placeholder={user.photoURL} />
              </label>
              <div>
              </div>
              <button className="px-3  rounded-lg py-2 bg-green-500 text-white">
              Update
            </button>
            </form>
          </div>
        </div>

        <div></div>
      </div>
      <Helmet>
        <title>Update Your Profile</title>
      </Helmet>
    </div>
  );
};

export default UpdateProfile;

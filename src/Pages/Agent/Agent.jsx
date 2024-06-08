import { CiLocationOn, CiPhone, CiUser } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";
import { Helmet } from "react-helmet";
import Swal from "sweetalert2";
const Agent = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold text-center mt-5 ">Meet Our Agents</h2>
      <div className="lg:flex justify-around lg:p-20 mb-5 ">
        <div className="card w-72 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <div className="avatar">
              <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src="https://i.ibb.co/YDfY72Y/images.jpg" />
              </div>
            </div>
          </figure>
          <div className="card-body">
            <div className="flex items-left gap-1">
              <CiUser></CiUser>
              <p>Oliver</p>
            </div>
            <div className="flex items-center gap-1">
              <CiLocationOn></CiLocationOn>
              <p>Rampling </p>
            </div>
            <div className="flex items-center gap-1">
              <MdOutlineEmail></MdOutlineEmail>
              <p>oliver.rampling@gmail.com</p>
            </div>

            <div className="card-actions mx-auto">
              {/* <button className=" flex items-center gap-1 px-3 rounded-lg py-2 bg-green-500 text-white mt-5">
              <CiPhone></CiPhone> Call Now 
            </button> */}
              {/* Open the modal using document.getElementById('ID').showModal() method */}
              <button
                className="px-3 mt-4 rounded-lg py-2 bg-green-500 text-white"
                onClick={() =>
                  document.getElementById("my_modal_1").showModal()
                }
              >
                Contact Now
              </button>
              <dialog id="my_modal_1" className="modal">
                <div className="modal-box">
                  <h3 className="font-bold text-lg">Thanks For Contacting With Us</h3>
                  <div className="modal-action">
                    <form method="dialog">
                      {/* if there is a button in form, it will close the modal */}
                      <button className="btn">Close</button>
                    </form>
                  </div>
                </div>
              </dialog>
            </div>
          </div>
        </div>

        <div className="card w-72 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <div className="avatar">
              <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src="https://i.ibb.co/C8yYyZy/360-F-460918802-XVCym-Fr7-Mozi-Fpn-Inb-TDvrlbl-Yhv-AOi2.jpg" />
              </div>
            </div>
          </figure>
          <div className="card-body">
            <div className="flex items-left gap-1">
              <CiUser></CiUser>
              <p>Steven </p>
            </div>
            <div className="flex items-center gap-1">
              <CiLocationOn></CiLocationOn>
              <p>Anderson </p>
            </div>
            <div className="flex items-center gap-1">
              <MdOutlineEmail></MdOutlineEmail>
              <p>steven.anderson@gmail.com</p>
            </div>

            <div className="card-actions mx-auto">
            <button
                className="px-3 mt-4 rounded-lg py-2 bg-green-500 text-white"
                onClick={() =>
                  document.getElementById("my_modal_1").showModal()
                }
              >
                Contact Now
              </button>
              <dialog id="my_modal_1" className="modal">
                <div className="modal-box">
                  <h3 className="font-bold text-lg">Thanks For Contacting With Us</h3>
                  <div className="modal-action">
                    <form method="dialog">
                      {/* if there is a button in form, it will close the modal */}
                      <button className="btn">Close</button>
                    </form>
                  </div>
                </div>
              </dialog>
            </div>
          </div>
        </div>

        <div className="card w-72 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <div className="avatar">
              <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src="https://i.ibb.co/jTh7501/images-1.jpg" />
              </div>
            </div>
          </figure>
          <div className="card-body">
            <div className="flex items-left gap-1">
              <CiUser></CiUser>
              <p>John </p>
            </div>
            <div className="flex items-center gap-1">
              <CiLocationOn></CiLocationOn>
              <p>Miller </p>
            </div>
            <div className="flex items-center gap-1">
              <MdOutlineEmail></MdOutlineEmail>
              <p>john.miller@gmail.com</p>
            </div>

            <div className="card-actions mx-auto">
            <button
                className="px-3 mt-4 rounded-lg py-2 bg-green-500 text-white"
                onClick={() =>
                  document.getElementById("my_modal_1").showModal()
                }
              >
                Contact Now
              </button>
              <dialog id="my_modal_1" className="modal">
                <div className="modal-box">
                  <h3 className="font-bold text-lg">Thanks For Contacting With Us</h3>
                  <div className="modal-action">
                    <form method="dialog">
                      {/* if there is a button in form, it will close the modal */}
                      <button className="btn">Close</button>
                    </form>
                  </div>
                </div>
              </dialog>
            </div>
          </div>
        </div>
      </div>
      <Helmet>
        <title>Meet Our Agents</title>
      </Helmet>
    </div>
  );
};

export default Agent;

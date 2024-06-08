import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import 'react-toastify/dist/ReactToastify.css';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Swal from 'sweetalert2';
import {Helmet} from "react-helmet";

const Register = () => {

  const { createUser, updateUserProfile } = useContext(AuthContext);
  
  const [registerError, setRegisterError] = useState();
  const [showPass, setShowPass] = useState(false);

  const handleRegister = e => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);

    const name = form.get('name');
    const email = form.get('email');
    const photoUrl = form.get('photoUrl');
    const password = form.get('password');

    console.log(name, photoUrl);

    if (password.length < 6) {
      setRegisterError('Password should be at least 6 characters or Longer');
      return;
    }
    else if (!/[A-Z]/.test(password)) {
      setRegisterError("Password Should be at least one UPPERCASE and lowercase Character")
      return;
    }

    setRegisterError('');
    createUser(email, password)
      .then(() => {
        updateUserProfile(name, photoUrl)
          .then(() => {
           Swal.fire("Registration Successful");
        })
    })
      .catch(error => {
        console.error(error.message);
        setRegisterError(error.message);
    })

  }



  return (
    <div className="w-full max-w-lg p-8 mt-10 mb-10 mx-auto shadow-xl space-y-3 rounded-xl bg-gray-50 ">
      <h1 className="text-2xl font-bold text-center">Register Here</h1>
      <form onSubmit={handleRegister} className="space-y-6">
        <div className="space-y-1 text-sm">
          <label htmlFor="name" className="block text-gray-600">
            Name
          </label>
          <input
            required
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
          />
        </div>
        <div className="space-y-1 text-sm">
          <label htmlFor="email" className="block text-gray-600">
            Email
          </label>
          <input
            required
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
            
          />
          
        </div>
        <div className="space-y-1 text-sm">
          <label htmlFor="photoUrl" className="block dark:text-gray-600">
            Photo URL
          </label>
          <input
            required
            type="text"
            name="photoUrl"
            id="photoUrl"
            placeholder="Photo URL"
            className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
            
          />
         

        </div>
        <div className="space-y-1 text-sm ">
          <label htmlFor="password" className="block dark:text-gray-600">
            Password
          </label>
          <div className="flex items-center">
            <input
              required
            type={showPass ? "text" : "password"}
            name="password"
            id="password"
            placeholder="Password"
            className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
          />
            <span className="ml-2 text-lg" onClick={() => setShowPass(!showPass)}>
              {
                showPass ? <FaEyeSlash className="cursor-pointer"></FaEyeSlash> : <FaEye className="cursor-pointer"></FaEye>
              }
        </span>
          </div>

        </div>
      <input className="block w-full p-3 text-center rounded-sm dark:text-gray-50 dark:bg-green-600 cursor-pointer"  type="submit" />
      </form>
      <p className="text-xs text-center sm:px-6 dark:text-gray-600">
        Already Registered?
        <Link to='/login'>
          <a
            rel="noopener noreferrer"
            href="#"
            className="underline dark:text-gray-800"
          >
            {" "}
            Log In
          </a>
        </Link>
      </p>
      {
        registerError && <p className="text-red-500">{registerError}</p>
      }
      <Helmet>
        <title>Register Here</title>
      </Helmet>
    </div>
  );
};

export default Register;

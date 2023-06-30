import { Link } from "react-router-dom";
import mfiLogo from "../../../assets/MicFina.jpg";
import { FaUserAlt } from "react-icons/fa";
import { MdPassword } from "react-icons/md";

const Login = () => {
  return (
    <form className="Login flex flex-col w-1/4 m-auto border border-gray-300 rounded px-10 py-5 shadow-md mt-40">
      <h3 className="font-bold text-2xl text-center my-5">Login</h3>
      <img className="w-1/2 m-auto my-5" src={mfiLogo} alt="MicFina-logo" />
      <div className="flex items-center">
        <FaUserAlt
          className="border border-gray-200 w-11 h-11 p-2 rounded-l text-white bg-success"
          size={20}
        ></FaUserAlt>
        <input
          className="border rounded-r border-gray-200 my-1 p-2 w-full"
          type="email"
          name="email"
          placeholder="Email Address"
          required
        />
      </div>
      <div className="flex items-center">
        <MdPassword
          className="border border-gray-200 w-11 h-11 p-2 rounded-l text-white bg-success"
          size={20}
        ></MdPassword>
        <input
          className="border rounded-r border-gray-200 my-1 p-2 w-full"
          type="password"
          name="password"
          placeholder="Password"
          required
        />
      </div>
      <Link className="link my-5 text-center">Forgot password?</Link>
      <button className="my-2 p-2 btn-success rounded text-white" type="submit">
        <Link to="/dashboard">Login</Link>
      </button>
    </form>
  );
};

export default Login;

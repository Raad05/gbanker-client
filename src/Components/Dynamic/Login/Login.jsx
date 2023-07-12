import { Link } from "react-router-dom";
import mfiLogo from "../../../assets/MicFina.jpg";
import { FaUserAlt } from "react-icons/fa";
import { MdPassword } from "react-icons/md";
import { useState } from "react";
import { useNavigate } from "react-router-dom"
import nodeaxios from '../../../Axios/nodeaxios';

const Login = () => {
  const [data, setData] = useState({});
  const navigate = useNavigate();

  const login = (e) => {
    e.preventDefault();
    console.log(data);
    nodeaxios.post("/user/login", {
      username: data.username,
      password: data.password
    }).then((response) => {
      if (response.status === 200) {
        sessionStorage.setItem("address", response.data.address);
        sessionStorage.setItem("areaName", response.data.areaName);
        sessionStorage.setItem("branchName", response.data.branchName);
        if (response.data.type == "Area Manager") {
          navigate('/area-manager-panel');
        } else {
          navigate('/branch-manager-panel');
        }
      }
    })
  };

  const handleInput = (e) => {
    const form = e.target;
    const field = form.name;
    const value = form.value;
    const newData = { ...data };
    newData[field] = value;

    setData(newData);
  };

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
          onBlur={handleInput}
          className="border rounded-r border-gray-200 my-1 p-2 w-full"
          type="text"
          name="username"
          placeholder="Username"
          required
        />
      </div>
      <div className="flex items-center">
        <MdPassword
          className="border border-gray-200 w-11 h-11 p-2 rounded-l text-white bg-success"
          size={20}
        ></MdPassword>
        <input
          onBlur={handleInput}
          className="border rounded-r border-gray-200 my-1 p-2 w-full"
          type="password"
          name="password"
          placeholder="Password"
          required
        />
      </div>
      <Link className="link my-5 text-center">Forgot password?</Link>
      <button
        onClick={login}
        className="my-2 p-2 btn-success rounded text-white"
        type="submit"
      >
        Login
        {/* {data.email === "yamin.raad6109@gmail.com" ? (
          <Link to="/area-manager-panel">Login</Link>
        ) : (
          <Link to="/branch-manager-panel">Login</Link>
        )} */}
      </button>
    </form>
  );
};

export default Login;

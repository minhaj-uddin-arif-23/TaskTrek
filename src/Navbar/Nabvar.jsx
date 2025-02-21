import { useContext, useEffect, useState } from "react";
import { Link } from "react-router";
import { Menu, X } from "lucide-react";
import { AuthContexts } from "../context/AuthProvider";
import { CiLight } from "react-icons/ci";
import { FaMoon } from "react-icons/fa6";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {user,signout} = useContext(AuthContexts)
  const [state,setState] = useState("dark-mode")
  const change = () => {
    if(state === "dark-mode"){
      setState("light-mode")
    }else{
      setState("dark-mode")
    }
  }
  useEffect(() => {
    document.querySelector("body").className= state
  },[state])

  return (
    <nav className=" shadow-md fixed top-0 left-0 w-full  z-50 px-36 ">
      <div className="container mx-auto flex justify-between items-center p-4">

        {/* Logo */}
        <Link to={'/'} className="text-3xl font-bold text-blue-600">TaskTrek</Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <p className="mt-1 cursor-pointer" onClick={change}>
            {
              state == "light-mode" ? (
                <CiLight />
              ): (
                <FaMoon />
              )
            }
          </p>
          <Link to={'/'} className=" hover:text-blue-600 transition" >Home</Link>
          <Link to={'/alltask'} className=" hover:text-blue-600 transition">All Tasks</Link>

    {
        user && user?.email ? (
          <button onClick={signout} className=" hover:text-blue-600 transition  px-5  rounded-lg cursor-pointer">Sign out</button>
        ) : (
  
            <Link to={'/login'} className=" hover:text-blue-600 transition">Login</Link>
        )
    }

        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md flex flex-col items-center py-4">
          <Link to={'/'} className="text-gray-700 py-2 hover:text-blue-600 transition" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to={'/alltask'} className="text-gray-700 py-2 hover:text-blue-600 transition" onClick={() => setIsOpen(false)}>All Tasks</Link>
          {
        user && user?.email ? (
          <button onClick={signout} className="text-gray-700 hover:text-blue-600 transition border-2 border-gray-200 px-3 rounded-lg">Sign out</button>
        ) : (
  
            <Link to={'/login'} className="text-gray-700 hover:text-blue-600 transition">Login</Link>
        )
    }
          
        </div>
      )}
    </nav>
  );
};

export default Navbar;

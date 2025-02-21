import { useState } from "react";
import { Link } from "react-router";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full  z-50 px-36 ">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <h1 className="text-3xl font-bold text-blue-600">TaskTrek</h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Link className="text-gray-700 hover:text-blue-600 transition" >Home</Link>
          <Link className="text-gray-700 hover:text-blue-600 transition">All Tasks</Link>
          <Link className="text-gray-700 hover:text-blue-600 transition">Login</Link>
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
          <Link className="text-gray-700 py-2 hover:text-blue-600 transition" onClick={() => setIsOpen(false)}>Home</Link>
          <Link className="text-gray-700 py-2 hover:text-blue-600 transition" onClick={() => setIsOpen(false)}>All Tasks</Link>
          <Link className="text-gray-700 py-2 hover:text-blue-600 transition" onClick={() => setIsOpen(false)}>Login</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

import React, { useContext } from "react";
import { useLocation, useNavigate } from "react-router";
import Swal from "sweetalert2";
import { AuthContexts } from "../context/AuthProvider";

export default function Login() {

    const {google} = useContext(AuthContexts)
  const location = useLocation();
  const from = location?.state || "/";
  const navigate = useNavigate();

  const gooleLogin = async () => {
    try {
      await google();
      Swal.fire({
        title: "Success!",
        text: "Your have been login successfully.",
        icon: "success",
        confirmButtonText: "OK",
      });
      navigate(from, { replace: true });
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: "Task could not be added. Try again!",
        icon: "error",
      });
    }
  };

  return (
    <div className="mt-32 flex flex-col items-center">
        <h1 className="text-3xl font-semibold  text-center mr-12 mb-3 text-blue-600">
    Please log in to add your tasks
  </h1>
      <div action="" className="w-full max-w-sm">
        <button onClick={gooleLogin} className="mt-4 btn btn-outline btn-info flex items-center gap-2 border-2 border-gray-200 px-16 py-2 rounded-xl">
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="Google"
            className="w-5 h-5"
          />
          Sign in with Google
        </button>
      </div>
    </div>
  );
}

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router";

import ShowAllTask from "./Alltask/ShowAllTask.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import UpdateTask from "./update/UpdateTask.jsx";
import Nabvar from "./Navbar/Nabvar.jsx";
import Login from "./Auth/Login.jsx";
import AuthProvider from "./context/AuthProvider.jsx";
import PrivateRoute from "./privateRoute/PrivateRoute.jsx";
const queryClient = new QueryClient();
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <BrowserRouter>
          <Nabvar />
          <Routes>
            <Route path="/" element={<PrivateRoute>{<App />}</PrivateRoute>} />

            <Route
              path="/alltask"
              element={
                <PrivateRoute>
                  <ShowAllTask />
                </PrivateRoute>
              }
            />
            <Route
              path="/updateTask/:id"
              element={<PrivateRoute><UpdateTask /></PrivateRoute>}
              loader={(params) =>
                fetch(`http://localhost:8000/updateTask/${params.id}`)
              }
            />
            <Route path="/login" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </QueryClientProvider>
  </StrictMode>
);
// = () => fetch(``)

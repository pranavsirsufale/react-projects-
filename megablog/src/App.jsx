import { useEffect, useRef, useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { useDispatch, useSelector } from "react-redux";
import authService from "./appwrite/auth";
import { login, logout } from "./store/slice/authSlice";
import { Header, Footer } from "./components";
import { Outlet } from "react-router-dom";

export default function App() {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);

  const { status, userData } = useSelector((state) => state.auth);
  console.log(status);
  console.log(userData);

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return !loading ? (
    <div className="min-h-screen flex flex-wrap content-between bg-gray-400">
      <div className="w-full block">
        <Header />
        <main>
      




      
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  ) : (
    <div className="min-h-screen flex flex-wrap content-between bg-gray-400">
      loadding...
    </div>
  );
}

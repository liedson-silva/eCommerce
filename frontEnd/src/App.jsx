import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";
import fetchUserDetails from "./utils/fetchUserDetails";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUserDetails } from "./store/userSlice";

function App() {
  const dispatch = useDispatch();
  const fetchUser = async () => {
    const cookies = document.cookie.split(";");
    const hasAccessToken = cookies.some(cookie =>
      cookie.trim().startsWith("accessToken=")
    );

    if (hasAccessToken) {
      const userData = await fetchUserDetails();
      if (userData) {
        dispatch(setUserDetails(userData.data));
      }
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <>
      <Header />
      <main className="min-h-[80vh]">
        <Outlet />
      </main>
      <Footer />
      <Toaster />
    </>
  );
}

export default App;

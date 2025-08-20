import Search from "./Search";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaRegCircleUser } from "react-icons/fa6";
import useMobile from "../hooks/useMobile";
import { BsCart4 } from "react-icons/bs";
import { useSelector } from "react-redux";
import { GoTriangleDown, GoTriangleUp } from "react-icons/go";
import { useState } from "react";
import UserMenu from "./UserMenu";

const Header = () => {
  const [isMobile] = useMobile();
  const location = useLocation();
  const isSearchPage = location.pathname === "/search";
  const navigate = useNavigate();
  const user = useSelector((state) => state?.user);

  const [openUserMenu, setOpenUserMenu] = useState(false)

  const redirectToLoginPage = () => {
    navigate("/login");
  };

  const handleCloseUserMenu = () => {
    setOpenUserMenu(false)
  }

  const handleMobileUser = () => {
    if (!user._id) {
      navigate("/login")
      return
    }
    navigate("/user-mobile")
  }

  return (
    <header className="h-24 lg:h-20 bg-gradient-to-r from-blue-300 via-blue-150 to-blue-50 lg:shadow-md sticky top-0 z-40 flex flex-col justify-center gap-1 bg-white">
      {!(isSearchPage && isMobile) && (
        <div className="container mx-auto flex items-center justify-between">
          <div className="h-full">
            <Link
              to="/"
              className="h-full flex items-center justify-center text-3xl font-bold hidden lg:block p-4 text-transparent bg-gradient-to-r from-tertiary-100 secondary-100 to-primary-100 bg-clip-text"
            >
              eCommerce
            </Link>
            <Link
              to="/"
              className="h-full flex items-center justify-center text-2xl font-bold lg:hidden p-4 text-transparent bg-gradient-to-r from-tertiary-100 via-secondary-100 to-primary-100 bg-clip-text"
            >
              eCommerce
            </Link>
          </div>
          <div className="hidden lg:block">
            <Search />
          </div>

          <div className="">
            <button className="text-neutral-600 lg:hidden" onClick={handleMobileUser}>
              <FaRegCircleUser size={25} />
            </button>

            <div className="hidden lg:flex items-center gap-10">
              {user?._id ? (
                <div className="relative">
                  <div onClick={() => setOpenUserMenu(preve => !preve)} className="flex select-none items-center gap-1 cursor-pointer">
                    <div className='font-semibold'>{user.name || user.mobile}</div>
                    {
                      openUserMenu ? (
                        <GoTriangleUp size={25} />
                      ) : (
                        <GoTriangleDown size={25} />
                      )
                    }
                  </div>
                  {
                    openUserMenu && (
                      <div className="absolute right-0 top-12 ">
                        <div className="bg-gradient-to-r from-blue-200 via-blue-100 to-blue-50 rounded-lg p-4 min-w-48 lg:shadow-lg">
                          <UserMenu close={handleCloseUserMenu} />
                        </div>
                      </div>
                    )
                  }
                </div>
              ) : (
                <button onClick={redirectToLoginPage} className="text-lg px-2">
                  Entrar
                </button>
              )}
              <button onClick={() => OpenCartSection(true)}
                className="flex items-center gap-2 bg-gradient-to-r from-tertiary-100 via-secondary-100 to-primary-100 px-3 py-2 rounded text-white">
                <div className="animate-bounce">
                  <BsCart4 size={26} />
                </div>
                <div className="font-semibold text-sm">Meu carrinho</div>
              </button>
            </div>
          </div>
        </div>
      )}
      <div className="container mx-auto px-2 lg:hidden">
        <Search />
      </div>
    </header>
  );
};

export default Header;

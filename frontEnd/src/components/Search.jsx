import { useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import { FaArrowLeft } from "react-icons/fa";
import useMobile from "../hooks/useMobile";

const Search = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isSearchPage, setIsSearchPage] = useState(false);
  const [isMobile] = useMobile();
  const params = useLocation()
  const searchText = params.search.slice(3)

  useEffect(() => {
    const isSearch = location.pathname === "/search";
    setIsSearchPage(isSearch);
  }, [location]);

  const redirectToSearch = () => {
    navigate("/search");
  };

  return (
    <div className="w-full min-w-[300px] lg:min-w-[420px] h-11 lg:h-12 rounded-lg border overflow-hidden flex items-center text-neutral-500 bg-slate-50 group focus-within:border-secondary-100">
      <div>
        {
          (isMobile && isSearchPage) ? (
            <Link to={"/"} className="flex justify-center items-center h-full p-3 group-focus-within:text-secondary-100">
              <FaArrowLeft size={22} />
            </Link>
          ) : (
            <button className="flex justify-center items-center h-full p-3 group-focus-within:text-secondary-100">
              <IoSearch size={22} />
            </button>
          )
        }
      </div>
      <div className="w-full h-full">
        {!isSearchPage ? (
        <div onClick={redirectToSearch} className="w-full h-full flex items-center ">
          <TypeAnimation
            sequence={[
              'Pesquisar',
              500,
              'Pesquisar.',
              500,
              'Pesquisar..',
              500,
              'Pesquisar...',
              500,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </div>
        ) : (
          <div className="w-full h-full">
            <input
              type="text"
              placeholder="Buscar..."
              autoFocus
              //defaultValue={searchText}
              className="bg-transparent w-full h-full outline-none"
              //onChange={handleOnChange}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;

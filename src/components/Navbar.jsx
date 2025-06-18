import { useState } from "react";

import { UserButton, useClerk, useUser } from "@clerk/clerk-react";
import { MenuIcon, SearchIcon, TicketPlus, XIcon } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

import { assets } from "../assets/assets";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useUser();
  const { openSignIn } = useClerk();
  const navigate = useNavigate();

  return (
    <div className="fixed top-0 left-0 z-50 flex w-full items-center justify-between px-6 py-5 md:px-16 lg:px-36">
      {/* LOGO */}
      <Link to="/" className="max-md:flex-1">
        <img src={assets.logo} alt="logo" className="h-auto w-36" />
      </Link>
      {/* MENU ITEMS */}
      <div
        className={`z-50 flex flex-col items-center gap-8 overflow-hidden border-gray-300/20 bg-black/70 py-3 backdrop-blur transition-[width] duration-300 max-md:absolute max-md:top-0 max-md:left-0 max-md:h-screen max-md:justify-center max-md:text-lg max-md:font-medium md:flex-row min-md:rounded-full md:border md:bg-white/10 min-md:px-8 ${isOpen ? "max-md:w-full" : "max-md:w-0"} `}
      >
        <XIcon
          className="absolute top-6 right-6 size-6 cursor-pointer md:hidden"
          onClick={() => setIsOpen(false)}
        />
        <Link
          to="/"
          className=""
          onClick={() => {
            scrollTo(0, 0);
            setIsOpen(false);
          }}
        >
          Home
        </Link>
        <Link
          to="/movies"
          className=""
          onClick={() => {
            scrollTo(0, 0);
            setIsOpen(false);
          }}
        >
          Movies
        </Link>
        <Link
          to="/"
          className=""
          onClick={() => {
            scrollTo(0, 0);
            setIsOpen(false);
          }}
        >
          Theaters
        </Link>
        <Link
          to="/"
          className=""
          onClick={() => {
            scrollTo(0, 0);
            setIsOpen(false);
          }}
        >
          Releases
        </Link>
        <Link
          to="/favorite"
          className=""
          onClick={() => {
            scrollTo(0, 0);
            setIsOpen(false);
          }}
        >
          Favorites
        </Link>
      </div>
      {/* USER LOGIN BUTTON & SEARCH ICON */}
      <div className="flex items-center gap-8">
        {/* Search Icon */}
        <SearchIcon className="size-6 cursor-pointer max-md:hidden" />
        {/* Button  */}
        {!user ? (
          <button
            className="bg-primary hover:bg-primary-dull rounded-full px-4 py-1 font-medium transition sm:px-7 sm:py-2"
            onClick={openSignIn}
          >
            Login
          </button>
        ) : (
          <UserButton>
            <UserButton.MenuItems>
              <UserButton.Action
                label="My Bookings"
                labelIcon={<TicketPlus width={15} />}
                onClick={() => navigate("/my-bookings")}
              />
            </UserButton.MenuItems>
          </UserButton>
        )}
      </div>
      {/* MENU MOBILE ICON */}
      <MenuIcon
        className="size-8 cursor-pointer max-md:ml-4 md:hidden"
        onClick={() => setIsOpen(!isOpen)}
      />
    </div>
  );
};
export default Navbar;

import { FaSearch } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

export default function Header() {
  const { currentUser } = useSelector((state) => state.user);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set("searchTerm", searchTerm);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get("searchTerm");
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl);
    }
  }, [location.search]);

  return (
    <header className="bg-gradient-to-r from-slate-200 via-white to-slate-200 shadow-lg sticky top-0 z-50">
      <div className="flex justify-between items-center max-w-7xl mx-auto p-4">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <h1 className="font-extrabold text-xl sm:text-2xl tracking-wide">
            <span className="text-indigo-600">Ardell</span>
            <span className="text-gray-700">Estate</span>
          </h1>
        </Link>

        {/* Search Bar */}
        <form
          onSubmit={handleSubmit}
          className="relative flex items-center bg-white p-2 rounded-full shadow-md backdrop-blur-md transition-all duration-200 hover:bg-white/90 focus-within:bg-white/90 max-w-sm w-full sm:w-auto"
        >
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent focus:outline-none px-4 w-full sm:w-64 placeholder-gray-400"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button
            type="submit"
            className="absolute right-3 text-slate-600 hover:text-indigo-600 transition duration-200"
          >
            <FaSearch />
          </button>
        </form>

        {/* Desktop Navigation */}
        <ul className="hidden sm:flex gap-6 items-center">
          <Link to="/">
            <li className="text-gray-700 hover:text-indigo-600 transition duration-200 hover:underline">
              Home
            </li>
          </Link>
          <Link to="/about">
            <li className="text-gray-700 hover:text-indigo-600 transition duration-200 hover:underline">
              About
            </li>
          </Link>
          <Link to="/profile">
            {currentUser ? (
              <img
                className="rounded-full h-8 w-8 object-cover shadow-md hover:scale-105 transition-transform duration-200"
                src={currentUser.avatar}
                alt="profile"
              />
            ) : (
              <li className="text-gray-700 hover:text-indigo-600 transition duration-200 hover:underline">
                Sign In
              </li>
            )}
          </Link>
        </ul>
      </div>
    </header>
  );
}

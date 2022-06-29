import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function Navbar() {
  const auth = localStorage.getItem("token");
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("token")));
    setIsOpen(false);
  }, [auth]);

  return (
    <div className="bg-gray-50">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          <Link to="/" className="block text-indigo-600">
            Start your free trial today.
          </Link>
        </h2>
        {auth ? (
          <>
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <div className="ml-3 relative">
                  <button
                    type="button"
                    className="flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white px-3"
                    id="user-menu-button"
                    aria-expanded="false"
                    aria-haspopup="true"
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    <span className="sr-only">Open user menu</span>
                    {user?.google === "true" ? (
                      <img
                        className="h-8 w-8 rounded-full"
                        src={user?.result.avatar}
                        alt=""
                      />
                    ) : (
                      <sapn className="h-8 w-8 p-1">👤</sapn>
                    )}
                    <span className="text-center p-1 font-semibold">
                      {user?.result.email}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700"
                      >
                        Your Profile
                      </a>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700"
                      >
                        Settings
                      </a>
                      <a
                        className="block px-4 py-2 text-sm text-gray-700 cursor-pointer"
                        onClick={() => {
                          localStorage.clear();
                          navigate("/signin");
                        }}
                      >
                        Sign out
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
              <div className="inline-flex rounded-md shadow">
                <NavLink
                  to="/signin"
                  className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50"
                >
                  Get started for free
                </NavLink>
              </div>
              <div className="ml-3 inline-flex rounded-md shadow">
                <NavLink
                  to="/signup"
                  className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                >
                  Create a free account
                </NavLink>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
export default Navbar;

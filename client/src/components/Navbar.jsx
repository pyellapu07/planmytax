// File: src/components/Navbar.jsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import planmytaxlogo from "../assets/Plan My Tax.png";

const Navbar = () => {
  const [user, setUser] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
    window.location.href = "/login";
  };

  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-primary text-white">
      {/* Logo */}
      <Link to="/" className="text-xl font-bold">
        <img
          src={planmytaxlogo}
          alt="Plan My Tax Logo"
          className="h-10 w-auto object-contain max-w-[140px]"
        />
      </Link>

      {/* Nav Links */}
      <ul className="hidden md:flex space-x-6 text-sm">
        <li><Link to="/trademark" className="hover:text-accent">Trademark</Link></li>
        <li><Link to="/company-registration" className="hover:text-accent">Company Registration</Link></li>
        <li><Link to="/iso" className="hover:text-accent">ISO</Link></li>
        <li><Link to="/licenses" className="hover:text-accent">Licenses</Link></li>
        <li><Link to="/tax-compliance" className="hover:text-accent">Tax & Compliance</Link></li>
      </ul>

      {/* Right Section */}
      <div className="relative flex items-center gap-4">
        {user ? (
          <div className="relative">
            <button
              className="bg-white text-primary px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-2"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              <span>{user.displayName || user.email?.split("@")[0]}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white text-primary rounded shadow-lg z-50">
                <button
                  onClick={handleLogout}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                >
                  Log Out
                </button>
              </div>
            )}
          </div>
        ) : (
          <>
            <Link
              to="#contact"
              className="text-sm px-4 py-1 rounded-full border border-white hover:bg-white hover:text-primary transition"
            >
              Contact
            </Link>
            <Link
              to="/login"
              className="bg-white text-primary px-4 py-1 rounded-full text-sm font-medium hover:bg-accent hover:text-white transition"
            >
              Login
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

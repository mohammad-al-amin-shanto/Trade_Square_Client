import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <nav className="bg-primary text-white p-4 flex justify-between items-center">
      
      {/* Logo */}
      <h1 className="font-bold text-lg">Trade Square</h1>

      {/* Links */}
      <div className="flex gap-6 items-center">
        <Link to="/" className="hover:text-accent">Home</Link>
        <Link to="/items" className="hover:text-accent">Items</Link>
        <Link to="/about" className="hover:text-accent">About</Link>

        {user ? (
          <>
            <Link to="/items/add" className="hover:text-accent">
              Add Item
            </Link>

            <Link to="/items/manage" className="hover:text-accent">
              Manage
            </Link>

            <button
              onClick={logout}
              className="bg-accent px-3 py-1 rounded text-white hover:opacity-80"
            >
              Logout
            </button>
          </>
        ) : (
          <Link
            to="/login"
            className="bg-accent px-3 py-1 rounded text-white hover:opacity-80"
          >
            Login
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
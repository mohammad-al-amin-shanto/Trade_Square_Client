import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-primary text-white p-4 flex justify-between">
      <h1 className="font-bold text-lg">Trade Square</h1>
      <div className="flex gap-4">
        <Link to="/">Home</Link>
        <Link to="/items">Items</Link>
        <Link to="/about">About</Link>
      </div>
    </nav>
  );
};

export default Navbar;
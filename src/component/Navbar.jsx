import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="w-full bg-blue-300 p-5 flex flex-row gap-10 justify-end pr-10">
      <div>
        <button className="bg-white p-2 rounded-md hover:transition-transform hover:scale-150 duration-300">
          <a href="/">Home</a>
        </button>
      </div>
      <div>
        <button className="bg-white p-2 rounded-md hover:transition-transform hover:scale-150 duration-300">
          Owner
        </button>
      </div>
    </nav>
  );
};

export default NavBar;

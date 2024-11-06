import { useState } from "react";
import "./App.css";
import Navbar from "./component/Navbar";
import AdminInterface from "./component/AdminInterface";
import UserInterface from "./component/UserInterface";

function App() {
  const [sectorBtn, setSectorBtn] = useState("");

  const showAdminPage = () => setSectorBtn("A");
  const showUserInterface = () => setSectorBtn("B");

  return (
    <div>
      <Navbar />
      <div className="text-4xl flex flex-col justify-center items-center p-20 gap-5 bg-purple-300">
        <h1>Generation Thailand</h1>
        <h1>Home - User Sector</h1>
        <div className="text-2xl flex flex-row justify-center gap-10">
          <button
            onClick={showUserInterface}
            className="bg-yellow-300 p-5 rounded-xl m-5 hover:transition-transform hover:scale-150 duration-300"
          >
            User Home Sector
          </button>
          <button
            onClick={showAdminPage}
            className="bg-yellow-300 p-5 rounded-xl m-5 hover:transition-transform hover:scale-150 duration-300"
          >
            Admin Home Sector
          </button>
        </div>
        {sectorBtn === "A" && <AdminInterface />}{" "}
        {sectorBtn === "B" && <UserInterface />}{" "}
      </div>
    </div>
  );
}

export default App;

import { useState } from "react";
import Home from "../assets/Home";

const AdminPage = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [position, setPosition] = useState("");
  const [users, setUsers] = useState([]);

  const handleSave = () => {
    if (name && lastName && position) {
      const newUser = {
        name,
        lastName,
        position,
      };

      setUsers((prevUsers) => [...prevUsers, newUser]);

      setName("");
      setLastName("");
      setPosition("");
    } else {
      alert("Please enter all the fields.");
    }
  };

  return (
    <div>
      <h1 className="mt-5 mb-3 font-bold">Create User Hero</h1>
      <div className="flex flex-row gap-5 justify-center ">
        <input
          className="p-5 bg-green-300 rounded-xl"
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="p-5 bg-green-300 rounded-xl"
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <input
          className="p-5 bg-green-300 rounded-xl"
          type="text"
          placeholder="Position"
          value={position}
          onChange={(e) => setPosition(e.target.value)}
        />
        <button onClick={handleSave} className="p-5 bg-green-300 rounded-xl">
          SAVE
        </button>
      </div>
      <Home users={users} />
    </div>
  );
};

export default AdminPage;

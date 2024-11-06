import { useState } from "react";
import Home from "../assets/Home";
import AdminPage from "./AdminInterface";

const UserInterface = ({ users }) => {
  return (
    <table className="w-full table-auto border-collapse border border-gray-300">
      <thead>
        <tr className="bg-gray-200">
          <th className="px-4 py-2 border border-gray-300 text-center">ชื่อ</th>
          <th className="px-4 py-2 border border-gray-300 text-center">
            นามสกุล
          </th>
          <th className="px-4 py-2 border border-gray-300 text-center">
            ตำแหน่ง
          </th>
        </tr>
      </thead>
      <tbody>
        {users.length === 0 ? (
          <tr>
            <td colSpan="3" className="px-4 py-2 text-center">
              ไม่มีข้อมูล
            </td>
          </tr>
        ) : (
          users.map((user, index) => (
            <tr key={index} className="bg-white">
              <td className="px-4 py-2 border border-gray-300 text-center">
                {user.name}
              </td>
              <td className="px-4 py-2 border border-gray-300 text-center">
                {user.lastName}
              </td>
              <td className="px-4 py-2 border border-gray-300 text-center">
                {user.position}
              </td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
};

export default UserInterface;

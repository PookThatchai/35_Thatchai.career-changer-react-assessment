const mockEmployees = [
  {
    id: 0,
    name: "mock",
    lastName: "mocklastname",
    position: "Manager",
  },
  {
    id: 1,
    name: "employee 1",
    lastName: "em",
    position: "Engineer",
  },
  {
    id: 2,
    name: "employee 2",
    lastName: "lord",
    position: "Designer",
  },
];

const Home = ({ users }) => {
  const allEmployees = [...mockEmployees, ...users]; // รวมข้อมูล mock และ users ที่มาจาก AdminPage

  return (
    <div>
      <h2 className="mt-5 font-bold">Employee List</h2>
      <table className="w-full table-auto border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-4 py-2 border border-gray-300 text-center">
              ชื่อ
            </th>
            <th className="px-4 py-2 border border-gray-300 text-center">
              นามสกุล
            </th>
            <th className="px-4 py-2 border border-gray-300 text-center">
              ตำแหน่ง
            </th>
          </tr>
        </thead>
        <tbody>
          {allEmployees.map((user, index) => (
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
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;

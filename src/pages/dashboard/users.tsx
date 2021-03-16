import { useEffect, useState } from "react";
import axios from "axios";
import DefaultLayout from "@/layouts/Default";

type IUser = {
  id: number;
  name: string;
  username: string;
  phone: string;
  email: string;
}

const UsersPage = () => {
  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const users = await axios.get(`https://fakejsonapi.com/users`);
      setUsers(users.data);
    }

    fetchData();
  }, []);

  return <>
    <section>
      <div className="block">
        <div className="align-middle inline-block min-w-full border-b border-gray-200">
          <table className="min-w-full">
            <thead>
              <tr className="border-t border-gray-200">
                <th className="px-6 py-3 border-b border-blueGray-200 bg-blueGray-50 text-left text-xs font-medium text-blueGray-500 uppercase tracking-wider">
                  <span className="lg:pl-2">Name</span>
                </th>
                <th className="px-6 py-3 border-b border-blueGray-200 bg-blueGray-50 text-left text-xs font-medium text-blueGray-500 uppercase tracking-wider">
                  Username
                </th>
                <th className="px-6 py-3 border-b border-blueGray-200 bg-blueGray-50 text-left text-xs font-medium text-blueGray-500 uppercase tracking-wider">
                  Phone
                </th>
                <th className="px-6 py-3 border-b border-blueGray-200 bg-blueGray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Email
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-100">
              { users.map((user, index) => <tr key={index}>
                <td className="px-6 py-3 whitespace-nowrap text-sm font-medium text-gray-900">
                  <div className="flex items-center space-x-3 lg:pl-2">
                    <div className="flex-shrink-0 w-2.5 h-2.5 rounded-full bg-pink-600" aria-hidden="true" />
                    <span>{user?.name}</span>
                  </div>
                </td>
                <td className="px-6 py-3 whitespace-nowrap text-sm font-medium text-gray-900">
                  <div className="flex items-center space-x-3 lg:pl-2">
                    <span>{user?.username}</span>
                  </div>
                </td>
                <td className="px-6 py-3 whitespace-nowrap text-sm font-medium text-gray-900">
                  <div className="flex items-center space-x-3 lg:pl-2">
                    <span>{user?.phone}</span>
                  </div>
                </td>
                <td className="px-6 py-3 whitespace-nowrap text-sm font-medium text-gray-900">
                  <div className="flex items-center space-x-3 lg:pl-2">
                    <span>@{user?.email}</span>
                  </div>
                </td>
              </tr>)}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  </>;
}

export default DefaultLayout(UsersPage, {
  title: 'Usuarios',
});

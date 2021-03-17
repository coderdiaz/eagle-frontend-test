import { useState } from "react";
import useOnclickOutside from "react-cool-onclickoutside";
import Cookies from "js-cookie";
import { useRouter } from "next/router";

const UserConfig = () => {
  const [show, setShow] = useState(false);
  const router = useRouter();
  
  const ref = useOnclickOutside(() => setShow(false));
  const handleClickBtn = () => setShow(!show);;

  const handleLogout = () => {
    Cookies.remove("jwt");
    router.push("/");
  }

  return <div className="relative -mt-1">
    <button
      onClick={handleClickBtn}
      className="flex px-3 py-1 space-x-4 items-center">
      <span className="inline-block text-gray-800 font-semibold">Javier Diaz</span>
      <img
        src="https://avatars.githubusercontent.com/u/1901273?s=460&u=93a85ce88bdaf2a69d0a855b8862baad9353676f&v=4"
        className="w-8 rounded-full object-cover border-2 border-white" />
    </button>
    <div
      ref={ref}
      className={`${ show ? '' : 'hidden' } origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5`}>
      <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
        <button onClick={handleLogout} className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900 font-semibold" role="menuitem">
          Cerrar sesión
        </button>
      </div>
    </div>
  </div>;
};

export default UserConfig;

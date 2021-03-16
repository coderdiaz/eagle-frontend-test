import Logotype from "./Logotype";

const Sidebar = () => {
  return <aside className="flex flex-shrink-0 bg-gray-700">
    <div className="flex flex-col justify-between w-64">
      <div className="inline-flex flex-col">
        <div className="flex items-center bg-coolGray-600 p-5">
          <Logotype />
          <span className="ml-3 font-bold inline-block text-white tracking-wide">Mi Águila</span>
        </div>
        <nav className="inline-block">
          <div className="flex flex-col">
            <a href="#" className="inline-flex items-center px-4 py-3 border-l-2 border-indigo-100 bg-gray-400 text-indigo-100 bg-opacity-10">
              <svg className="w-4 mr-3" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" stroke="currentColor">
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
              </svg>
              Inicio
            </a>
            <a href="#" className="inline-flex items-center px-5 py-3 bg-gray-700 text-gray-400 bg-opacity-10">
              <svg className="w-4 mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
              </svg>
              Usuarios
            </a>
            <a href="#" className="inline-flex items-center px-5 py-3 bg-gray-700 text-gray-400 bg-opacity-10">
              <svg className="w-4 mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
              </svg>
              Tareas
            </a>
          </div>
        </nav>
      </div>
      <div className="border-t border-gray-600 flex flex-col">
        <nav className="inline-block">
          <div className="flex flex-col">
            <a href="#" className="inline-flex items-center px-5 py-3 bg-gray-700 text-gray-400 bg-opacity-10">
              <svg className="w-4 mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
              </svg>
              Configuración
            </a>
          </div>
        </nav>
      </div>
    </div>
  </aside>;
}

export default Sidebar;

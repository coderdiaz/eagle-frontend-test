import SimpleLayout from "@/layouts/Simple";

const IndexPage = () => {
  return <>
    <div className="min-h-screen bg-white flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="relative mx-auto w-40 h-24 z-0">
          <img
            className="absolute object-cover"
            src="https://app.miaguila.com/assets/logocentral.jpg"
            alt="MiAguila" />
        </div>
      </div>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 sm:px-10">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Correo Electrónico
              </label>
              <div className="mt-1">
                <input id="email" name="email" type="email" autoComplete="email" required className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm" />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Contraseña
              </label>
              <div className="mt-1">
                <input id="password" name="password" type="password" autoComplete="current-password" required className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm" />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input id="remember_me" name="remember_me" type="checkbox" className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded" />
                <label htmlFor="remember_me" className="ml-2 block text-sm text-gray-900">
                  Recuerdame
                </label>
              </div>

              <div className="text-sm">
                <a href="#" className="font-medium text-green-600 hover:text-green-500">
                  ¿Olvidaste tu contraseña?
                </a>
              </div>
            </div>

            <div>
              <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                Iniciar sesión
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </>
};

export default SimpleLayout(IndexPage);

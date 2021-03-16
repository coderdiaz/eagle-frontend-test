import DefaultLayout from "@/layouts/Default";

const DashboardPage = () => {
  return <>
    <section>
      <div>
        <div className="min-h-screen flex flex-col justify-center">
          <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <p className="text-center text-4xl">
              Bienvenido <span className="font-bold">Javier</span>
            </p>
            <div className="text-center">
              <img src="/assets/svg/placeholder.svg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  </>;
}

export default DefaultLayout(DashboardPage, {
  title: 'Inicio',
});

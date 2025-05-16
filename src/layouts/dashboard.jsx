import { Routes, Route, useLocation } from "react-router-dom";
import { Cog6ToothIcon } from "@heroicons/react/24/solid";
import { IconButton } from "@material-tailwind/react";
import {
  Sidenav,
  DashboardNavbar,
  Configurator,
  Footer,
} from "@/widgets/layout";
import routes from "@/routes";
import { useMaterialTailwindController, setOpenConfigurator } from "@/context";

export function Dashboard() {
  const [controller, dispatch] = useMaterialTailwindController();
  const { sidenavType, openSidenav } = controller;
  const location = useLocation();

  return (
    <div className="min-h-screen bg-blue-gray-50/50">
      {/* Top Full-width Navbar */}
      <div className="sticky top-0 z-50">
        <DashboardNavbar />
      </div>

      {/* Main Content Below Navbar */}
      <div className="flex">
        {/* Sidebar */}
        <aside
          className={`
    sticky top-[80px] left-0 z-40
    transition-[width] duration-300 ease-in-out
    ${openSidenav ? "w-72" : "w-16"}
    hidden xl:block
    h-[calc(100vh-88px)] 
    bg-white
  `}
        >
          <Sidenav
            routes={routes}
            brandImg={
              sidenavType === "dark"
                ? "/img/logo-ct.png"
                : "/img/logo-ct-dark.png"
            }
          />
        </aside>

        {/* Main Content Area */}
        <main
          className={`
            flex-1 px-2 py-2
            transition-all duration-300 ease-in-out
          `}
        >
          {/* Configurator Panel */}
          <Configurator />

          {/* Floating Config Button */}
          <IconButton
            size="lg"
            color="white"
            className="fixed bottom-8 right-8 z-40 rounded-full shadow-blue-gray-900/10"
            ripple={false}
            onClick={() => setOpenConfigurator(dispatch, true)}
          >
            <Cog6ToothIcon className="h-5 w-5" />
          </IconButton>

          {/* Page Routes */}
          <div className="bg-white p-2 rounded-s shadow-sm">
            <Routes>
              {routes.map(
                ({ layout, pages }) =>
                  layout === "dashboard" &&
                  pages.map(({ path, element }) => (
                    <Route exact path={path} element={element} key={path} />
                  )),
              )}
            </Routes>
          </div>

          {/* Footer */}
          <div className="text-blue-gray-600 mt-4">
            <Footer />
          </div>
        </main>
      </div>
    </div>
  );
}

Dashboard.displayName = "/src/layout/dashboard.jsx";

export default Dashboard;

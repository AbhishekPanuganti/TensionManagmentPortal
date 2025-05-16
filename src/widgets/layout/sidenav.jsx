import PropTypes from "prop-types";
import { Link, NavLink } from "react-router-dom";
import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/outline";
import { Button, IconButton, Typography } from "@material-tailwind/react";
import { useMaterialTailwindController, setOpenSidenav } from "@/context";

export function Sidenav({ brandImg, brandName, routes }) {
  const [controller, dispatch] = useMaterialTailwindController();
  const { sidenavColor, sidenavType, openSidenav } = controller;

  const sidenavTypes = {
    dark: "bg-gradient-to-br from-gray-800 to-gray-900",
    white: "bg-white shadow-sm",
    transparent: "bg-transparent",
  };

  return (
    <aside
      className={`transition-all duration-300
    ${openSidenav ? "w-72" : "w-16"}
    ${sidenavTypes[sidenavType]}
    h-full
  `}
    >
      <div className="relative flex items-center justify-between py-4 px-4">
        {openSidenav && (
          <Link to="/" className="text-left">
            <Typography
              variant="h6"
              color={sidenavType === "dark" ? "white" : "blue-gray"}
              className="whitespace-nowrap"
            >
              {brandName}
            </Typography>
          </Link>
        )}

        <IconButton
          variant="text"
          color="white"
          size="sm"
          ripple={false}
          onClick={() => setOpenSidenav(dispatch, !openSidenav)}
          className="ml-auto"
        >
          {openSidenav ? (
            <XMarkIcon className="h-5 w-5 text-blue-gray-700" />
          ) : (
            <Bars3Icon className="h-5 w-5 text-blue-gray-700" />
          )}
        </IconButton>
      </div>

      <div className="m-2">
        {routes.map(({ layout, title, pages }, key) => (
          <ul key={key} className="mb-4 flex flex-col gap-1">
            {title && openSidenav && (
              <li className="mx-3.5 mt-4 mb-2">
                <Typography
                  variant="small"
                  color={sidenavType === "dark" ? "white" : "blue-gray"}
                  className="font-black uppercase opacity-75"
                >
                  {title}
                </Typography>
              </li>
            )}
            {pages.map(({ icon, name, path }) => (
              <li key={name}>
                <NavLink to={`/${layout}${path}`}>
                  {({ isActive }) => (
                    <Button
                      variant={isActive ? "gradient" : "text"}
                      color={
                        isActive
                          ? sidenavColor
                          : sidenavType === "dark"
                          ? "white"
                          : "blue-gray"
                      }
                      className="flex items-center gap-4 px-4 capitalize"
                      fullWidth
                    >
                      {icon}
                      {openSidenav && (
                        <Typography
                          color="inherit"
                          className="font-medium capitalize"
                        >
                          {name}
                        </Typography>
                      )}
                    </Button>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </aside>
  );
}

Sidenav.defaultProps = {
  brandImg: "/img/logo-ct.png",
  brandName: "Tension Management Portal",
};

Sidenav.propTypes = {
  brandImg: PropTypes.string,
  brandName: PropTypes.string,
  routes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

Sidenav.displayName = "/src/widgets/layout/sidenav.jsx";

export default Sidenav;

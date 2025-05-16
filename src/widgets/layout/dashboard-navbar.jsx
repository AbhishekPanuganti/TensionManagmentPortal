// import { useLocation, Link } from "react-router-dom";
// import {
//   Navbar,
//   Typography,
//   Button,
//   IconButton,
//   Breadcrumbs,
//   Input,
//   Menu,
//   MenuHandler,
//   MenuList,
//   MenuItem,
//   Avatar,
// } from "@material-tailwind/react";
// import {
//   UserCircleIcon,
//   Cog6ToothIcon,
//   BellIcon,
//   ClockIcon,
//   CreditCardIcon,
//   Bars3Icon,
// } from "@heroicons/react/24/solid";
// import {
//   useMaterialTailwindController,
//   setOpenConfigurator,
//   setOpenSidenav,
// } from "@/context";

// export function DashboardNavbar() {
//   const [controller, dispatch] = useMaterialTailwindController();
//   const { fixedNavbar, openSidenav } = controller;
//   const { pathname } = useLocation();
//   const [layout, page] = pathname.split("/").filter((el) => el !== "");

//   return (
//     <Navbar
//       color={fixedNavbar ? "white" : "transparent"}
//       className={`rounded-xl transition-all ${
//         fixedNavbar
//           ? "sticky top-4 z-40 py-4 shadow-xl shadow-blue-gray-500/10"
//           : "px-4 py-2"
//       }`}
//       fullWidth
//       blurred={fixedNavbar}
//     >

//       <div className="flex flex-col-reverse justify-between gap-6 md:flex-row md:items-center">
//         {/* Left side - Breadcrumbs and Page Title */}
//         {/* <div className="mb-6">
//   <div className="max-w-full xl:max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
//     <img src="/public/img/logo.svg" alt="Neuland Logo" className="h-12" />
//   </div>
//           <div className="mb-6 flex justify-between items-center">
//             <h1 className="text-14 font-bold text-blue-gray-800">Tension Management Portal</h1>
//           </div>
// </div> */}
// <div className="mb-6 md:mb-0 flex flex-col items-start justify-start md:w-1/2">
//           <div className="flex justify-start items-center space-x-4">
//             <img src="/public/img/logo.svg" alt="Neuland Logo" className="h-12" />
//           </div>
//           <div className="mb-6 flex justify-between items-center">
//             <h1 className="text-14 font-bold text-blue-gray-800">Tension Management Portal</h1>
//           </div>

//           <Breadcrumbs
//             className={`flex items-center space-x-2 text-sm text-gray-600 bg-transparent p-0 transition-all ${
//               fixedNavbar ? "mt-1" : ""
//             }`}
//           >
//             <Link to={`/${layout}`}>
//               <Typography
//                 variant="small"
//                 color="blue-gray"
//                 className="font-normal opacity-70 transition-all hover:text-blue-500 hover:opacity-100"
//               >
//                 {layout}
//               </Typography>
//             </Link>
//             <Typography
//               variant="small"
//               color="blue-gray"
//               className="font-semibold text-gray-800"
//             >
//               {page}
//             </Typography>
//           </Breadcrumbs>
//         </div>
//         <div className="capitalize">

//           <Typography variant="h6" color="blue-gray" className="font-bold">
//             {page}
//           </Typography>
//         </div>

//         {/* Right side - Search and Icons */}
//         <div className="flex items-center space-x-4">
//           {/* Search */}
//           <div className="hidden md:block w-56">
//             <Input label="Search" className="bg-transparent border-gray-300" />
//           </div>

//           {/* Sidenav Toggle */}
//           <IconButton
//             variant="text"
//             color="blue-gray"
//             className="xl:hidden"
//             onClick={() => setOpenSidenav(dispatch, !openSidenav)}
//           >
//             <Bars3Icon className="h-6 w-6 text-blue-gray-600" />
//           </IconButton>

//           {/* Sign In Button */}
//           <Link to="/auth/sign-in">
//             <Button
//               variant="text"
//               color="blue-gray"
//               className="hidden xl:flex items-center gap-2 px-4 normal-case"
//             >
//               <UserCircleIcon className="h-5 w-5 text-blue-gray-500" />
//               Sign In
//             </Button>
//             <IconButton
//               variant="text"
//               color="blue-gray"
//               className="xl:hidden"
//             >
//               <UserCircleIcon className="h-5 w-5 text-blue-gray-500" />
//             </IconButton>
//           </Link>

//           {/* Notifications */}
//           <Menu>
//             <MenuHandler>
//               <IconButton variant="text" color="blue-gray">
//                 <BellIcon className="h-5 w-5 text-blue-gray-500" />
//               </IconButton>
//             </MenuHandler>
//             <MenuList className="w-80 border-0 shadow-md rounded-lg mt-2">
//               <MenuItem className="flex items-center gap-3 p-3 hover:bg-gray-100">
//                 <Avatar
//                   src="https://demos.creative-tim.com/material-dashboard/assets/img/team-2.jpg"
//                   alt="item-1"
//                   size="sm"
//                   variant="circular"
//                 />
//                 <div>
//                   <Typography
//                     variant="small"
//                     color="blue-gray"
//                     className="font-semibold mb-1"
//                   >
//                     <strong>New message</strong> from Laur
//                   </Typography>
//                   <Typography
//                     variant="small"
//                     color="blue-gray"
//                     className="flex items-center gap-1 text-xs opacity-60"
//                   >
//                     <ClockIcon className="h-3.5 w-3.5" /> 13 minutes ago
//                   </Typography>
//                 </div>
//               </MenuItem>
//               <MenuItem className="flex items-center gap-4 p-3 hover:bg-gray-100">
//                 <Avatar
//                   src="https://demos.creative-tim.com/material-dashboard/assets/img/small-logos/logo-spotify.svg"
//                   alt="item-1"
//                   size="sm"
//                   variant="circular"
//                 />
//                 <div>
//                   <Typography
//                     variant="small"
//                     color="blue-gray"
//                     className="font-semibold mb-1"
//                   >
//                     <strong>New album</strong> by Travis Scott
//                   </Typography>
//                   <Typography
//                     variant="small"
//                     color="blue-gray"
//                     className="flex items-center gap-1 text-xs opacity-60"
//                   >
//                     <ClockIcon className="h-3.5 w-3.5" /> 1 day ago
//                   </Typography>
//                 </div>
//               </MenuItem>
//               <MenuItem className="flex items-center gap-4 p-3 hover:bg-gray-100">
//                 <div className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-tr from-blue-gray-800 to-blue-gray-900">
//                   <CreditCardIcon className="h-4 w-4 text-white" />
//                 </div>
//                 <div>
//                   <Typography
//                     variant="small"
//                     color="blue-gray"
//                     className="font-semibold mb-1"
//                   >
//                     Payment successfully completed
//                   </Typography>
//                   <Typography
//                     variant="small"
//                     color="blue-gray"
//                     className="flex items-center gap-1 text-xs opacity-60"
//                   >
//                     <ClockIcon className="h-3.5 w-3.5" /> 2 days ago
//                   </Typography>
//                 </div>
//               </MenuItem>
//             </MenuList>
//           </Menu>

//           {/* Settings */}
//           <IconButton
//             variant="text"
//             color="blue-gray"
//             onClick={() => setOpenConfigurator(dispatch, true)}
//           >
//             <Cog6ToothIcon className="h-5 w-5 text-blue-gray-500" />
//           </IconButton>
//         </div>
//       </div>
//     </Navbar>
//   );
// }

// DashboardNavbar.displayName = "/src/widgets/layout/dashboard-navbar.jsx";

// export default DashboardNavbar;
import { useLocation, Link } from "react-router-dom";
import {
  Navbar,
  Typography,
  Button,
  IconButton,
  Breadcrumbs,
  Input,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
} from "@material-tailwind/react";
import {
  UserCircleIcon,
  Cog6ToothIcon,
  BellIcon,
  ClockIcon,
  CreditCardIcon,
  Bars3Icon,
} from "@heroicons/react/24/solid";
import {
  useMaterialTailwindController,
  setOpenConfigurator,
  setOpenSidenav,
} from "@/context";

export function DashboardNavbar() {
  const [controller, dispatch] = useMaterialTailwindController();
  const { fixedNavbar, openSidenav } = controller;
  const { pathname } = useLocation();
  const [layout, page] = pathname.split("/").filter((el) => el !== "");

  return (
    <Navbar
      className={`h-20 px-4 flex items-center justify-between
        ${fixedNavbar ? "sticky top-0 z-40" : ""}
        bg-[#084434] text-white rounded-none shadow-none border-none`}
      fullWidth
    >
      {/* Left - Logo and Breadcrumb */}
      <div className="flex flex-col items-start gap-1">
        <img src="/img/logo.svg" alt="Neuland Logo" className="h-10 text-white" />
        <Typography variant="small" className="font-bold text-white text-sm">
          Tension Management Portal
        </Typography>
      </div>

      {/* Center - Page Title */}
      <Typography
        variant="h6"
        className="capitalize font-bold text-sm hidden lg:block text-white"
      >
        {page}
      </Typography>

      {/* Right - Icons and Buttons */}
      <div className="flex items-center gap-2">
        {/* Search */}
        {/* <div className="hidden md:block w-40">
          <Input
            label="Search"
            className="bg-white/10 border border-white/30 text-white placeholder-white h-9 text-sm"
            containerProps={{ className: "min-w-0" }}
            labelProps={{ className: "text-white" }}
          />
        </div> */}

        {/* Toggle Sidenav */}
        <IconButton
          variant="text"
          className="xl:hidden text-white"
          onClick={() => setOpenSidenav(dispatch, !openSidenav)}
        >
          <Bars3Icon className="h-5 w-5" />
        </IconButton>

        {/* Sign In */}
        <Link to="/auth/sign-in">
          <Button
            variant="text"
            className="hidden xl:flex items-center gap-1 px-3 py-1 normal-case text-xs text-white"
          >
            <UserCircleIcon className="h-4 w-4" />
            Sign In
          </Button>
          <IconButton variant="text" className="xl:hidden text-white">
            <UserCircleIcon className="h-5 w-5" />
          </IconButton>
        </Link>

        {/* Notifications */}
        <Menu>
          <MenuHandler>
            <IconButton variant="text" className="text-white">
              <BellIcon className="h-5 w-5" />
            </IconButton>
          </MenuHandler>
          <MenuList className="w-80 border-0 rounded-none shadow-none mt-2">
            {/* Items */}
            <MenuItem className="flex items-center gap-3 p-3 hover:bg-gray-100">
              <Avatar
                src="https://demos.creative-tim.com/material-dashboard/assets/img/team-2.jpg"
                alt="item-1"
                size="sm"
                variant="circular"
              />
              <div>
                <Typography
                  variant="small"
                  className="font-semibold text-sm text-blue-gray-800"
                >
                  <strong>New message</strong> from Laur
                </Typography>
                <Typography
                  variant="small"
                  className="flex items-center gap-1 text-xs opacity-60 text-blue-gray-600"
                >
                  <ClockIcon className="h-3.5 w-3.5" /> 13 minutes ago
                </Typography>
              </div>
            </MenuItem>
            {/* More items... */}
          </MenuList>
        </Menu>

        {/* Config Button */}
        <IconButton
          variant="text"
          className="text-white"
          onClick={() => setOpenConfigurator(dispatch, true)}
        >
          <Cog6ToothIcon className="h-5 w-5" />
        </IconButton>
      </div>
    </Navbar>
  );
}

DashboardNavbar.displayName = "/src/widgets/layout/dashboard-navbar.jsx";

export default DashboardNavbar;

import Account from "../Components/Accounts/Account";
import Login from "../Components/Accounts/Logins/Login";
import Register from "../Components/Accounts/Registers/Register";
import Contact from "../Pages/Contact";
import HomePage from "../Pages/HomePage";
import Shop from "../Pages/Shop";

const listRoute = [
  {
    path: "",
    component: <HomePage />,
  },
  {
    path: "shop",
    component: <Shop />,
  },
  {
    path: "contact",
    component: <Contact />,
  },
  {
    path: "register",
    component: <Register />,
  },
  {
    path: "account",
    component: <Account />,
  },
  {
    path: "login",
    component: <Login />,
  },
];

export default listRoute;

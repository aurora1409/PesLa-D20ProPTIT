import Account from "../Components/Accounts/Account";
import Login from "../Components/Accounts/Logins/Login";
import Register from "../Components/Accounts/Registers/Register";
import HomePage from "../Pages/HomePage";

const listRoute = [
  {
    path: "",
    component: <HomePage />,
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

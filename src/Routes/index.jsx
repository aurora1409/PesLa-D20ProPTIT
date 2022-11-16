import Account from "../Components/Accounts/Account";
import Login from "../Components/Accounts/Logins/Login";
import Register from "../Components/Accounts/Registers/Register";
import Cart from "../Pages/Cart";
import Contact from "../Pages/Contact";
import HomePage from "../Pages/HomePage";
import Item from "../Pages/Item";
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
    path: "cart",
    component: <Cart />,
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
  // {
  //   path: "login",
  //   component: <Login />,
  // },
  {
    path: "product-:id",
    component: <Item />,
  },
];

export default listRoute;

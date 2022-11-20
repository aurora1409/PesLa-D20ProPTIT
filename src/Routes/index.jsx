import Account from "../Pages/Accounts/Account";
import Login from "../Components/Logins/Login";
import Register from "../Components/Registers/Register";
import Cart from "../Pages/Cart";
import Contact from "../Pages/Contact";
import HomePage from "../Pages/HomePage";
import Item from "../Pages/Item";
import Shop from "../Pages/Shop";
import CustomerInfo from "../Pages/CustomerInfos/CustomerInfo";
import Order from "../Pages/Orders/Order";

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
    component: <Account/>,
  },
  {
    path: "login",
    component: <Login />,
  },
  {
    path: "product-:id",
    component: <Item />,
  },
  {
    path: "customerInfo",
    component: <CustomerInfo />,
  },
  {
    path: "order",
    component: <Order/>,
  },
];

export default listRoute;

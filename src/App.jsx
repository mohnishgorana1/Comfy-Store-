import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  HomeLayout,
  Landing,
  Error,
  Products,
  SingleProduct,
  Cart,
  About,
  Register,
  Login,
  Checkout,
  Orders,
} from "./pages";

import { loader as landingLoader } from './pages/Landing'
import { loader as productsLoader } from './pages/Products'
import { loader as SingleProductLoader} from './pages/SingleProduct.jsx'




const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        loader: landingLoader,
        errorElement: <Error />,
      },
      {
        path: "products",
        element: <Products />,
        loader: productsLoader,
        errorElement: <Error />,
      },
      {
        path: "products/:id",
        element: <SingleProduct />,
        loader: SingleProductLoader,
        errorElement: <Error />,
      },
      {
        path: "cart",
        element: <Cart />,
        errorElement: <Error />,
      },
      {
        path: "about",
        element: <About />,
        errorElement: <Error />,
      },

      {
        path: "checkout",
        element: <Checkout />,
        errorElement: <Error />,
      },
      {
        path: "orders",
        element: <Orders />,
        errorElement: <Error />,
      },
    ],

  },
  {
    path: '/login',
    element: <Login />,
    errorElement: <Error />,
  },
  {
    path: '/register',
    element: <Register />,
    errorElement: <Error />,
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;

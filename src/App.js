import "./app.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProductList from "./components/product-list/ProductList";
import Product from "./components/product/Product";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ProductList />,
  },
  {
    path: "products/:productId",
    element: <Product />,
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;

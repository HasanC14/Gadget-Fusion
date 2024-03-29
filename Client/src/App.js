import { RouterProvider } from "react-router-dom";
import routes from "./routes/routes";
import ProductProvider from "./Context/ProductProvider";

function App() {
  return (
    <div>
      <ProductProvider>
        <RouterProvider router={routes} />
      </ProductProvider>
    </div>
  );
}

export default App;

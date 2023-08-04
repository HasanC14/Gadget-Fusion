import { RouterProvider } from "react-router-dom";
import routes from "./routes/routes";
import { createContext } from "react";
export const PRODUCT_CONTEXT = createContext();
function App() {
  return (
    <div>
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [],
  },
  {
    path: "/tabletennis",
    element: <Home />,
    children: [],
  },
  {
    path: "/pool",
    element: <Home />,
    children: [],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

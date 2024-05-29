import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import Error from "../Error";
import Home from "../pages/Home/Home";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import Profile from "../pages/Profile";
import PrivateRoute from "./PrivateRoute";
import AddFood from "../pages/AddFood";
import ManageMyFoods from "../pages/ManageMyFoods";
import UpdateFood from "../pages/UpdateFood";
import ViewFood from "../pages/ViewFood";
import AvailableFoods from "../pages/AvailableFoods";
import MyRequestedFoods from "../pages/MyRequestedFoods";
import MyRequests from "../pages/MyRequests";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/user-profile/:name",
        element: (
          <PrivateRoute>
            <Profile></Profile>
          </PrivateRoute>
        ),
      },
      {
        path: "/add-food/:email",
        element: (
          <PrivateRoute>
            <AddFood></AddFood>
          </PrivateRoute>
        ),
      },
      {
        path: "/my-foods/:email",
        element: (
          <PrivateRoute>
            <ManageMyFoods></ManageMyFoods>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://bliss-bite-server.vercel.app/my-food/${params.email}`),
      },
      {
        path: "/update-food/:id",
        element: (
          <PrivateRoute>
            <UpdateFood></UpdateFood>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://bliss-bite-server.vercel.app/get-food/${params.id}`),
      },
      {
        path: "/view-food/:id",
        element: (
          <PrivateRoute>
            <ViewFood></ViewFood>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://bliss-bite-server.vercel.app/get-food/${params.id}`),
      },
      {
        path: "/available-foods",
        element: <AvailableFoods></AvailableFoods>,
        loader: () => fetch("https://bliss-bite-server.vercel.app/available-foods"),
      },
      {
        path: "/my-requested-foods/:email",
        element: <PrivateRoute><MyRequestedFoods></MyRequestedFoods></PrivateRoute>,
        loader: ({params}) => fetch(`https://bliss-bite-server.vercel.app/my-requested-foods/${params.email}` ),
      },
      {
        path: "/requests/:email",
        element: <PrivateRoute><MyRequests></MyRequests></PrivateRoute>,
        loader: ({params}) => fetch(`https://bliss-bite-server.vercel.app/requests/${params.email}` ),
      },

    ],
  },
]);
export default router;

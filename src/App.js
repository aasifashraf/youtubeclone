import Navigationbar from "./components/Navigationbar/Navigationbar";
import Body from "./components/Body/Body";
import { Provider } from "react-redux";
import store from "./utilities/ReduxStore/Store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Videos from "./components/Body/VideoSection/Videos";
import WatchVideos from "./components/Body/VideoSection/WatchVideos";

function App() {
  const routerapp = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      children: [
        {
          path: "/",
          element: <Videos />,
        },
        {
          path: "/watch",
          element: <WatchVideos />,
        },
      ],
    },
  ]);
  return (
    <Provider store={store}>
      <div className=" flex flex-col">
        <Navigationbar />
        <RouterProvider router={routerapp} />
      </div>
    </Provider>
  );
}

export default App;

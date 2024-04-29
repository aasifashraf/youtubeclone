import Navigationbar from "./components/Navigationbar/Navigationbar";
import Body from "./components/Body/Body";
import { Provider } from "react-redux";
import store from "./utilities/ReduxStore/Store";
function App() {
  return (
    <Provider store={store}>
      <div className=" flex flex-col">
        <Navigationbar />
        <Body />
      </div>
    </Provider>
  );
}

export default App;

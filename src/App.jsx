import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Spinner from "./components/Spinner";

const App = () => {
  const navigation = useNavigation()
  return (
    <>
      <Navbar />
      {
        navigation.state === "loading" ? <Spinner /> : <Outlet />
      }
    </>
  );
};

export default App;
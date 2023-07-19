import { Route, Routes } from "react-router-dom";

import "./App.css";
import HomeScreen from "./Screen/HomeScreen";


function App (): JSX.Element {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<HomeScreen/>} />
        </Routes>
      </div>
    </>
  );
}

export default App;

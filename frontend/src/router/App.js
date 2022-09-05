import { Routes, Route } from "react-router-dom";
import Error from "../components/Error/Error";
import CreateEmployee from "../pages/CreateEmployee";
import CurrentEmployee from "../pages/CurrentEmployee";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<CreateEmployee />}></Route>
        <Route path="/current-employee" element={<CurrentEmployee />}></Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;

import { Route, Routes } from "react-router";
import "./App.css";
import listRoute from "./Routes";

function App() {
  return (
    <div className="App">
      <Routes>
        {listRoute.map((value, index) => {
          return (
            <Route
              key={index}
              path={"/" + value.path}
              element={value.component}
            />
          );
        })}
      </Routes>
    </div>
  );
}

export default App;

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import DataProvider from "./components/Context";
// import Card from "./components/Card";
import PeopleDetail from "./components/PeopleDetail";
import PeopleList from "./components/PeopleList";

function App() {
  return (
    <Router>
      <DataProvider>
        <Routes>
          <Route path="/" element={<PeopleList />}></Route>
          <Route path="/people/:name" element={<PeopleDetail />} />
          <Route />
        </Routes>
      </DataProvider>
    </Router>
  );
}

export default App;

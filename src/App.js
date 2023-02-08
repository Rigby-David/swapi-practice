import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
// import Card from "./components/Card";
import PeopleDetail from "./components/PeopleDetail";
import PeopleList from "./components/PeopleList";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PeopleList />}></Route>
        <Route path="/people/:name" element={<PeopleDetail />} />
        <Route />
      </Routes>
    </Router>
  );
}

export default App;

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FormPage from "./component/Form";
import SuccessPage from "./component/Success";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FormPage />} />
        <Route path="/success" element={<SuccessPage />} />
      </Routes>
    </Router>
  );
};

export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pagine/dettagli/Homepage.jsx";
import ErrorPage from "./pagine/dettagli/paginaerrore";
import Details from "./pagine/dettagli/Dettagli.jsx";

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<HomePage />} />

      <Route path="book/:id" element={<Details />} />

      <Route path="*" element={<ErrorPage />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;

import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Country from "./pages/Country";
import Recipe from "./pages/Recipe";


function App() {
  return (
    <BrowserRouter>
      <Routes>
         <Route path="/" element={<Home />} />
        <Route path="/country/:name" element={<Country />} />
        <Route path="/recipe/:dishId" element={<Recipe />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

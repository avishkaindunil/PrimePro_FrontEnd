import "./App.css";

import { Route, BrowserRouter, Routes } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import News from "./pages/News";
import Services from "./pages/Services";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />} >
            <Route index element={<News />} />
            <Route path="/services" element={<Services />} />
            <Route path="/news" element={<News />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>

  );
}

export default App;

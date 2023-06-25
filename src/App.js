import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Category from "./pages/Category";
import Layout from './components/Layout/Layout';

function App() {
  return (
    <BrowserRouter>
    <Layout/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/category/:categoryType" element={<Category />}/>
          {/* <Route path="*" element={<NoPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;

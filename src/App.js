import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";
import SharedLayout from "./pages/SharedLayout";
import Login from "./pages/Login";
import AllProducts from "./pages/AllProducts";

function App() {
  return (
      <BrowserRouter>
        <Routes> 
          <Route path="/" element={ <SharedLayout/> }>
            <Route index element={ <Home/> }/>
            <Route path="products" element={ <AllProducts/> }/>
            <Route path="login" element={ <Login/> }/>
          </Route>
          <Route path="*" element={ <PageNotFound/> }/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Error from "./pages/Error";
import SharedLayout from "./pages/SharedLayout";
import Login from "./pages/Login";

function App() {
  return (
      <BrowserRouter>
        <Routes> 
          <Route path="/" element={ <SharedLayout/> }>
            <Route index element={ <Home/> }/>
            <Route path="login" element={ <Login/> }/>
          </Route>
          <Route path="*" element={ <Error/> }/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;

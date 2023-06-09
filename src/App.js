import AuthPage from "./Router/auth-page/auth-page.router";
import ProductsPage from "./Router/products-page/products-page.component";
import './App.css'
import { Route, Routes } from "react-router-dom";
function App() {
  return(
    <Routes>
      <Route>
      <Route index={true} element={<AuthPage/>}/>      
      <Route path="/products"element={<ProductsPage/>} ></Route>
      </Route>
    </Routes>
  )
}

export default App;

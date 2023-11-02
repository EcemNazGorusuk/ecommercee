import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Switch,
} from "react-router-dom";
import Shop from "./Pages/Shop";
import ShopCategory from "./Pages/ShopCategory";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import LoginSignup from "./Pages/LoginSignup";
import Footer from "./Components/Footer/Footer";
//terminalde şu komutu çalıştır : npm install react-router-dom
import men_banner from "./Components/Assets/banner_mens.png";
import women_banner from "./Components/Assets/banner_women.png";
import kids_banner from "./Components/Assets/banner_kids.png";

function App() {
  return (
    <div>
      <Router>
        <NavBar></NavBar>
        <Routes>
          {/* Shop.jsx burada path="/" olduğu için anasayfa konumunda */}
          <Route path="/" element={<Shop />}></Route>
          <Route
            path="/mans"
            element={<ShopCategory category="men" banner={men_banner} />}
          ></Route>
          <Route
            path="/womans"
            element={<ShopCategory category="women" banner={women_banner} />}
          ></Route>
          <Route
            path="/kids"
            element={<ShopCategory category="kid" banner={kids_banner} />}
          ></Route>

          <Route path="/product" element={<Product />}>
            {/* her bir producta tıklanınca gideceği route: */}
            <Route path=":productId" element={<Product />} />
          </Route>

          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/login" element={<LoginSignup />}></Route>
        </Routes>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;

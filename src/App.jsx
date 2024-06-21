import "./App.css";
import { Home } from "./pages/Home";
import { Nav } from "./components/Nav.jsx";
import { TopBar } from "./components/TopBar.jsx";
import { Route, Routes } from "react-router-dom";
import { Store } from "./pages/Store.jsx";
import { Events } from "./pages/Events.jsx";
import { Suscription } from "./pages/Suscription.jsx";
import { We } from "./pages/We.jsx";
import { Cart } from "./pages/Cart.jsx";

function App() {
  return (
    <main>
      <TopBar />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tienda" element={<Store />} />
        <Route path="/eventos" element={<Events />} />
        <Route path="/suscripciones" element={<Suscription />} />
        <Route path="/nosotras" element={<We />} />
        <Route path="/carrito" element={<Cart />} />
      </Routes>
    </main>
  );
}

export default App;

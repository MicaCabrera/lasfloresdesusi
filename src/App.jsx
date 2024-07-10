import "./App.css";
import { Home } from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import { Store } from "./pages/Store.jsx";
import { Events } from "./pages/Events.jsx";
import { Suscription } from "./pages/Suscription.jsx";
import { Faq } from "./pages/Faq.jsx";
import { AppLayout } from "./layouts/AppLayout.jsx";
import { CartDrawer } from "./components/cart/CartDrawer.jsx";
import { Product } from "./pages/products/Product.jsx";

function App() {
  return (
    <AppLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tienda" element={<Store />} />
        <Route path="/eventos" element={<Events />} />
        <Route path="/suscripciones" element={<Suscription />} />
        <Route path="/nosotros" element={<Faq />} />
        <Route path="/carrito" element={<CartDrawer />} />
        <Route path="/tienda/:id" element={<Product />} />
      </Routes>
    </AppLayout>
  );
}

export default App;

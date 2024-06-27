import "./App.css";
import { Home } from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import { Store } from "./pages/Store.jsx";
import { Events } from "./pages/Events.jsx";
import { Suscription } from "./pages/Suscription.jsx";
import { Faq } from "./pages/Faq.jsx";
import { AppLayout } from "./layouts/AppLayout.jsx";
import { CartDrawer } from "./components/CartDrawer.jsx";

function App() {
  return (
    <AppLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tienda" element={<Store />} />
        <Route path="/eventos" element={<Events />} />
        <Route path="/suscripciones" element={<Suscription />} />
        <Route path="/nosotras" element={<Faq />} />
        <Route path="/carrito" element={<CartDrawer />} />
      </Routes>
    </AppLayout>
  );
}

export default App;

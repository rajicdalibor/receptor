import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";
import "./styles/global.css";
import "./styles/pages.css";
import "./styles/home.css";
import { I18nProvider } from "./i18n/context";
import { Layout } from "./components/Layout";
import { ScrollToTop } from "./components/ScrollToTop";
import Home from "./pages/Home";
import Meni from "./pages/Meni";
import Vino from "./pages/Vino";
import Pica from "./pages/Pica";
import Business from "./pages/Business";
import Proslave from "./pages/Proslave";
import Galerija from "./pages/Galerija";
import Kontakt from "./pages/Kontakt";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <I18nProvider>
      <HashRouter>
        <ScrollToTop />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/meni" element={<Meni />} />
            <Route path="/vinska-karta" element={<Vino />} />
            <Route path="/karta-pica" element={<Pica />} />
            <Route path="/business-lunch" element={<Business />} />
            <Route path="/proslave" element={<Proslave />} />
            <Route path="/galerija" element={<Galerija />} />
            <Route path="/kontakt" element={<Kontakt />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </Layout>
      </HashRouter>
    </I18nProvider>
  </StrictMode>
);

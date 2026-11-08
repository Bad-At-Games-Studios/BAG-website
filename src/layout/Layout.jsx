import { Outlet, ScrollRestoration } from "react-router-dom";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import ThemeManager from "../components/ThemeManager/ThemeManager";
import LoadingSection from "../components/LoadingSection/LoadingSection";

const Layout = () => {
  return (
    <>
      <LoadingSection />
      <ScrollRestoration />
      <ThemeManager />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;

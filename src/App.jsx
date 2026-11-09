import { lazy } from "react";
import { Analytics } from "@vercel/analytics/react";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "./layout/Layout";

const AllGame = lazy(() => import("./pages/AllGame/AllGame"));
const CompanyMain = lazy(() => import("./pages/CompanyMain/CompanyMain"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy/PrivacyPolicy"));
const TermsAndConditions = lazy(
  () => import("./pages/TermsAndConditions/TermsAndConditions"),
);
const NotfoundSection = lazy(
  () => import("./components/NotfoundSection/NotfoundSection"),
);
const AllTeam = lazy(() => import("./pages/AllTeam/AllTeam"));
const AllNews = lazy(() => import("./pages/AllNews/AllNews"));
const AboutNews = lazy(() => import("./pages/AboutNews/AboutNews"));
const UninvitedPage = lazy(() => import("./pages/Uninvited/UninvitedPage"));
const StayAheadPage = lazy(() => import("./pages/StayAhead/StayAheadPage"));
const SupermarketShowdownPage = lazy(
  () => import("./pages/SupermarketShowdown/SupermarketShowdownPage"),
);
const NotCompatiblePage = lazy(
  () => import("./pages/NotCompatible/NotCompatiblePage"),
);

import Recaptcha from "./auth/Recaptcha";

import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <CompanyMain />,
      },
      {
        path: "game",
        element: <AllGame />,
      },
      {
        path: "team",
        element: <AllTeam />,
      },
      {
        path: "news",
        element: <AllNews />,
      },
      {
        path: "notcompatible",
        element: <NotCompatiblePage />,
      },
      {
        path: "supermarketshowdown",
        element: <SupermarketShowdownPage />,
      },
      {
        path: "stayahead",
        element: <StayAheadPage />,
      },
      {
        path: "uninvited",
        element: <UninvitedPage />,
      },
      {
        path: "aboutnews/:id",
        element: <AboutNews />,
      },
      {
        path: "tc",
        element: <TermsAndConditions />,
      },
      {
        path: "pp",
        element: <PrivacyPolicy />,
      },
      {
        path: "*",
        element: <NotfoundSection />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <GoogleReCaptchaProvider
        reCaptchaKey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
      >
        <Recaptcha />
        <Analytics />
        <RouterProvider router={router} />
      </GoogleReCaptchaProvider>
    </>
  );
}

export default App;

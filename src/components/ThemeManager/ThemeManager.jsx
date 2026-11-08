import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const themes = {
  "/": "default",
  "/game": "default",
  "/team": "default",
  "/news": "default",
  "/stayahead": "SA",
  "/uninvited": "UI",
  "/supermarketshowdown": "SS",
  "/notcompatible": "NC",
  "/tc": "default",
  "/pp": "default",
};

export default function ThemeManager() {
  const location = useLocation();

  useEffect(() => {
    const theme = themes[location.pathname] || "default";

    document.documentElement.dataset.theme = theme;
  }, [location.pathname]);

  return null;
}

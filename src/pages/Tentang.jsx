import React, { useContext, useEffect, useState } from "react";
import { ScrollTop } from "../components/Button";
import { ThemeContext } from "../context/themeContext";
import {
  LayoutOFBeranda,
} from "../components/Assets";

const Tentang = () => {
  const { theme } = useContext(ThemeContext);
  const [showScrollButton, setShowScrollButton] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 300
        ? setShowScrollButton(true)
        : setShowScrollButton(false);
    });
  }, []);
  return (
    <>
      <main className={theme}>
        {showScrollButton && (
          <ScrollTop
            actions={() => {
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
          />
        )}
        <h1>Spesifikasi Tugas Individu 3</h1>
        <div className="container column minimal-gap">
          <div className="container column half-width minimal-gap">
            <div>
              <LayoutOFBeranda />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Tentang;

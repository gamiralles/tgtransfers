import React from "react";
import logo from "/LogoTG.png";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const SetLenguage = () => {
  const { i18n } = useTranslation();
  const lngs = {
    es: { nativeName: "Español" },
    en: { nativeName: "Ingles" },
    pr: { nativeName: "Portugues" },
  };

  return (
    <div className="setLenguage d-flex flex-column">
      <div className="imagen d-flex justify-content-center">
      <img src={logo} className="img-fluid" alt="" />
      </div>
      <div className="botones">
        <Link to={"/inicio"} className="text-decoration-none">
          <div className="d-flex flex-column">
            {Object.keys(lngs).map((lng) => (
              <button
                key={lng}
                style={{
                  fontWeight: i18n.resolvedLanguage === lng ? "bold" : "normal",
                }}
                type="submit"
                onClick={() => i18n.changeLanguage(lng)}
                className="btn btn-sm btn-outline-primary mt-3 ms-5 me-5"
              >
                {lngs[lng].nativeName}
              </button>
            ))}
          </div>
        </Link>
        <br />
        <br />
        <br />
        <div className="text-center ps-3 pe-3">
        <p>Derechos reservados TG Transfers © 2023</p>
        </div>
      </div>
    </div>
  );
};

export default SetLenguage;

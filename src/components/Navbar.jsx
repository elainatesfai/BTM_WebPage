import React, { useCallback, useEffect, useState } from "react";
import "../css/navbar.css";
import BTM from "../images/Navbar-icon.png"
 
export default function Navbar() {
  const [toggle, setToggle] = useState(false);
  const [active, setActive] = useState("home");
  const [scrollUp, setScrollUp] = useState(false);
 
  const handleNavToggle = () => {
    const state = toggle;
    setToggle(!state);
  };
 
  const handleNavItemClick = (item ) => {
    handleNavToggle();
    handleScroll(item);
  };
 
  const scroll = useCallback(() => {
    document.addEventListener("scroll", () => {
      const navArray = [
        "home",
        "about",
        "services",
        "talents",
        "experts",
        "recruitment",
        "contact"
      ];
 
      if (window.pageYOffset > 300) {
        setScrollUp(true);
      } else setScrollUp(false);
 
      navArray.forEach(async (element) => {
 
        if (window.innerHeight < 500) setActive("home");
        if (window.innerHeight > (await getPos(element)))
 

          setActive(element);
      });
    });
  }, []);
 
  useEffect(() => {
    scroll();
  }, [scroll]);
 
  const getPos = async (id) => {
    const element = await document.getElementById(id);
    const elementPosition = element.getBoundingClientRect().bottom;
 
    return elementPosition;
  };
 
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    const elementPosition = element.getBoundingClientRect().top;
    setActive(id);
 
    window.scrollBy({
      top: elementPosition - 60,
      behavior: "smooth"
    });
  };
  return (
    <>
      <div className="navbar-position">
        <div
          className={"pageScroll" + (scrollUp ? " show" : "")}
          onClick={() => handleScroll("home")}
        >
          <i className="fas fa-chevron-up"></i>
        </div>
        <div className="navbar-container">
          <div className="navbar">
            <div className="brand-container">
              <a href="/" className="nav-brand">
                <img className="btm-logo" src={BTM} alt="BTM" />
                BTM
              </a>
              <div className="nav-toggler" onClick={handleNavToggle}>
                <i className={"fas " + (toggle ? "fa-times" : "fa-bars")}></i>
              </div>
            </div>
            <div className={"nav-collapse" + (toggle ? " show" : "")}>
              <div className="navbar-list">
                <li className="nav-item">
                  <button
                    className={
                      "nav-link" + (active === "home" ? " active" : "")
                    }
                    onClick={() => handleNavItemClick("home")}
                  >
                    Home
                  </button>
                </li>
                <li
                  className="nav-item"
                  onClick={() => handleNavItemClick("about")}
                >
                  <button
                    className={
                      "nav-link" + (active === "about" ? " active" : "")
                    }
                  >
                    About
                  </button>
                </li>
                <li
                  className="nav-item"
                  onClick={() => handleNavItemClick("services")}
                >
                  <button
                    className={
                      "nav-link" + (active === "services" ? " active" : "")
                    }
                  >
                    Services
                  </button>
                </li>
 
                <li
                  className="nav-item"
                  onClick={() => handleNavItemClick("talents")}
                >
                  <button
                    className={
                      "nav-link" + (active === "talents" ? " active" : "")
                    }
                  >
                    Talents
                  </button>
                </li>
                <li
                  className="nav-item"
                  onClick={() => handleNavItemClick("experts")}
                >
                  <button
                    className={
                      "nav-link" + (active === "experts" ? " active" : "")
                    }
                  >
                    Experts
                  </button>
                </li>
 
                <li
                  className="nav-item"
                  onClick={() => handleNavItemClick("recruitment")}
                >
                  <button
                    className={
                      "nav-link" + (active === "recruitment" ? " active" : "")
                    }
                  >
                    Recruitment
                  </button>
                </li>
 
                <li
                  className="nav-item"
                  onClick={() => handleNavItemClick("contact")}
                >
                  <button
                    className={
                      "nav-link" + (active === "contact" ? " active" : "")
                    }
                  >
                    Contact
                  </button>
                </li>
              </div>
              {/* <div className="navbar-social">
                <span className="icon">
                  <i className="fab fa-linkedin"></i>
                </span>
                <span className="icon">
                  <i className="fab fa-instagram"></i>
                </span>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
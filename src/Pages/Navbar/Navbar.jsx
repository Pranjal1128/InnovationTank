import React, { useState, useEffect } from "react";
import "./Navbar.css";
import IcellLogo from "../../Assets/images/Icell4.png";
import Logo from "../../Assets/images/i3_0.png";
import { GrCircleInformation } from "react-icons/gr";
import { IoMdMenu } from "react-icons/io";

function Navbar() {
  const [isInfoModalOpen, setInfoModalOpen] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);

  const openInfoModal = () => setInfoModalOpen(!isInfoModalOpen);
  //   const closeInfoModal = () => setInfoModalOpen(false);
  

  const openMenu = () => setMenuOpen(!isMenuOpen);
  //   const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        isInfoModalOpen &&
        !event.target.closest(".info-btn") &&
        !event.target.closest(".modal")
      ) {
        openInfoModal();
      }

      if (
        isMenuOpen &&
        !event.target.closest(".menu-btn") &&
        !event.target.closest(".menu")
      ) {
        openMenu();
      }
    };

    window.addEventListener("click", handleOutsideClick);

    return () => {
      window.removeEventListener("click", handleOutsideClick);
    };
  }, [isInfoModalOpen, isMenuOpen]);

  return (
    <div>
      <div className="nav">
        <div onClick={openInfoModal}>
          <GrCircleInformation className="info-btn" />
        </div>
        <div>
          <img src={IcellLogo} alt="Icell" width={30} />
        </div>
        <div onClick={openMenu}>
          <IoMdMenu className="menu-btn" />
        </div>
      </div>

      {/* Info Modal */}
      {isInfoModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="modal-header">
              <h2>Instructions</h2>
            </div>
            <ul className="modal-content">
              <li>Don't share this app with your friends</li>
              <li>Don't share this app with your friends</li>
              <li>Don't share this app with your friends</li>
              <li>Don't share this app with your friends</li>
              <li>Don't share this app with your friends</li>
              <li>Don't share this app with your friends</li>
            </ul>
          </div>
        </div>
      )}

      {/* Menu */}
      {isMenuOpen && (
        <div className="menu-overlay">
          <div className="menu-heading">
            <div className="logoname">
              <h2 className="-logo--name">Stocks Up</h2>
              <div>
                <img src={Logo} alt="stocksUp-logo" width={40} height={40} />
              </div>
            </div>
            {/* <div>Where Ideas Take Flight, Investors Unite!</div> */}
          </div>
          <div className="menu">
            <div className="menu-options">
              <a href="#Portfolio" className="menu-item">Home</a>
              <a href="#Portfolio" className="menu-item"> Ranking</a>
              <a href="#Portfolio" className="menu-item">User Portfolio</a>
              <a href="#Portfolio" className="menu-item">Log Out</a>
            </div>
            {/* <span onClick={openMenu} className="close-btn">
              &times;
            </span> */}
          </div>
          <div className="powered-menu">
            Powered by <span className="icell-menu">Innovation Cell</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;

import React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./NavBar.css";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button className="navbar-button" onClick={handleToggle}>
        Navigation Bar
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.5 }}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "200px",
              height: "100%",
              backgroundColor: "#333",
              color: "white",
              padding: "20px",
            }}
          >
            <ul>
              <li>Link 1</li>
              <li>Link 2</li>
              <li>Link 3</li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NavBar;

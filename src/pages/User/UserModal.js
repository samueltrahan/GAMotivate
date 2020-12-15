import React, { Component } from "react";
import ReactDOM from "react-dom";

const Modal = ({ handleClose, show, children }) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";
  
    return (
      <div className={showHideClassName}>
        <section className="modal-main">
        <nav className="modal">
                <a href="#home"><i className="home"></i>Home</a>
                <a href="#skillheader"><i className="LinkedIn"></i>LinkedIn</a>
                <a href="#portfolio"><i className="portfolio"></i>Portfolio</a>
            </nav>
          <button onClick={handleClose}>close</button>
        </section>
      </div>
    );
  };
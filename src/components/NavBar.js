import React from "react";
import "../style/NavBar.css";

const NavBar = ({ setHomePage, setFavPage }) => {
  return (
    <div
      style={{
        display: `flex`,
        flexDirection: `row`,
        justifyContent: `space-evenly`,
        marginTop: `5px`,
      }}
      className="navbar"
    >
      <span>
        <button
          style={{
            fontSize: `0.7rem`,
            borderRadius: `7px`,
            outline: `none`,
            padding: `5px`,
            fontWeight: `bold`,
            backgroundColor: `#fff`,
            borderColor: `black`,
          }}
          onClick={() => {
            setHomePage(true)
            setFavPage(false)
          }}
        >
          HOME
        </button>
      </span>

      <span>
        <button
          style={{
            fontSize: `0.7rem`,
            borderRadius: `7px`,
            outline: `none`,
            padding: `5px`,
            fontWeight: `bold`,
            backgroundColor: `#fff`,
            borderColor: `black`,
          }}
          onClick={() => {
            setFavPage(true)
            setHomePage(false)
          }}
        >
          FAVORITES
        </button>
      </span>
    </div>
  );
};

export default NavBar;

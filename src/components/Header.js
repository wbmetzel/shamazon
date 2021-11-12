import React from "react";
import "./Header.css";

function Header() {
  return(
    <div className="header">
      <img
        className="header_logo"
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="logo"/>

      <div className="header_search">
        <input className="header_searchInput" type="text"/>
        {/* Logo */}
      </div>

      <div className="header_nav">
        <div className="header_item">
          <span className="header_item_1">Hello</span>
          <span className="header_item_2">Sign in</span>
        </div>

        <div className="header_item">
          <span className="header_item_1">Returns</span>
          <span className="header_item_2">& Orders</span>
        </div>

        <div className="header_item">
          <span className="header_item_1">Your</span>
          <span className="header_item_2">Prime</span>
        </div>
      </div>

    </div>
  );
}

export default Header;

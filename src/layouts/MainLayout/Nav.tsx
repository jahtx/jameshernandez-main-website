import * as React from "react";
import $ from "jquery";
import navItemsFile from "./navItems.json";
import { nanoid } from "nanoid";
import "./Nav.scss";

type NavItemType = {
  linkName: string;
  url: string;
  ariaLabel: string;
};
const navItems: Array<NavItemType> = navItemsFile.navItems;

const Nav = () => {
  const handleToggle = () => {
    $("#a").toggleClass("a");
    $("#b").toggleClass("c");
    $("#c").toggleClass("b");
    $("#nav").toggleClass("show");
    $("#under").toggleClass("slide");
    $("#mainList").toggleClass("show");
  };
  return (
    <>
      <nav className="mobileMenu" aria-labelledby="main menu for mobile">
        <button
          role="tab"
          className="hamburger-icon"
          id="icon"
          aria-label="Show Navigation Menu"
          tabIndex={0}
          aria-expanded="false"
          aria-controls="nav"
          onClick={handleToggle}
        >
          <div className="icon-1" id="a"></div>
          <div className="icon-2" id="b"></div>
          <div className="icon-3" id="c"></div>
          <div className="clear"></div>
        </button>

        <div id="nav" role="navigation" className="listHolder">
          <h2 id="mainmenulabel" className="sr-only">
            Main Menu
          </h2>
          <ul id="mainList">
            <li>
              <a href="#home" onClick={handleToggle} className="no-break">
                Home
              </a>
            </li>
            {navItems &&
              navItems.map((navItem) => {
                const { linkName, url, ariaLabel } = navItem;
                const id = nanoid();
                return (
                  <li key={id}>
                    <a
                      href={url}
                      onClick={handleToggle}
                      aira-label={ariaLabel}
                      className="no-break"
                    >
                      <div>{linkName}</div>
                    </a>
                  </li>
                );
              })}
          </ul>
        </div>

        <div className="underBack" id="under"></div>
      </nav>
      <nav
        className="mainNav text-center"
        aria-labelledby="main menu for desktop"
      >
        <ul>
          {navItems &&
            navItems.map((navItem) => {
              const { linkName, url, ariaLabel } = navItem;
              const id = nanoid();
              return (
                <li key={id}>
                  <a href={url} aira-label={ariaLabel}>
                    {linkName}
                  </a>
                </li>
              );
            })}
        </ul>
      </nav>
    </>
  );
};

export default Nav;

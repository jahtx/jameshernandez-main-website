import React, { useState } from "react";
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
  const [isActive, setActive] = useState(false);
  const handleToggle = () => {
    setActive(!isActive);
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
          <div className={"icon-1 " + (isActive ? "a" : null)} id="a"></div>
          <div className={"icon-2 " + (isActive ? "c" : null)} id="b"></div>
          <div className={"icon-3 " + (isActive ? "b" : null)} id="c"></div>

          <div className="clear"></div>
        </button>

        <div
          id="nav"
          role="navigation"
          className={"listHolder " + (isActive ? "show" : null)}
        >
          <h2 id="mainmenulabel" className="sr-only">
            Main Menu
          </h2>
          <ul id="mainList" className={isActive ? "show" : null}>
            <li>
              <a href="/#home" onClick={handleToggle} className="no-break">
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

        <div
          className={"underBack " + (isActive ? "slide" : null)}
          id="under"
        ></div>
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

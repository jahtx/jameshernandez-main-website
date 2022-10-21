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
      <div className="mobileMenu" role="tablist">
        <button
          role="tab"
          className="hamburger-icon"
          id="menubutton"
          aria-label="Show Navigation Menu"
          tabIndex={0}
          aria-expanded={isActive ? true : false}
          aria-controls="mobileMenu"
          aria-haspopup="true"
          onClick={handleToggle}
        >
          <div
            aria-hidden="true"
            className={"icon-1 " + (isActive ? "a" : null)}
            id="a"
          ></div>
          <div
            aria-hidden="true"
            className={"icon-2 " + (isActive ? "c" : null)}
            id="b"
          ></div>
          <div
            aria-hidden="true"
            className={"icon-3 " + (isActive ? "b" : null)}
            id="c"
          ></div>

          <div aria-hidden="true" className="clear"></div>
        </button>

        <nav
          id="nav"
          role="navigation"
          className={"listHolder " + (isActive ? "show" : null)}
        >
          <h2 id="mainmenulabel" className="sr-only">
            Main Menu
          </h2>
          <ul
            id="mobileMenu"
            role="menu"
            aria-labelledby="menubutton"
            aria-label="Main Menu"
            className={isActive ? "show" : null}
          >
            <li role="none">
              <a
                role="menuitem"
                href="/#home"
                onClick={handleToggle}
                className="no-break"
              >
                Home
              </a>
            </li>
            {navItems &&
              navItems.map((navItem) => {
                const { linkName, url, ariaLabel } = navItem;
                const id = nanoid();
                return (
                  <li role="none" key={id}>
                    <a
                      role="menuitem"
                      href={url}
                      onClick={handleToggle}
                      aira-label={ariaLabel}
                      className="no-break"
                    >
                      {linkName}
                    </a>
                  </li>
                );
              })}
            <li role="none">
              <button
                role="tab"
                className="sr-only"
                aria-label="Close Navigation Menu"
                onClick={handleToggle}
                aria-controls="mobileMenu"
              >
                close menu
              </button>
            </li>
          </ul>
        </nav>

        <div
          className={"underBack " + (isActive ? "slide" : null)}
          id="under"
        ></div>
      </div>
      <nav
        className="mainNav text-center"
        aria-labelledby="main menu for desktop"
      >
        <ul role="menu" aria-label="Main Menu">
          {navItems &&
            navItems.map((navItem) => {
              const { linkName, url, ariaLabel } = navItem;
              const id = nanoid();
              return (
                <li role="none" key={id}>
                  <a role="menuitem" href={url} aira-label={ariaLabel}>
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

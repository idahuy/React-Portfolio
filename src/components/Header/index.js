import React from "react";
import Nav from "../Nav";

function Header(props) {
  const { currentTab, handleTabChange } = props;

  return (
    <div>
      <section>
        <header className="flex-row px-1">
          <div>
            <h1>Huy's Portfolio</h1>
          </div>
          <div>
            <Nav
              currentTab={currentTab}
              handleTabChange={handleTabChange}
            ></Nav>
          </div>
        </header>
      </section>
      <section class="hero">
        
        <div class="hero-cta">

          <h2>Welcome</h2>
          <p>
            Welcome to Huy's portfolio page built with React. Here,
            you can find some samples of all of my projects through my web development journey.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Header;
import React from "react";

import Founder from "./Founder";
import Menu from "./Menu";

const Home = () => {
  return (
    <>
      <section className="home">
        <div>
            <h1>Burger Shop</h1>
            <p>Give yourself a tasty burger.</p>
        
        </div>
        <a href="#menu">Explore Menu </a>
      </section>
      <Menu />
      <Founder />
    </>
  );
};
export default Home;

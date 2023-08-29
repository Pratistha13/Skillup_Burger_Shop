/* eslint-disable jsx-a11y/anchor-has-content */
import SearchIcon from "@mui/icons-material/Search";
import FastfoodIcon from "@mui/icons-material/Fastfood";

import pic from "../../assets/skj.jpg";

const About = () => {
  return (
    <div className="about">
      <main>
        <h1>About Us</h1>
        <article>
          <h4>
            Burger Shop <FastfoodIcon />
          </h4>

          <p>
            This is a Burger Shop. The palce for most tasty burgers on the
            entire earth.
          </p>
          <p>
            Explore the various type of food and burgers. Click below to see the
            menu
          </p>
          <a href="/">
            <SearchIcon />
          </a>
        </article>
        <div>
          <h2>Founder</h2>
          <article>
            <div>
              <img src={pic} alt="Founder" />
              <h3>Nelson</h3>
            </div>
            <p>
              I am Nelson, the founder of Burger Shop. Affiliated to Good
              Taste..
            </p>
          </article>
        </div>
      </main>
    </div>
  );
};

export default About;

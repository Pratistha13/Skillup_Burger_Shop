/* eslint-disable jsx-a11y/anchor-has-content */
import {RiFindReplaceLine} from "react-icons/ri";

import pic from "../../assets/skj.jpg"

const About = () =>{
    return(
        <section className="about">
            <main>
                <h1>About Us</h1>
                <article>
                    <h4>Burger Shop</h4>
                    <p>
                        This is a Burger Shop. The palce for most tasty burgers on the entire earth.
                    </p>
                    <p>
                        Explore the various type of food and burgers. Click below to see the menu
                    </p>
                    <a href = "/"><RiFindReplaceLine /></a>
                </article>
                <div>
                   <h2>Founder</h2>
                   <article>
                    <div>
                        <img src = {pic} alt = "Founder" />
                        <h3>Nelson</h3>
                    </div>
                    <p>
                        I am Nelson, the founder of Burger Shop. Affiliated to Good Taste..
                    </p>
                   </article>
                </div>
            </main>

        </section>
    );
}

export default About;

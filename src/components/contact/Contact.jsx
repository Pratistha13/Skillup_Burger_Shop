import Popup from "reactjs-popup";

import burger from "../../assets/burger2.png"

const Contact = () => {
    return(
        <section className="contact"> 
        <form>
            <h2>Contact Us</h2>
            <input type ="text" placeholder="Name" />
            <input type = "email" placeholder="Email"/>
            <textarea placeholder="Message..." cols = "20" rows = "8"></textarea>
            <Popup trigger = {<button type = "button">Send</button>} ></Popup>
        </form>

        <div className="formBorder">
            <div>
                <img src= {burger} alt ="Burger" />
            </div>
        </div>
            
        </section>
        
    );
}

export default Contact;
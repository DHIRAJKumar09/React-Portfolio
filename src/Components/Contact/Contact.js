import React from "react";
import './contact.css'
const Contact=()=>{
  
    return(
        <section className="section" id="contact">
        <div className="title">
            <h2>Feel Free to Contact Us </h2>
            <div className="underline"></div>
        </div>

        <div className="container contact-container">
        
        <div className="left">
        
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1944.5013823180207!2d77.6051375!3d12.907543500000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae151db25a9b5d%3A0x65d1db6eedfc5710!2sAbbaappa%20Layout%2C%20Stage%202%2C%20BTM%20Layout%2C%20Bengaluru%2C%20Karnataka%20560076!5e0!3m2!1sen!2sin!4v1705760405716!5m2!1sen!2sin" 
        width="600" 
        height="450" 
        style={{border:0}}
        allowFullScreen="" 
        loading="lazy" 
        referrerpolicy="no-referrer-when-downgrade">
            
        </iframe>
        </div>
        <div className="container">
        <div className="right">
            <div className="contact-form">
                <form action="https://formspree.io/f/xnqeneev" method="post" className="contact-input">
                Username :
                <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    autoComplete="off"
                    required
                />
                Email :
                <input
                    type="email"
                    name="Email"
                    placeholder="Email"
                    autoComplete="off"
                    required
                />
                Message :
                <textarea
                name="message"
                cols="30"
                rows="6"
                required
                >


                </textarea>
                <input className="btn" type="submit" value="send"/>
                
                 </form>
                
                
            </div>
            </div>
        </div>
        </div>

        </section>
    )
}
export default Contact;
import React from 'react'
import "../styles/contact.css";

function ContactForm() {
  return (
        <div className="contact-form">
            <form action="https://formspree.io/f/xeqnkpkq" method="POST">
                <div className="form">
                    <h2 class="contact-header">Send Message</h2>
                    <input type="text" id="Name" name="Name"/>
                    <div class="contact-label" htmlFor="Name">Full Name</div>
                </div>

                <div className="form">
                    <input type="text" id="Email" name="Email"/>
                    <div class="contact-label"  htmlFor="Email">Email</div>
                </div>

                <div className="form">
                    <textarea name="Message" id="Message" cols="25" rows="3"></textarea>
                    <div class="contact-label" htmlFor="Message">Message</div>
                </div>
            
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default ContactForm
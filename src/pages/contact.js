import React from 'react';
import "../styles/contact.css";

function contact() {
  return (
    <div>
        <div>
            <p className="lofi">Send us a message</p>
        </div>

        <div className="contact-form">
            <form action="https://formspree.io/f/xeqnkpkq" method="POST">
                <div className="form">
                    <label for="Name">Name:</label>
                    <input type="text" id="Name" name="Name"/>
                </div>

                <div className="form">
                    <label for="Email">Email:</label>
                    <input type="text" id="Email" name="Email"/>
                </div>

                <div className="form">
                    <label for="Message">Message:</label>
                    <textarea name="Message" id="Message" cols="25" rows="3"></textarea>
                </div>
            
                <button type="submit">Submit</button>
            </form>
    </div>
    </div>
  )
}

export default contact
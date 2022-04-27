import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import {AiFillPhone} from 'react-icons/ai';
import ContactForm from '../components/contact-form';
import "../styles/contact.css";


function contact() {
  return (
    <div>
        <div>
            <p className="lofi">Contact Us</p>
        </div>

        <div className='contactContainer'>
            <div className='container'>
                <div className='contactInfo'>
                    <div className='infoblock'>
                        <div className= "icon">
                            <FaMapMarkerAlt />
                        </div>
                        <div className= "text">
                            <h3 class="infoHeader">Address</h3>
                            <div class="infoText">
                                <div>
                                    700 W. Greek Row,
                                </div>
                                <div>
                                    118 Fine Arts Building,
                                </div>
                                <div>
                                    Arlington, TX 76019
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className='infoblock'>
                        <div className= "icon">
                            <AiFillPhone/>
                        </div>
                        <div className= "text">
                            <h3 class="infoHeader">Phone</h3>
                            <div class="infoText">817-272-1214</div>
                        </div>
                    </div>
                </div>
            </div>

            <ContactForm />
        </div>
    </div>
  )
}

export default contact
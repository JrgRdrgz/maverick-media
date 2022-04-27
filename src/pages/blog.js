import React, { useState } from 'react'
import "../styles/blog.css";
import { FaMapMarkerAlt } from 'react-icons/fa';
import { BiTime} from 'react-icons/bi';
import { FaRegBuilding } from 'react-icons/fa';
import { Modal } from 'antd';
    
function blog() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [visible, setVisible] = useState(false);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [confirmLoading, setConfirmLoading] = useState(false);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [modalText, setModalText] = useState('This is the fall metting');
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [modalTitle, setModalTitle] = useState('Fall Meeting');

    const showModal = (title, text) => {
        setModalText(text);
        setModalTitle(title);
        setVisible(true);
    };

    const handleOk = () => {
        setModalText('The modal will be closed after two seconds');
        setConfirmLoading(true);
        setTimeout(() => {
        setVisible(false);
        setConfirmLoading(false);
    }, 2000);
  };

    const handleCancel = () => {
        console.log('Clicked cancel button');
        setVisible(false);
    };

    return (
        <div>
            <Modal
                title={modalTitle}
                visible={visible}
                onOk={handleOk}
                confirmLoading={confirmLoading}
                onCancel={handleCancel}
            >
                <p>{modalText}</p>
            </Modal>
            <div>
                <p className="lofi">Upcoming Events</p>
            </div>
            <div className='event'>
                <div className='event-section'>
                    <div className = "event-content">
                        <div className = "event-image"> 
                            <img src = "image.jpg" alt= "event photo"></img>
                        </div>
                        <div className = "content-text">
                            <div className = "event-menu">
                                <h4> 7 Sep </h4>
                                <div className='event-detail'>
                                    <div className='event-time'><BiTime/><span> 12:00PM - 1:00PM </span></div>
                                    <div className='event-location'><FaMapMarkerAlt /><span> Fine Arts Building </span></div>
                                    <div className='event-room'><FaRegBuilding/><span> Room - 122 </span></div>
                                </div>
                            </div>
                            {/* <div className='event-text'>
                                <h4> Meeting </h4>
                                <p> description </p>
                            </div> */}
                            <div className='btn'>
                                <a href="#"  onClick={() => showModal("Meeting", "First meeting of Fall Semester")}> View Details </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='event'>
                <div className='event-section'>
                    <div className = "event-content">
                        <div className = "event-image"> 
                            <img src = "img.jpg" alt= "event photo"></img>
                        </div>
                        <div className = "content-text">
                            <div className = "event-menu">
                                <h4> coming soon </h4>
                                <div className='event-detail'>
                                    <div className='event-time'><BiTime/><span> coming soon </span></div>
                                    <div className='event-location'><FaMapMarkerAlt /><span>coming soon</span></div>
                                    <div className='event-room'><FaRegBuilding/><span> coming soon </span></div>
                                </div>
                            </div>
                            {/* <div className='event-text'>
                                <h4> Meeting </h4>
                                <p> description </p>
                            </div> */}
                            <div className='btn'>
                                <a href="#" onClick={() => showModal("coming soon", "coming soon")}> View Details </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default blog
import React from 'react'
import "../styles/about.css";
function about() {
  return (
    <div>
        <div>
            <p className="lofi">About Us</p>
        </div>

        <div>
            <p className="aboutus">Maverick Media is a member of the Broadcast Education Association (BEA).
            BEA is the premiere international academic media organization, driving insights, excellence in media production, 
            and career advancement for educators, students, and professionals. The association’s publications, annual convention, web-based programs,
            and regional district activities provide opportunities for juried production competition and presentation of current scholarly research related to
            aspects of the electronic media. These areas include media audiences, economics, law and policy, regulation, news, management, aesthetics, social effects,
            history, and criticism, among others. BEA is concerned with electronic media curricula, placing an emphasis on interactions among the purposes, developments,
            and practices of the industry and imparting this information to future professionals. BEA serves as a forum for exposition, analysis and 
            debate of issues of social importance to develop members’ awareness and sensitivity to these issues and to their ramifications, which will ultimately help
            students develop as more thoughtful practitioners.</p>
        </div>

        <div className="members">
            <ul>
                <li>
                    <div className="content">
                        <h1 className="membertitle">Member's Title</h1>
                        <h2>Members Name</h2>
                        <p>This is going to be a description of the member.</p>
                    </div>
                </li>
                <li>
                    <div className="content">
                        <h1 className="membertitle">Member's Title</h1>
                        <h2>Members Name</h2>
                        <p>This is going to be a description of the member</p>
                    </div>
                </li>
                <li>
                    <div className="content">
                        <h1 className="membertitle">Member's Title</h1>
                        <h2>Members Name</h2>
                        <p>This is going to be a description of the member</p>
                    </div>
                </li>
                <li>
                    <div className="content">
                        <h1 className="membertitle">Member's Title</h1>
                        <h2>Members Name</h2>
                        <p>This is going to be a description of the member</p>
                    </div>
                </li>
                <li>
                    <div className="content">
                        <h1 className="membertitle">Member's Title</h1>
                        <h2>Members Name</h2>
                        <p>This is going to be a description of the member</p>
                    </div>
                </li>
                
            </ul>
        </div>
    </div>
  )
}

export default about
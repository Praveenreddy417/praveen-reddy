import React from 'react';
import Header from './Header';
import './Home.css';

function Home() {
    return (
        <div className="home-container">
            <Header />
            <div className="page education">
                <h2>Summary</h2>
                <p>Having 3 years of work experience in the IT industry as a software engineer. I got 5 awards for best employee,
                    commitment and quality deliverables.</p>
            </div>
            <div className="page education">
                <h2>Education</h2>
                <p>Bachelor of Science in Computer Science - University of ABC (2015-2019)</p>
            </div>
            <div className="page experience">
                <h2>Experience(3.1 years)</h2>
                {/* <h5>Role</h5>
                Software Engineer
                <h5>Project</h5>
                Corporate
                <h5>Domain</h5>
                Corporate Service
                <h5>Description</h5>
                This project is an online corporate application which manages the shopping of corpo
                rate related things , like clothing, Id cards, Books etc... Where fashion becomes addiction.
                <h5>Responsibilities</h5> */}
                {/* <ul>
                    <li>Requirement analysis and gathering.</li>
                    <li>Worked on required Testcases and Documentation.</li>
                    <li>Responsible for implementing end-to-end application.</li>
                    <li>Responsible for QA web app deployments and monitoring.</li>
                    <li>Involved in developing pure Next JS, Type Script, MongoDB & Node JS.</li>
                    <li>Research and solving problems.</li>
                    <li>Involved in CI/CD pipelines.</li>
                    <li>Involved in swagger and Docker Implementation.</li>
                    <li>Analyzing the behavior of the end application.</li>
                    <li>Involved in Production web APP deployments.</li>
                    <li>Provided go-live support.</li>
                    <li>Testing end-to-end process.</li>
                </ul> */}

                <ul>
                    <li>Developed and maintained web applications using React, Node.js, and MongoDB.</li>
                    <li>Collaborated with team members to design and implement new features.</li>
                    <li>Conducted code reviews and provided feedback to improve code quality.</li>
                </ul>
            </div>
            <div className="page skills">
                <h2>Skills</h2>
                <ul>
                    <li>JavaScript</li>
                    <li>React JS</li>
                    <li>React Native</li>
                    <li>React Native Paper</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Node.js</li>
                    <li>My SQL</li>
                    <li>Salesforce</li>
                    <li>MongoDB</li>
                    <li>Git Lab</li>
                    <li>Git Hub</li>
                    <li>Sourcetree</li>
                    <li>CI/CD</li>
                    <li>Nimbus</li>
                    <li>Mail Train</li>
                    <li>Ship Rocket</li>
                </ul>
            </div>
            <div className="page projects">
                <h2>Projects</h2>
                <p>Corporate -  This project is an online corporate application which manages the shopping of corpo
                    rate related things , like clothing, Id cards, Books etc...</p>
                <p>OPIYUM -   This project is an online opiyum application which manages the shopping of fashion,
                    like clothing. Where fashion becomes addiction.</p>
                <p>meepaisa delivery
                    -  This project is an online delivery application which manages the delivery of retail, food
                    products and rides services for the users. It interlinks the data between User, Partner, and Super Admin
                    modules.</p>
                <p>meepaisa partner -  This project is an online application which helps online partners and physical partners
                    to manage their businesses. It interlinks the data between User, Delivery and Super Admin modules.</p>
                <p>meepaisa user -  This project is an e-commerce application which provides any kind of services like
                    retail, food delivery and rides to the end user. It interlinks the data between Partner, Delivery, and
                    Super Admin modules.</p>
                <p>meepaisa admin -  This project is an online application which manages all the data from all the modules
                    i.e., Delivery, Partner & User modules. It interlinks the data between Delivery, User, Partner, and
                    corporate modules.</p>
                <p>Phishing websites classification based on ML and DL -   Easily found the fake websites and avoid the cyber scams.</p>
            </div>
            <div className="page contact">
                <h2>Contact</h2>
                <p>Email: praveenreddy417@gmail.com</p>
                <p>Phone: 8985845001</p>
            </div>
        </div>
    );
}

export default Home;
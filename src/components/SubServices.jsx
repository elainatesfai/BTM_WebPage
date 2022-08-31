// import React, {useState} from 'react';
import "../css/subServices.css"
import SubServiceCard from "./commonStructure/SubServiceCard";

export default function SubServices() {

    return (
        <div className="subservices-container">
            <div className="software-development-subservices" id="software-development-subservices">
                <SubServiceCard 
                    icon="fas fa-tachometer-alt"
                    title="Mobile Apps"
                    text="We develop fully functional mobile applications in Android and IOS using agile methodologies,
                    allowing a collaborative environment with our customers."
                />

                <SubServiceCard 
                    icon="fas fa-tachometer-alt"
                    title="Web Development"
                    text="Our talented students are well equipped to drive the building and creation of websites, 
                    including aspects of web design, web publishing, web programming, and database management."
                />

                <SubServiceCard 
                    icon="fas fa-tachometer-alt"
                    title="API"
                    text="We design and deploy application programming interfaces that enable applications to integrate with each other. 
                    Generating a culture of transparency, leading to data-sharing and information flowing."
                />
            </div>

            <div className="data-and-AI-subservices">
                <SubServiceCard 
                    icon="fas fa-tachometer-alt"
                    title="Social Media Analytics"
                    text="Our experts use their industrial experience and academic rigour to find meaning 
                    in data gathered from social channels to support business decisions."
                />

                <SubServiceCard 
                    icon="fas fa-tachometer-alt"
                    title="Algorithm Testing"
                    text="We use scientific methods to evaluate algorithms' validity or to compare the 
                    efficiency of a group of algorithms addressing a specific problem."
                />

                <SubServiceCard 
                    icon="fas fa-tachometer-alt"
                    title="Adhoc Projects"
                    text="Providing either completely or sectionalised development on ADHOC projects following a standard data analysis life cycle:
                    1. business understanding;
                    2. data understanding;
                    3. data preparation;
                    4. exploratory analysis and modelling;
                    5. validation
                    6. visualisation and presentation."
                />
            </div>
        </div>
    )
}
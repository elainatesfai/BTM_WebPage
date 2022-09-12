// import React, {useState} from 'react';
import "../css/subServices.css"
import SubServiceCard from "./commonStructure/SubServiceCard";
 
export function SubServicesAI() {
    return (
        <div className="subservices-container">
            <div className="data-and-AI">
                <SubServiceCard
                    icon="fa fa-database"
                    title="Social Media Analytics"
                    text="Our experts use their industrial experience and academic rigour to find meaning
                    in data gathered from social channels to support business decisions."
                />
 
                <SubServiceCard
                    icon="fa fa-database"
                    title="Algorithm Testing"
                    text="We use scientific methods to evaluate algorithms' validity or to compare the
                    efficiency of a group of algorithms addressing a specific problem."
                />
 
                <SubServiceCard
                    icon="fa fa-database"
                    title="Adhoc Projects"
                    text="Providing either completely or sectionalised development on ADHOC projects following a standard data analysis life cycle."
                />
            </div>
        </div>
    )
}
 
export function SubServicesSD() {
    return (
        <div className="subservices-container">
            <div className="software-development">                    
                <SubServiceCard
                    icon="fas fa-laptop-code"
                    title="Mobile Apps"
                    text="We develop fully functional mobile applications in Android and IOS using agile methodologies,
                    allowing a collaborative environment with our customers."
                />
 
                <SubServiceCard
                    icon="fas fa-laptop-code"
                    title="Web Development"
                    text="We are well equipped to drive the development of websites,
                    including aspects of web design, web publishing, web programming, and database management."
                />
 
                <SubServiceCard
                    icon="fas fa-laptop-code"
                    title="API"
                    text="We design and deploy application programming interfaces that enable applications to integrate."
                />
            </div>
        </div>
    )
}
 
export function SubServicesPOC() {
    return (
        <div className="subservices-container">
            <div className="proof-of-concept">
                <SubServiceCard
                    icon="fa fa-gears"
                    title="Software Development"
                    text="Demonstrating POCs through the deployment of sectionalised software development
                    on software such as: mobile applications, websites, and APIs."
                />
 
                <SubServiceCard
                    icon="fa fa-gears"
                    title="Data Analysis and AI"
                    text="Demonstrate POCs through the deployment of sectionalised software development
                    specifically on artificial intelligences software."
                />
            </div>
        </div>
    )
}
 
export function SubServicesRD() {
    return (
        <div className="subservices-container">
            <div className="research-and-development">
                <SubServiceCard
                    icon="fa-solid fa-microscope"
                    title="IT Trends Insight Reports"
                    text="We help organisations to answer R&D questions related to IT that can be found in our
                    international bank of scientific literature sources."
                />
 
                <SubServiceCard
                    icon="fa-solid fa-microscope"
                    title="Tech Monitor"
                    text="Using our international academic network,
                    we produce reports that provides a deeper understanding to various upcoming trends in the
                    academic world of IT."
                />
 
                <SubServiceCard
                    icon="fa-solid fa-microscope"
                    title="CPD"
                    text="Our experts are qualified educators. We can create tailored training programmes to develop an organisation's IT workforce"
                />
            </div>
        </div>
    )
}
 
export function SubServicesUXUI() {
    return (
        <div className="subservices-container">
            <div className="software-development-subservices">
                <SubServiceCard
                    icon="fa-solid fa-compass-drafting"
                    title="UX Wireframe Prototype"
                    text="We will help you to design and develop experiences,
                    products, and services of high quality with UX at their core."
                />
           </div>
        </div>
    )
}
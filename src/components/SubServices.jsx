// import React, {useState} from 'react';
import "../css/subServices.css"
import SubServiceCard from "./commonStructure/SubServiceCard";

export function SubServicesAI() {
    return (
        <>
        <div className="ai-arrow">
            <i className="fa fa-caret-down"></i>
        </div> 
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
    </>
    )
}

export function SubServicesSD() {
    return (
        <>
        <div className="sd-arrow">
            <i className="fa fa-caret-down"></i>
        </div> 
            <div className="subservices-container">
                <div className="software-development">                    
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
            </div>
        </>
    )
}

export function SubServicesPOC() {
    return (
        <>
            <div className="poc-arrow">
                <i className="fa fa-caret-down"></i>
            </div>
            <div className="subservices-container">
                <div className="proof-of-concept">
                    <SubServiceCard 
                        icon="fa fa-terminal"
                        title="Software Development"
                        text="Demonstrating POCs through the deployment of sectionalised software development 
                        on software such as: mobile applications, websites, and APIs."
                    />

                    <SubServiceCard 
                        icon="fa fa-terminal"
                        title="Data Analysis and AI"
                        text="Demonstrate POCs through the deployment of sectionalised software development 
                        specifically on artificial intelligences software."
                    />
                </div>
            </div>
        </>
    )
}

export function SubServicesRD() {
    return (
        <>
        <div className="rd-arrow">
            <i className="fa fa-caret-down"></i>
        </div> 
            <div className="subservices-container">
                <div className="research-and-development">
                    <SubServiceCard 
                        icon="fas fa-tachometer-alt"
                        title="IT Trends Insight Reports"
                        text="We help organisations to answer R&D questions related to IT that can be found in our 
                        international bank of scientific literature sources. 
                        Our PG students and experts are well equipped to dig out the information you need and 
                        present it in a report for the layperson."
                    />

                    <SubServiceCard 
                        icon="fas fa-tachometer-alt"
                        title="Tech Monitor"
                        text="Our large network of academics places us in a position that we can monitor the 
                        upcoming trends on IT in the academic sector. Using our international academic network, 
                        we produce reports that provides a deeper understanding to various upcoming trends in the 
                        academic world of IT. This will guide our clients to progressive and strategic 
                        decisions that will aid their business decisions in the future."
                    />

                    <SubServiceCard
                        icon="fas fa-tachometer-alt"
                        title="Continuing Professional Development"
                        text="We identify potential areas of improvement within organisations, in order to create 
                        tailored training programmes that will progressively develop the organisations professional efficiency."
                    />
                </div>
            </div>
        </>
    )
}

export function SubServicesUXUI() {
    return (
        <>
        <div className="ux-arrow">
            <i className="fa fa-caret-down"></i>
        </div> 
        <div className="subservices-container">
            <div className="software-development-subservices">
                <SubServiceCard 
                    icon="fas fa-tachometer-alt"
                    title="UX Wireframe Prototype"
                    text="How a user interacts with and experiences a product, system, or service is relevant to most business. 
                    It includes a person's perceptions of utility, ease of use, and efficiency. Our talented students and experts will help you to design and develop experiences, 
                    products, and services of high quality with digital media at their core."
                />
            </div>
        </div>
    </>
    )
}
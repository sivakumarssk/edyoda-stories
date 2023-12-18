import React from "react";
import {  useState } from 'react'; 
import "./edyoda.css"
import  filter from "./filter.png"

const filterList=["All","Cloud Computing","DevOps","Artificial Intelligence","Programming Languages",
"Mobile Application Development","Technology and Tools",
"Get a Job in a Tech Company","Others"
]

const cardData=[
    {
        id:1,
        search:"Artificial Intelligence",
        image:"https://edyoda.s3.amazonaws.com/media/blog-images/Data_Scientist_1920_1280_DsZBGZu.jpg",
        cardtittle:"Typical day of Data Scientist - An insider story!",
        author:"Saurav Ghosh ",
        date:"05 Jul 2019",
        describe:"I've been a Data Scientist for three years now and I can only say that Chris Lynch was right -Big Data and Data Science are the foundation of all the trends that are emerging in the world "
    },
    {
        id:2,
        search:"Artificial Intelligence",
        image:"https://edyoda.s3.amazonaws.com/media/blog-images/learn-artificial-intelligence.jpeg",
        cardtittle:"Getting started with Artificial Intelligence",
        author:"EdYoda ",
        date:"08 Jul 2019",
        describe:"W're rapidly moving towards a day and age where almost everything can be controlled by machines and one of the most revolutionary moves has been the advent of artificial"
    },
    {
        id:3,
        search:"Artificial Intelligence",
        image:"https://edyoda.s3.amazonaws.com/media/blog-images/overview-of-natural-language-processing-in-artificial-intelligence.jpg",
        cardtittle:"Overview of Natural Language Processing in Artificial Intelligence",
        author:"EdYoda ",
        date:"21 Jul 2019",
        describe:"Over the last few years, Artificial Intelligence has made a prominent space as it uses technology that has made machines capable to perform tasks as humans do. The uses follow in"
    },
    {
        id:4,
        search:"Cloud Computing",
        image:"https://edyoda.s3.amazonaws.com/media/blog-images/edyoda_blog_aws_cloudday_17may2018_Bangalore_small_ByulIE.jpg",
        cardtittle:"Amazon Web ...",
        author:"Kalyan Mahalingam ",
        date:"05 Jul 2019",
        describe:"It was indeed a hectic day with back to back session sandwiched by good "
    },
    {
        id:5,
        search:"Cloud Computing",
        image:"https://edyoda.s3.amazonaws.com/media/blog-images/cloud-meetup-edyoda-small_b2EXhBe.jpg",
        cardtittle:"edYoda Meetup #0...",
        author:"Ashish Pandey ",
        date:"05 Jul 2019 ",
        describe:" I recently had the opportunity to lead the initiative to organize the first Cloud meetup for edYoda. Here, I recount my experience in organizing the very first in the series of meetups planned by the team here. "
    },
    {
        id:6,
        search:"DevOps",
        image:"https://edyoda.s3.amazonaws.com/media/blog-images/devops-edYoda-blog-small.jpg",
        cardtittle:"From identity crisis to the Success Story - The DevOps...",
        author:"Kalyan Mahalingam ",
        date:"05 Jul 2019",
        describe:"DevOps is a paradigm shift in the way how software products are being built in the modern day Information Technology (IT) organizations. It is becoming the de-facto component in"
    },
    {
        id:7,
        search:"Programming Languages",
        image:"https://edyoda.s3.amazonaws.com/media/blog-images/WhatsApp_Image_2019-06-19_at_17.55.10.jpeg",
        cardtittle:"Learn these Programming Languages in 2019",
        author:"EdYoda",
        date:"08 Jul 2019",
        describe:"Starting a career as a software developer obviously requires one to undertake a programming languages course that can cover everything from the basics to even the minute details. "
    },
    {
        id:8,
        search:"Programming Languages",
        image:"https://edyoda.s3.amazonaws.com/media/blog-images/a-primer-on-python-programming-tutorial-for-beginners.png",
        cardtittle:"A Primer on Python Programming Tutorial for...",
        author:"EdYoda",
        date:"29 Jul 2019",
        describe:"Python has been the most dominant programming language in the development community for quite a few years now. This is evident from the fact that according"
    },
    {
        id:9,
        search:"Mobile Application Development",
        image:"https://edyoda.s3.amazonaws.com/media/blog-images/why-you-should-accelerate-your-knowledge-on-mobile-app-development.jpg",
        cardtittle:"Why you should accelerate your knowledge on...",
        author:"EdYoda",
        date:"23 Jul 2019",
        describe:"Over the most recent 10 years, Android has become famous, not only with its themes that have candy names yet in addition to its broad, and sudden..."
    },
    {
        id:10,
        search:"Mobile Application Development",
        image:"https://edyoda.s3.amazonaws.com/media/blog-images/react-native-vs-flutter.png",
        cardtittle:"React Native Vs Flutter: Breaking the confusion...",
        author:"EdYoda",
        date:"12 Aug 2019",
        describe:"The two biggest social platforms have created a buzz in the application development industry. React Native by Facebook and Flutter by Google are the latest..."
    },
    {
        id:11,
        search:"Technology and Tools",
        image:"https://edyoda.s3.amazonaws.com/media/blog-images/Copy_of_aptitude_1920_1280_LVmu25g.png",
        cardtittle:"Why do Database Systems Exist ?",
        author:"Pitanjal Dutta ",
        date:"05 Jul 2019",
        describe:"A couple of days back, I was having a code review of my program which scraps the keyword insights from trending Tweets. But then, my colleague asked me a very interesting..."
    },
    {
        id:12,
        search:"Get a Job in a Tech Company",
        image:"https://edyoda.s3.amazonaws.com/media/blog-images/aptitude-small.jpg",
        cardtittle:"Master your General Aptitude Job Interview...",
        author:"Pitanjal Dutta ",
        date:"05 Jul 2019",
        describe:"A general aptitude becomes very important, when you apply for a job in a tech company. You might be highly skilled in your subject domain. However, these basic..."
    },
    {
        id:13,
        search:"Get a Job in a Tech Company",
        image:"https://edyoda.s3.amazonaws.com/media/blog-images/ace-soft-skills-small.jpg",
        cardtittle:"Ace your Soft Skills - Tips to crack the job...",
        author:"Pitanjal Dutta ",
        date:"05 Jul 2019",
        describe:"Soft skills are seen to be as important as your technical skill set. When an organisation is hiring, soft skills is given a lot of weightage and thus becomes a very important..."
    },
    {
        id:14,
        search:"Others",
        image:"https://edyoda.s3.amazonaws.com/media/blog-images/1_G1i7GlRPMGboYZdRhOeWaw.png",
        cardtittle:"Building the University for the 21st century — EdYoda 2.0",
        author:"Arman Ahmed ",
        date:"20 Jul 2019",
        describe:"The google analytics dashboard was firing up, the whole team, each one of us was on the edges — half elated, half anxious and a little worried."
    },
    {
        id:15,
        search:"Others",
        image:"https://edyoda.s3.amazonaws.com/media/blog-images/data-mining-an-overview.jpg",
        cardtittle:"Data Mining: An overview",
        author:"EdYoda ",
        date:"21 Jul 2019",
        describe:"The process used by companies to convert raw data into useful information is called Data Mining. It is a process of searching, collecting, filtering and analyzing the data. A large amount..."
    },
    {
        id:16,       
        search:"Others",
        image:"https://edyoda.s3.amazonaws.com/media/blog-images/cyber-security-analysis-of-digital-world.jpg",
        cardtittle:"Cyber Security: Analysis of the digital world",
        author:"EdYod ",
        date:"23 Jul 2019",
        describe:"When computers were standalone devices, security was a minimal concern. Mainframes had their own protected facilities. Slowly and steadily as computing became more personal..."
    },
]


function Latest() {
    const [displayedCards, setDisplayedCards] = useState(cardData);
    const [selectedFilter, setSelectedFilter] = useState("All");

    const display = (item) => {
        let filteredCards = [];

        if (item === "All") {
            filteredCards = cardData;
        } else {
            filteredCards = cardData.filter((card) => card.search === item);
        }

        setDisplayedCards(filteredCards);
        setSelectedFilter(item);
    };

    return (
        <div>
            <Navbar />
            <main>
                <div id="l1">
                    <h1>Latest Posts</h1>
                    <br/><br/>
                    <div id="l2">
                        <img src={filter} alt="icon"/>
                        <p>Filter by Categories</p>
                    </div>
                    <div id="l3">
                        {filterList.map((data, index) => (
                            <div key={index} className="filter">
                                <button className={`filterItems ${selectedFilter === data ? 'selected' : ''}`}
                                    onClick={() => display(data)}
                                >
                                {data} </button>                            
                            </div>
                        ))}
                    </div>
                    <div className="block">
                        {displayedCards.map((eachData) =>{
                                const {id,image,cardtittle,author,date,describe}=eachData;
                                return(
                                <div key={id} className="co"> 
                                <a  className="link" href="card" >
                                    <div className="item">
                                        <img className="pic" src={image} alt="blog"/>
                                    </div>
                                    <div className="title">
                                           <h3>{cardtittle}</h3>
                                           <div className="author">
                                           <p className="aname">{author} |<span className="date">{date}</span></p> 
                                           </div>
                                           <div className="content">{describe}</div>
                                    </div>
                                </a>
                             </div>
                        )})}
                    </div>
                    </div>
                    </main>
                    <footer id="footer">
                        {/* Footer content */}
                    </footer>
        </div>
    );
}



export const Navbar=()=>{
    return(
        <div>
<nav>
    <div>
       <div id="logo" >
            <a href="edyoda.js" id="a1">
                <div className="e1">
                    <div id="sublogo">
                        EDYODA
                    </div>
                    <p id="stor">Stories</p>
                </div>
            </a>
            <div id="c1">
                <p >Explore Categories <select id="select"></select></p>
            </div>
            <div id="c2">
                <p>EdYoda is a learning and knowledge sharing platform for techies</p>
            </div>
            <div id="click">
                <button className="navButton" >Go To Main Website</button>
            </div>
        </div>
    </div>
</nav>
</div>
)
}

export default Latest;
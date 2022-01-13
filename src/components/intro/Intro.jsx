import { init } from 'ityped';
import { useEffect, useRef } from "react";
import "./intro.scss";

export default function Intro() {
    const textRef = useRef();
    useEffect(()=>{
        init(textRef.current, {
            showCursor: true,
            backDelay: 1500,
            backSpeed: 30,
            strings: ["Computer Science", "Lifestyle"]
        });
    },[]);
    return (
        <div className="intro" id="intro">
            <div className="imgContainer">
                <img src="assets/IMG_4120.jpg"/> 
            </div> 
            <div className="left"></div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hey, my name is</h2>
                    <h1>Samuel Han</h1>
                    <h3><span ref={textRef}></span></h3>
                    <a href = 'https://github.com/samuelhan713' className="ghub">
                        <img src="assets/github.png"/>
                        <button className="shrink-border">Github</button>
                    </a>
                </div>
                <a href="#portfolio" className="aboutMe">
                    <img src="assets/downArrow.png"/>
                </a>
                
            </div>
        </div>
    )
}
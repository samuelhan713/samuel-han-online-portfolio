import "./portfolio.scss";
import PortfolioList from "../portfolioList/PortfolioList";
import React, {useEffect, useState} from "react";

import {
    portfolio1,
    portfolio2,
    portfolio3,
    portfolio4,
} from "../../data";

export default function Portfolio() {
    const [selected, setSelected] = useState("114");
    const [data, setData] = useState([]);
    const list = [
        {
            id: "114",
            title: "CSE 114",
        },
        {
            id: "214",
            title: "CSE 214",
        },
        {
            id: "216",
            title: "CSE 216"
        },
        {
            id: "220",
            title: "CSE 220"
        }
    ];

    useEffect(()=>{
        switch(selected) {
            case "114":
                setData(portfolio1);
                break;
            case "214":
                setData(portfolio2);
                break;
            case "216":
                setData(portfolio3);
                break;
            case "220":
                setData(portfolio4);
                break;
            default:
                setData(portfolio1);
        }
    })
    return (
        <div className="portfolio" id="portfolio">
            <h1>Classes</h1>
            <ul>
                {list.map((item) => (
                    <PortfolioList
                        title={item.title}
                        active={selected === item.id}
                        setSelected={setSelected}
                        id={item.id}/>
                ))}
            </ul>

            <div className="container">
                {data.map((d)=> (
                    <div className="item">
                        <div className="left">
                            <div className="imgContainer">
                                <img src={d.img}/>
                            </div>
                        </div>
                        <div className="right">
                            <h3>{d.title}</h3>
                            <h4>Written in: </h4>
                            <div className="icons">{d.icon} {d.icon2}</div>
                            <h5>{d.p}</h5>
                            <a href={d.pLink}>
                                <button className="gitLink" type="button">Project Link</button>
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
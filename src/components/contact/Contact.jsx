import "./contact.scss";

export default function Contact() {
    const data = [
        {
            id: 1,
            img1: "https://wallpaperaccess.com/full/2404603.png",
            img2: "assets/yt.png",
            text: "/c/SammyHan88",
            link: "https://www.youtube.com/c/SammyHan88"
        },
        {
            id: 2,
            img1: "https://fox5sandiego.com/wp-content/uploads/sites/15/2019/02/instagram-4k-vf.jpg",
            img2: "assets/insta.png",
            text: "/sammmy_han/",
            link: "https://www.instagram.com/sammmy_han/"
        },
        {
            id: 3,
            img1: "assets/linkedinLogo.jpeg",
            img2: "assets/linkedin.png",
            text: "/samuel-han",
            link: "www.linkedin.com/in/samuel-han-348726205"
        }
    ];

    return (
        <div className="contact" id="contact">
            <h1>Socials</h1>
            <div className="container">
                {data.map((d)=>
                    <div className="card">
                        <a href={d.link}>
                            <div className="top">
                                <img className="right" src={d.img1}/>       
                            </div>
                            <div className="center">
                                <img src={d.img2}/>
                            </div>
                            <div className="bottom">
                                <h3>{d.text}</h3>
                            </div>
                        </a>
                        
                    </div>
                )}
                
            </div>
            
        </div>
    )
}
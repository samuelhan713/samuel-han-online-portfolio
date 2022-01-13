import "./aboutme.scss";

export default function AboutMe() {
    return (
        <div className="aboutme" id="aboutme">
            <div className="block"></div>
            <h1>About Me</h1>
            <div className="container">
                <div className="left">
                    <div className="imgContainer">
                        <img src="assets/me3.jpg"/>
                    </div>
                </div>
                <div className="right">
                    <h2>Background</h2>
                        <hr></hr>
                        <p>
                            Hey I'm Samuel Han and I'm from... well it's complicated.
                            I'm Korean but I was born in the United States and I grew up in Japan.
                            So I'm Korea American dual citizen who lived almost his whole life in Japan, which makes me feel a bit Japanese as well.
                            Consequently, I speak English, Korean, and Japanese all fluently.
                        </p>
                        <p>
                            I am currently living in Korea attending Stony Brook University as a sophomore computer science student.
                            I will be moving to New York at the end of my junior year, and I will be attending the SBU NY campus for one year and hopefully working there after graduation. 
                        </p>
                </div>
            </div>
            <div className="footer">
                <h3>My Skills</h3>
                <ul>
                    <li>
                        <img src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/181_Java_logo_logos-512.png" width={50} height={50}/>;        
                        <h5>Java</h5>
                    </li>
                    <li>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/C_Programming_Language.svg/1200px-C_Programming_Language.svg.png" width={50} height={50}/>
                        <h5>C lang</h5>
                    </li>
                    <li>
                        <img src="https://www.pngall.com/wp-content/uploads/5/Python-PNG.png" width={50} height={50}/>
                        <h5>Python</h5>
                    </li>
                    <li>
                        <img src="https://racket-lang.org/img/racket-logo.svg" width={50} height={50}/>
                        <h5>Scheme</h5>
                    </li>
                    <li>
                        <img src="https://www.w3.org/html/logo/downloads/HTML5_Badge_512.png" width={50} height={50}/>
                        <h5>HTML</h5>
                    </li>
                    <li>
                        <img src="https://static.cdnlogo.com/logos/c/18/css.svg" width={50} height={50}/>
                        <h5>CSS</h5>
                    </li>
                </ul>
            </div>
        </div>
    )
}
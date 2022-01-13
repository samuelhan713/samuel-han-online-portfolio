import Topbar from "./components/topbar/Topbar";
import Menu from "./components/menu/Menu";
import Intro from "./components/intro/Intro"
import AboutMe from "./components/aboutme/AboutMe";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import { useState } from "react";
import {Helmet} from "react-helmet";
import "./app.scss";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="app">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Samuel Han</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
        <Intro/>
        <Portfolio/>
        <AboutMe/>
        <Contact/>
      </div>
    </div>
  )
}

export default App;
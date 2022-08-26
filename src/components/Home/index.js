import { Link } from "react-router-dom";
import "./index.scss"

const Home =()=>{
    return(
      <div className="container home-page">
        <div className="text-zone">
            <h1>Hi, <br/>I'm <span className="colored-letter">Z</span>izo
            <br/>
           <span className="title">web developer</span> 
            </h1>
            <h2>Frontend Developer who enjoys using React js, Next js & Tailwindcss. Industrious technology enthusiast</h2>
            <Link to="/contact" className="flat-button">Contact Me</Link>

        </div>
      </div>  
    )
}

export default Home;
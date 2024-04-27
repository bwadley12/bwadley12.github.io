import NavBar from "../../components/NavBar/NavBar";
import "./About.css";
import aboutMePic from "../../assets/react.svg";
// import Carousel from "../../components/Carousel/Carousel";

export default function About() {
    document.title = "About";

    return (
        <>
            <NavBar />
            <div className="standard-container"> 
                <div className="wide-card">
                    info about me
                </div>
                
                <img className="bubble-img" src={aboutMePic}></img>
                <img className="bubble-img" src={aboutMePic}></img>
                <img className="bubble-img" src={aboutMePic}></img>
            </div>
        </>
    )
}
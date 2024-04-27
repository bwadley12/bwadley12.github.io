import NavBar from "../../components/NavBar/NavBar";
import "./About.css";
import Carousel from "../../components/Carousel/Carousel";

export default function About() {
    document.title = "About";

    return (
        <>
            <NavBar />
            <div className="standard-container"> 
                <Carousel />

                <div className="wide-card">

                </div>

                {/* <div className="standard-card">

                </div>
                <div className="standard-card">
                    
                </div>
                <div className="standard-card">
                    
                </div>
                <div className="standard-card">

                </div>
                <div className="standard-card">
                    
                </div>
                <div className="standard-card">
                    
                </div> */}
            </div>
        </>
    )
}
import { useEffect } from "react";
import NavBar from "../../components/NavBar/NavBar";
import './Projects.css';
import githubLogo from '../../assets/github.svg';
import javaLogo from '../../assets/java.svg';
import mavenLogo from '../../assets/maven-apache.jpg';
import satelliteTile from '../../assets/satelliteTile.png';
import landsatLogo from '../../assets/NASA_logo.png';
import imageMagickLogo from '../../assets/image-magick.jpg';
import jsLogo from '../../assets/JavaScript-logo.png';
import reactLogo from '../../assets/react.svg';
import viteLogo from '../../assets/vite.png';
import controllerLogo from '../../assets/controller.svg';
import Filter from '../../components/Filter/Filter'


export default function Projects() {
    document.title = "Projects";

    const projects = [
        {
            title: "Todo Tracker Server",
            image: "https://spring.io/img/spring.svg",
            isGame: false,
            tools: [
                {
                    name: "Java",
                    icon: javaLogo,
                },
                {
                    name: "Maven",
                    icon: mavenLogo
                },
                {
                    name: "Spring Boot",
                    icon: "https://spring.io/img/spring.svg"
                }
            ],
            links: [
                {
                    name: "Github",
                    ref: "https://github.com/bwadley12/TodoApp",
                    icon: githubLogo
                }
            ]
        },
        {
            title: "Tile Server Data Generator",
            image: satelliteTile,
            isGame: true,
            tools: [
                {
                    name: "Python",
                    icon: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg"
                },
                {
                    name: "Nasa Landsat",
                    icon: landsatLogo
                },
                {
                    name: "Image Magick",
                    icon: imageMagickLogo
                }
            ],
            links: [
                {
                    name: "Github",
                    ref: "https://github.com/bwadley12/landsatgenerator",
                    icon: githubLogo
                }
            ]
        },
        {
            title: "Portfolio Site",
            image: reactLogo,
            tools: [
                {
                    name: "JavaScript",
                    icon: jsLogo
                },
                {
                    name: "React",
                    icon: reactLogo
                },
                {
                    name: "Vite",
                    icon: viteLogo
                }
            ],
            links: [
                {
                    name: "Github",
                    ref: "https://github.com/bwadley12/bwadley12.github.io",
                    icon: githubLogo
                }
            ]
        }
    ]
    
    const projectCards = projects.map(project => 
        <ProjectCard key={project.title} project={project}/>
    );

    return (
        <>
        <NavBar />
        {/* <Filter /> */}

        <div className="standard-container">
            {projectCards}
        </div>
        </>
    )
}

function ProjectCard(projectData) {

    let tools = projectData.project.tools.map(linkInfo => 
        <a key={linkInfo.name}>
            <img src={linkInfo.icon} title={linkInfo.name}></img>
        </a>
    );

    return(
        <div className="standard-card">
            <div style={{position:"relative"}}>
                <a className="githubRef" href="https://github.com/bwadley12/bwadley12.github.io">
                    <img src={githubLogo}></img>
                </a>
                {
                    projectData.project.isGame  && 
                    <a className="gameRef" href="#/snake">
                        <img src={controllerLogo}></img>
                    </a>
                }
            </div>
            
            <img src={projectData.project.image}></img>
            <h3>{projectData.project.title}</h3>
            <div className="toolbar">
                {tools}
            </div>
        </div>
    )

}
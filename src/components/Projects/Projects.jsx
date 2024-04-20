import { useEffect } from "react";
import NavBar from "../NavBar/NavBar";
import './Projects.css';

export default function Projects(title) {
    document.title = "Projects";

    const projects = [
        {
            title: "Spring Boot Todo App",
            description: "Spring and Spring Boot are tools I use every day",
            image: "src\assets\react.svg",
            reference: "https://github.com/bwadley12/bwadley12.github.io"
        },
        {
            title: "project2",
            description: "description1",
            image: "src\assets\react.svg",
            reference: "https://github.com/bwadley12/bwadley12.github.io"
        },
        {
            title: "project3",
            description: "description1",
            image: "src\assets\react.svg",
            reference: "https://github.com/bwadley12/bwadley12.github.io"
        },
        {
            title: "project4",
            description: "description1",
            image: "src\assets\react.svg",
            reference: "https://github.com/bwadley12/bwadley12.github.io"
        },
        {
            title: "project5",
            description: "description1 dfd  mmmmmmmmmmmmmm  mmmm dfkjdkf dskfjkdsfj",
            image: "src\assets\react.svg",
            reference: "https://github.com/bwadley12/bwadley12.github.io"
        }
    ]
    
    const projectCards = projects.map(project => 
        <ProjectCard key={project.title} project={project}/>
    );

    return (
        <div className="container">
            <NavBar />
            {projectCards}
        </div>
    )
}

function ProjectCard(projectData) {
    console.log(projectData)

    return(
        <div className="projectcard">
            <div>
            <img src="src\assets\github-color-svgrepo-com.svg"></img>

                <h3>{projectData.project.title}</h3>
                <span>{projectData.project.description}</span>
                <div className="linkbar">
                    <a href="https://github.com/bwadley12/bwadley12.github.io">
                        <img src="src\assets\github-color-svgrepo-com.svg"></img>
                    </a>
                    <a href="https://github.com/bwadley12/bwadley12.github.io">
                        <img src="src\assets\github-color-svgrepo-com.svg"></img>
                    </a>
                </div>
            </div>
        </div>
    )

}
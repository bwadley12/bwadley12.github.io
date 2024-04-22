import './NavBar.css';
import homeLogo from '../../assets/home.svg';


function NavEntry({title, location}) {
    let active = window.location.href === window.location.origin + "/" + location;

    return (
        <div>
            <a href={location} className={`naventry ${active ? "active" : null}`}>
                <img src={homeLogo}></img>
            </a>
        </div>
    )
}

export default function NavBar() {
    return (
        <div className="navbar">
            <NavEntry title="HOME" location="#/" />
            <NavEntry title="PROJECTS" location="#/projects" />
            <NavEntry title="ABOUT" location ="#/about"/>
            <NavEntry title="3D PRINTING" location ="#/threedprinting"/>
        </div>
    )
}
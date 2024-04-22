import './NavBar.css';
import homeLogo from '../../assets/home.svg';
import codeLogo from '../../assets/code3.svg';
import aboutLogo from '../../assets/user.svg';

function NavEntry({title, location, image}) {
    let active = window.location.href === window.location.origin + "/" + location;

    return (
        <div>
            <a href={location} className={`naventry ${active ? "active" : null}`}>
                <img src={image}></img>
            </a>
            <div className={`hidden ${active ? "active" : null}`}> {title} </div>
        </div>
    )
}

export default function NavBar() {
    return (
        <div className="navbar">
            <NavEntry title="HOME" location="#/" image={homeLogo}/>
            <NavEntry title="PROJECTS" location="#/projects" image={codeLogo} />
            <NavEntry title="ABOUT" location ="#/about" image={aboutLogo}/>
            {/* <NavEntry title="3D PRINTING" location ="#/threedprinting"/> */}
        </div>
    )
}
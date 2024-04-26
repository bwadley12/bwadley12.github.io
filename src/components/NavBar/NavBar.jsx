import './NavBar.css';
import homeLogo from '../../assets/home.svg';
import codeLogo from '../../assets/code3.svg';
import aboutLogo from '../../assets/user.svg';
import threedprinterLogo from '../../assets/3dprinter.svg';

function NavEntry({title, location, image}) {
    let active = window.location.href === window.location.origin + "/" + location;

    return (
        <a href={location} className={`naventry`}>
            <img src={image} className={`${active ? "active" : null}`}></img>
            <span className={`hidden ${active ? "active" : null}`}> {title} </span>            
        </a>
    )
}

export default function NavBar() {
    return (
        <div className='navcontainer'>
            <div className="navbar">
                <NavEntry title="HOME" location="#/" image={homeLogo}/>
                <NavEntry title="PROJECTS" location="#/projects" image={codeLogo} />
                <NavEntry title="PRINTING" location ="#/3dprinting" image={threedprinterLogo}/>
                <NavEntry title="ABOUT" location ="#/about" image={aboutLogo}/>
            </div>
        </div>
    )
}
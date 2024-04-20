import './NavBar.css'

function NavEntry({title, location}) {
    return (
        <div>
            <a href={location} className="naventry">{title}</a>
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
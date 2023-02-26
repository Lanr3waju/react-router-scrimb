import { Link } from "react-router-dom";

function Nav() {
    return (
        <nav className="flex justify-between items-center">
            <h2 className="font-extrabold text-2xl"><Link to="/">#VANLIFE</Link></h2>
            <ul className="flex justify-around" >
                <li><Link className="opacity-60 hover:opacity-100 mx-2" to="/about">About</Link></li>
                <li><Link className="opacity-60 hover:opacity-100 mx-2" to="/vans">Vans</Link></li>
            </ul>
        </nav>
    )
}
export default Nav;
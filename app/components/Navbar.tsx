import {Link} from "react-router";

const Navbar = () => {
    return (
        <nav className="navbar">
            <Link to="/">
                <p className="text-2xl font-bold text-gradient">RESUMEBOOST</p>
            </Link>
            <Link to="/upload" className="primary-button w-fit">
                Boost My Resume
            </Link>
        </nav>
    )
}
export default Navbar

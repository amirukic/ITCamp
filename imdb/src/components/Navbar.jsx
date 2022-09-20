import { Link } from "react-router-dom";

function Navbar() {
    return ( 
        <nav>
            <Link to="/basket">Basketball</Link>
            <Link to="/soccer">Soccer</Link>
        </nav>
    );
}

export default Navbar;
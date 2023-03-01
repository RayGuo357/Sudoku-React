import { NavLink } from "react-router-dom";

export default function Navbar() {

    return (
        <div id="nav-container">
            <div className="nav">
                <div id="title">
                    Sudoku!
                </div>
                <div className="menu">
                    <div>
                        <NavLink className="nav-link" to="/">
                            Home
                        </NavLink>
                        <NavLink className="nav-link" to="/random">
                            Random
                        </NavLink>
                        <NavLink className="nav-link" to="/submit">
                            Submit
                        </NavLink>
                        <NavLink className="nav-link" to="/api">
                            API
                        </NavLink>
                        <NavLink className="nav-link" to="/about">
                            About
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}
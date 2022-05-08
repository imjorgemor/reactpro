import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom"
import logo from '../logo.svg';

const Navigation = () => {
    return (
        <BrowserRouter>
            <div className="main-layout">
                <nav>
                    <img src={logo} alt="React logo" />
                    <ul>
                        <li>
                            <NavLink to="/home" className={({ isActive }) => isActive ? "nav-active" : ""}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about" className={({ isActive }) => isActive ? "nav-active" : ""}>About</NavLink>
                        </li>
                        <li>
                            <NavLink to="/users" className={({ isActive }) => isActive ? "nav-active" : ""}>Users</NavLink>
                        </li>
                    </ul>
                </nav>

                <Routes>
                    <Route path="/" element={<h1>home</h1>} />
                    <Route path="/about" element={<h1>About Page</h1>} />
                    <Route path="/users" element={<h1>Users Page</h1>} />
                    <Route path="/*" element={<h2>not found</h2>} />
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default Navigation
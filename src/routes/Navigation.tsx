import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom"
import FormikBasicPage from "../forms/pages/FormikBasicPage";
import FormikComponents from "../forms/pages/FormikComponents";
import FormikYupPage from "../forms/pages/FormikYupPage";
import logo from '../logo.svg';

const Navigation = () => {
    return (
        <BrowserRouter>
            <div className="main-layout">
                <nav>
                    <img src={logo} alt="React logo" />
                    <ul>
                        {/* <li>
                            <NavLink to="/" className={({ isActive }) => isActive ? "nav-active" : ""}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about" className={({ isActive }) => isActive ? "nav-active" : ""}>About</NavLink>
                        </li>
                        <li>
                            <NavLink to="/users" className={({ isActive }) => isActive ? "nav-active" : ""}>Users</NavLink>
                        </li> */}
                        <li>
                            <NavLink to="/formik" className={({ isActive }) => isActive ? "nav-active" : ""}>Formik Basic Form</NavLink>
                        </li>
                        <li>
                            <NavLink to="/formikyup" className={({ isActive }) => isActive ? "nav-active" : ""}>Formik Yup Form</NavLink>
                        </li>
                        <li>
                            <NavLink to="/formikcomponents" className={({ isActive }) => isActive ? "nav-active" : ""}>Formik Components</NavLink>
                        </li>
                    </ul>
                </nav>

                <Routes>
                    <Route path="/*" element={<FormikBasicPage />} />
                    {/* <Route path="/about" element={<h1>About Page</h1>} />
                    <Route path="/users" element={<h1>Users Page</h1>} />  */}
                    <Route path="/formikyup" element={<FormikYupPage />} />
                    <Route path="/formik" element={<FormikBasicPage />} />
                    <Route path="/formikComponents" element={<FormikComponents />} />
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default Navigation
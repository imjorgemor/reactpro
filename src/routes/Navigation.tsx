import { Suspense } from "react";
import { BrowserRouter, Routes, Route, NavLink, Navigate } from "react-router-dom"
import { routes } from "./routes";
import logo from '../logo.svg';


const Navigation = () => {
    return (
        <Suspense fallback={<span>loading...</span>}>
            <BrowserRouter>
                <div className="main-layout">
                    <nav>
                        <img src={logo} alt="React logo" />
                        <ul>
                            {
                                routes.map(route => (
                                    <li
                                        key={route.name}>
                                        <NavLink
                                            to={route.to}
                                            className={({ isActive }) => isActive ? "nav-active" : ""}>{route.name}</NavLink>
                                    </li>

                                ))
                            }
                        </ul>
                    </nav>

                    <Routes>
                        {
                            routes.map(route => (
                                <Route key={route.path} path={route.path} element={<route.Component />} />

                            ))
                        }
                        <Route path="/*" element={<Navigate to={routes[0].to} replace />} />
                    </Routes>
                </div>
            </BrowserRouter>
        </Suspense>
    )
}

export default Navigation
import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const LoginRegister = () => {
    return (
        <ul className="navbar-nav">
            <li className="nav-item">
                <NavLink className="nav-link text-dark" to="/identity/register">Register</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link text-dark" to="/identity/login">Login</NavLink>
            </li>
        </ul>
    );
}

const LogOut = () => {
    const appState = useContext(AppContext);

    return (
    <ul className="navbar-nav">
        <li className="nav-item">
            <NavLink className="nav-link text-dark" onClick={() => {appState.setAuthInfo(null, '', '')}} to="/">Log Out</NavLink>
        </li>
    </ul>
)};

const Identity = (props: { isLoggedIn: boolean; }) => {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
        return <LogOut />;
    }
    return <LoginRegister />;
}

const Header = () => {
    const appState = useContext(AppContext);
    return (<header>
        <nav className="navbar navbar-expand-sm navbar-toggleable-sm navbar-light bg-white border-bottom box-shadow mb-3">
            <div className="container">
                <NavLink className="navbar-brand" to="/">De Li Ve Ry</NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target=".navbar-collapse" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="navbar-collapse collapse d-sm-inline-flex justify-content-between">
                    <ul className="navbar-nav flex-grow-1">

                        <li className="nav-item">
                            <NavLink className="nav-link text-dark" to="/TransportNeeds">TransportNeeds</NavLink>
                        </li>

                        {appState.token !== null ?
                        (<li className="nav-item">
                            <NavLink className="nav-link text-dark" to="/transportneeds/create">Add new</NavLink>
                        </li>) : null
                        }

                    </ul>
                    <Identity isLoggedIn={appState.token != null}/>
                </div>
            </div>
        </nav>
    </header>);
}

export default Header;
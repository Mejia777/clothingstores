import { NavLink } from "react-router-dom";

export const Cabecera = () => {
    return(
        <>
        <nav className="navbar navbar-expand-lg bg-primary-subtle"
        data-bs-theme="dark">
            <div className="container-fluid">
                <div className="collapse navbar-collapse justify-content-center" id="navbarColor02">
                    <ul className="navbar-nav mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link active" aria-current="page" to="/">
                                Inicio
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/descuento">
                                Descuentos
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        </>
    )
}
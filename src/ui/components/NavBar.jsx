import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../auth/context/AuthContext";

export const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const onLogout = () => {
    logout();
    navigate("/", {
      replace: true,
    });
  };
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
      <Link className="navbar-brand" to="/">
        Heroes
      </Link>

      <div className="navbar-collapse">
        <div className="navbar-nav">
          <NavLink
            className={({ isActive }) =>
              isActive ? "nav-item nav-link active" : "nav-item nav-link"
            }
            to="/marvel"
          >
            Marvel
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              isActive ? "nav-item nav-link active" : "nav-item nav-link"
            }
            to="/dc"
          >
            DC
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "nav-item nav-link active" : "nav-item nav-link"
            }
            to="/search"
          >
            Buscar
          </NavLink>
        </div>
      </div>

      <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
        <ul className="navbar-nav ml-auto">
          <span className="nav-item nav-link">
            {" "}
            Bienvenid@: <b>{user?.name.toUpperCase()}</b>{" "}
          </span>
          <button
            style={{
              backgroundColor: "red",
              paddingLeft: "25px",
              paddingRight: "25px",
              borderRadius: "5px",
              color: "black",
              fontWeight: "bold",
              textShadow: "2px 2px 2px white",
            }}
            className="nav-item nav-link "
            onClick={onLogout}
          >
            Salir
          </button>
        </ul>
      </div>
    </nav>
  );
};

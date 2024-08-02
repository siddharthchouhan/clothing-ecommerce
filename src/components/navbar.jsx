import logo from "./assets/logo.png";
import cartLogo from "./assets/cart_icon.png";
import { useContext } from "react";
import { ContextApi } from "../store/context";
import { Link } from "react-router-dom";
import { RiMenu2Fill } from "react-icons/ri";

const Navbar = () => {
  const { active, setActive, cartItem } = useContext(ContextApi);

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-white">
        <div className="container">
          <button
            className={`navbar-toggler border-0 my-3`}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <RiMenu2Fill className="fs-3" />
          </button>
          <div
            className="collapse navbar-collapse justify-content-between"
            id="navbarSupportedContent"
          >
            <a
              className="navbar-brand d-flex align-items-center gap-2"
              href="#"
            >
              <img src={logo} alt="" />
              <span className="fs-4 fw-normal">SHOPPER</span>
            </a>

            <ul className="navbar-nav mb-2 mb-lg-0 gap-3">
              <li
                onClick={() => setActive("shop")}
                className={`nav-item ${active === "shop" && "active"}`}
              >
                <Link className="nav-link fw-normal" aria-current="page" to="/">
                  Shop
                </Link>
              </li>
              <li
                onClick={() => setActive("men")}
                className={`nav-item ${active === "men" && "active"}`}
              >
                <Link
                  className="nav-link fw-normal"
                  aria-current="page"
                  to="/men"
                >
                  Men
                </Link>
              </li>
              <li
                onClick={() => setActive("women")}
                className={`nav-item ${active === "women" && "active"}`}
              >
                <Link
                  className="nav-link fw-normal"
                  aria-current="page"
                  to="/women"
                >
                  Women
                </Link>
              </li>
              <li
                onClick={() => setActive("kids")}
                className={`nav-item ${active === "kids" && "active"}`}
              >
                <Link
                  className="nav-link fw-normal"
                  aria-current="page"
                  to="/kids"
                >
                  Kids
                </Link>
              </li>
            </ul>
            <form className="d-flex gap-4" role="search">
              <Link
                onClick={() => setActive("")}
                to="/login-signup"
                className="btn btn-outline-secondary py-2 rounded-5 px-4"
                type="submit"
              >
                Login
              </Link>

              <button
                type="button"
                onClick={() => setActive("")}
                className="btn position-relative"
              >
                <Link to="/cart">
                  <img
                    src={cartLogo}
                    style={{ width: "70%" }}
                    className="p-0"
                    alt=""
                  />
                </Link>
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {cartItem.length}
                </span>
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

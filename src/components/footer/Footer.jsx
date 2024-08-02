import logo from "../assets/logo.png";
import { FaInstagram } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="py-5">
      <div className="container">
        <footer className="my-4">
          <p className="text-center d-flex align-items-center p-0 gap-3 py-3 justify-content-center">
            <img src={logo} alt="" />
            <h3>SHOPPER</h3>
          </p>
          <ul className="nav justify-content-center pb-1 mb-3">
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-body-secondary">
                Company
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-body-secondary">
                Products
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-body-secondary">
                Offices
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-body-secondary">
                About
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-body-secondary">
                Contact
              </a>
            </li>
          </ul>
          <div className="container m-auto text-center fs-3 mb-3">
            <FaInstagram className="mx-3"/>
            <FaPinterest className="mx-3"/>
            <FaWhatsapp className="mx-3"/>
          </div>
          <p className="text-center text-body-secondary">©copyright 2024 all right reserved</p>
        </footer>
      </div>
    </div>
  );
};

export default Footer;

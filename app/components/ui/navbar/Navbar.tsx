import NavbarDropdown from "~/components/ui/navbar/NavbarDropdown";
import { Link } from "@remix-run/react";

export default function Navbar() {
  return (
    <nav
      className="navigation navbar is-fixed-top is-align-items-center nav-bg"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="container">
        <div className="navbar-brand">
          <Link className="navbar-item" to={"/"}>
            <img
              className="img-fluid"
              width="100px"
              src="/images/logo.png"
              alt="Reader | Personal Bulma Blog Template"
            />
          </Link>

          <button
            className="navbar-burger burger mt-2"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </button>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start mx-auto">
            <NavbarDropdown
              title="Publicaciones"
              links={[
                { link: "author.html", text: "Autor" },
                { link: "author2.html", text: "Autor 2" },
              ]}
            />
            <li className="navbar-item">
              <Link className="navbar-link is-arrowless" to={"/nosotros"}>
                Quiénes Somos
              </Link>
            </li>
            <li className="navbar-item">
              <a className="navbar-link is-arrowless" href="contact.html">
                Himnario
              </a>
            </li>
            <li className="navbar-item">
              <a className="navbar-link is-arrowless" href="contact.html">
                Descargas
              </a>
            </li>
            <li className="navbar-item">
              <a className="navbar-link is-arrowless" href="contact.html">
                Los Escogidos
              </a>
            </li>
            <li className="navbar-item">
              <a className="navbar-link is-arrowless" href="contact.html">
                Contacto
              </a>
            </li>
          </div>

          <div className="navbar-end is-align-items-center ml-0">
            <form className="search-bar">
              <input
                id="search-query"
                name="s"
                type="search"
                placeholder="Type &amp; Hit Enter..."
              />
            </form>
          </div>
        </div>
      </div>
    </nav>
  );
}

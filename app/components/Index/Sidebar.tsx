import { Link } from "@remix-run/react";

type SidebarProps = {
  categories: { [key: string]: number };
  tags: string[];
};

export default function Sidebar({ categories, tags }: SidebarProps) {
  return (
    <aside className="column is-4-desktop @@sidebar">
      <div className="widget">
        <h4 className="widget-title">
          <span>Únete a nuestro newsletter</span>
        </h4>
        <form
          action="#"
          method="post"
          name="mc-embedded-subscribe-form"
          target="_blank"
          className="widget-search"
        >
          <input
            className="mb-3"
            id="search-query"
            name="s"
            type="search"
            placeholder="Your Email Address"
          />
          <i className="ti-email"></i>
          <button
            type="submit"
            className="btn btn-primary btn-block"
            name="subscribe"
          >
            Subscribe now
          </button>
          <div
            style={{ position: "absolute", left: "-5000px" }}
            aria-hidden="true"
          >
            <input
              type="text"
              name="b_463ee871f45d2d93748e77cad_a0a2c6d074"
              tabIndex={-1}
            />
          </div>
        </form>
      </div>

      <div className="widget widget-categories">
        <h4 className="widget-title">
          <span>Secciones</span>
        </h4>
        <ul className="list-unstyled widget-list">
          {Object.keys(categories).map((category: string) => (
            <li key={category}>
              <Link
                to={`/publicaciones/categoria/${category}`}
                className="d-flex"
              >
                {category}{" "}
                <small className="ml-auto">({categories[category]})</small>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="widget">
        <h4 className="widget-title">
          <span>Etiquetas</span>
        </h4>
        <ul className="widget-list-inline widget-card">
          {tags.map((tag: string) => (
            <li key={`sidebar-tag-${tag}`} className="list-inline-item">
              <Link to={`/publicaciones/categoria/${tag}`}>{tag}</Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}

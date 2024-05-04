import { FooterBorder } from "~/components/ui/svg/shapes";

export default function Footer() {
  return (
    <footer className="footer">
      <FooterBorder />

      <div className="container">
        <div className="columns is-multiline is-align-items-center">
          <div className="column is-2-desktop has-text-centered mb-4">
            <a href="index.html">
              <img
                className="img-fluid"
                width="100px"
                src="images/logo.png"
                alt="Reader | Hugo Personal Blog Template"
              />
            </a>
          </div>
          <div className="column is-12">
            <div className="border-bottom border-default"></div>
          </div>
        </div>
      </div>
    </footer>
  );
}

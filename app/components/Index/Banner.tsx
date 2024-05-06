import { Border, Shape1, Shape2, Shape3 } from "~/components/ui/svg/shapes";
import { Link } from "@remix-run/react";

type BannerProps = {
  tags: string[];
};
export default function Banner({ tags }: BannerProps) {
  const currentYear = new Date().getFullYear();
  return (
    <div className="banner has-text-centered">
      <div className="container">
        <div className="columns is-centered">
          <div className="column is-9-widescreen">
            <h1 className="mb-6">
              Agrupación de Oración y Predicación Monte Santo
            </h1>
            <p className="is-size-5">
              El propósito de esta página es ponerla al servicio de nuestro
              Dios, siendo un vínculo de comunión entre las tres iglesias, a la
              vez que sirva como instrumento de predicación para dar a conocer
              el gran Dios que hemos conocido en estos {`${currentYear - 1982}`}{" "}
              años a su servicio.
            </p>
            <p>
              ¿Quieres conocer más?, visita la sección{" "}
              <Link to={"/nosotros"}>Quiénes Somos</Link>
              <br />
              Si tienes alguna petición, déjanos tu mensaje en la sección{" "}
              <Link to={"/contacto"}>Contacto</Link>
            </p>
            <div className="widget">
              <p>
                Esperamos que cuando te vayas, hayas recibido una gran bendición
                en tu vida y quedes con deseos de volver.
              </p>
              <strong>Que Dios te guíe en sus caminos.</strong>
            </div>
            <ul className="widget-list-inline mb-4">
              {tags.map((tag: string) => (
                <li key={`banner-tag-${tag}`} className="list-inline-item">
                  <Link to={`/publicaciones/categoria/${tag}`}>{tag}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <Shape1 isBanner />
      <Shape2 isBanner />
      <Shape3 isBanner />
      <Border isBanner />
    </div>
  );
}

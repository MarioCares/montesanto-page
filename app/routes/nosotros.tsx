import PageHeader from "~/components/ui/PageHeader";
import TextAndImage from "~/components/ui/sections/TextAndImage";
import { Link } from "@remix-run/react";

export default function AboutUsPage() {
  return (
    <>
      <PageHeader title={"Quiénes Somos"} page={"Quiénes Somos"} />

      <TextAndImage
        imageAlign="right"
        img={
          <img
            alt="Logo"
            className="img-fluid w-100"
            src={"/images/log3.gif"}
          />
        }
      >
        <p>
          La Agrupación de Oración y Predicación “Monte Santo”, cuenta con
          Personalidad Jurídica Decreto Nº 689 de fecha 27 de Junio del año
          1989. Su sede principal se encuentra ubicada en la calle Teniente Luís
          Uribe N° 1458 de la ciudad de Tocopilla, Chile, siendo una iglesia
          independiente con sucursales en las ciudades de Iquique y Antofagasta.
        </p>
        <p>
          Sólo Jehová es nuestro Pastor, como dice el Salmo 23. Creemos en Dios
          Padre, en Jesucristo su hijo que murió en la cruz para que pudiéramos
          ser salvos y en el infinito poder consolador del Espíritu Santo, en su
          bautismo y en la vigencia de los dones espirituales descritos por el
          apóstol Pablo en 1ª Corintios 12.
        </p>
        <p>
          El propósito de esta página es ponerla al servicio de nuestro Dios,
          siendo un vínculo de comunión entre las tres iglesias, a la vez que
          sirva como instrumento de predicación para dar a conocer el gran Dios
          que hemos conocido en estos 24 años a su servicio.
        </p>
        <p>
          Si perteneces a otra iglesia o simplemente llegaste aquí por
          curiosidad estás invitado a quedarte, a visitar todas las secciones
          pero te pedimos sólo a cambio un poco de respeto. Si traes alguna
          petición o deseas que te ayudemos a orar, por favor déjanos tu mensaje
          en la sección <Link to={"/contactenos"}>Contáctenos</Link>.
        </p>
        <p>
          Esperamos que cuando te vayas, hayas recibido una gran bendición en tu
          vida y quedes con deseos de volver.
        </p>
      </TextAndImage>

      <TextAndImage>
        <h2 className="title is-2 mb-3">Reseña de la primera visión</h2>
        <blockquote>
          <span className="is-italic">
            &quot;Y después de esto derramaré mi espíritu sobre toda carne, y
            profetizarán vuestros hijos y vuestras hijas; vuestros ancianos
            soñarán sueños, y vuestros jóvenes verán visiones&quot;
          </span>
          <br />
          <span className="has-text-weight-bold is-underlined">Joel 2:28</span>
        </blockquote>
        <p>
          En una calurosa noche del año 1979 en Tocopilla, puerto de la Región
          de Antofagasta, en Chile, Luisa Bastías dormía tranquilamente cuando
          un sueño se le presentó con tal nitidez que nunca más podría olvidar.
        </p>
        <p>
          Soñó que las estrellas en el cielo comenzaban a danzar y de pronto
          formaban un bebé, similar a los que se usan para graficar el año
          nuevo, con una banda que decía &quot;1982&quot; , y dentro de él (como
          si estuviera embarazado) se dibujaba otro bebé similar, cuya banda
          decía &quot;1983&quot;.
        </p>
        <p>
          Consultó con varios ancianos y pastores en la iglesia pero nadie pudo
          darle alguna interpretación, salvo un pastor de apellido Leaño, que en
          sus últimos días de vida la llamó aparte para decirle que había pedido
          dirección a Dios y este le había mostrado que ese sueño significaba el
          nacimiento de algo grande que sucedería a fines del año 1982 y
          comienzos del 1983.
        </p>
      </TextAndImage>

      <TextAndImage>
        <h2 className="title is-2 mb-4">Cuatro años después</h2>
        <p>
          Trascripción textual de la 1ª Acta de la Agrupación Cristiana de
          Oración y Predicación &quot;Monte Santo&quot;:
        </p>
        <blockquote>
          24 de Septiembre de 1982.- <br />
          Siendo las 08.15 horas, se efectúo un culto de adoración a Dios, con
          asistencia de 13 hermanos. Fue algo muy especial dirigido por el
          Espíritu Santo del Señor. Confirmando así que el Señor es Nuestro
          Pastor. Dios hablando por intermedio de su profeta dijo: &quot;Que El
          se sentaba en su Trono&quot; fue algo muy maravilloso.
        </blockquote>
      </TextAndImage>

      <TextAndImage
        imageAlign="left"
        img={
          <img
            alt="construccion"
            src={"/images/construccion.gif"}
            className="img-fluid"
          />
        }
      >
        <h2 className="title is-2 mb-4">La construcción del templo</h2>
        <blockquote>
          <i>
            &quot;El Dios de los cielos, él nos prosperará, y nosotros sus
            siervos nos levantaremos y edificaremos&quot;
          </i>
          <br />
          <span className="has-text-weight-bold is-underlined">
            Nehemías 2:20
          </span>
        </blockquote>
        <p>
          El 22 de Noviembre de 1982, 20 hermanos, con gozo, optimismo y una
          gran fe en el Señor, se reunieron con el fin de trazar el terreno en
          que se levantaría la casa del Señor. En el Acta respectiva quedó
          escrito:
        </p>
        <blockquote>
          &quot;Las medidas son de 7,35 mts. de ancho y 11 mts. de fondo, hasta
          que Nuestro amado Dios nos lleve. Amén&quot;
        </blockquote>
        <p>
          Sin embargo debió pasar todavía un tiempo para que el terreno quedara
          definitivamente en manos de Monte Santo, mientras tanto, durante la
          Escuela Dominical del día 14 de Agosto de 1983, se nos pidió que
          desalojáramos el local que ocupaba el culto. Ese día en la noche se
          reunió la congregación en la calle efectuándose un servicio en la
          calle, terminándose con la primera predicación al aire libre. Dios
          siempre convierte lo que nos parece una derrota en una gran victoria.
        </p>
        <p>
          El día jueves 18 de agosto de 1983, en un acto simbólico se puso la
          primera piedra de la que a vendría a ser la casa del Señor, la que se
          daría por terminada en diciembre de 1986. Al leerlo puede parecer
          mucho tiempo, pero la construcción es también una muestra del Poder de
          Dios dado que los hermanos que integraban la congregación en su
          comienzo eran aproximadamente 25 personas, muchas de las cuales eran
          jubilados, viudas, o jóvenes que no tenían un trabajo remunerado por
          lo que los diezmos no sobrepasaban los $130.000.- anuales (US$240,00).
        </p>
        <p>
          Nunca se hizo una actividad destinada a reunir fondos ya que servimos
          al Dios dueño de la plata y el oro quien fue proveyendo cada cosa a
          medida que se necesitaba, no sobrando ningún material ni faltando nada
          para la construcción.
        </p>
        <p>
          En abril de 1987, comenzaron los trámites para obtener la personalidad
          jurídica (trámite necesario en Chile para darle carácter de oficial a
          la congregación), la que se concedió bajo el Decreto del Ministerio de
          Justicia N⪚ 689 de fecha 27 de Junio del año 1989, autorización para
          ejercer dentro de la jurisprudencia que dicha Personalidad concede.
        </p>
      </TextAndImage>

      <TextAndImage>
        <h1 className="title is-1">Monte Santo crecerá como la palmera</h1>
        <blockquote>
          <i>
            &quot;Plantados en la casa de Jehová. En los atrios de nuestro Dios
            florecerán&quot;
          </i>
          <br />
          <span className="has-text-weight-bold is-underlined">
            Salmos 92:13
          </span>
        </blockquote>
        <p>
          El día 4 de agosto del año 1983, comenzaron a reunirse un grupo de
          hermanos en la ciudad de Antofagasta (Monte Grande) y el 15 de enero
          de 1984 por mandato de nuestro Dios se dio comienzo oficialmente al
          primer culto en la ciudad de Iquique (Monte Alto). Ambos grupos forman
          parte de Monte Santo, siendo los nombres &quot;
          <strong>Monte Grande</strong>&quot; y &quot;
          <strong>Monte Alto</strong>&quot; sólo para fines de identificación
          dentro de la congregación.
        </p>
        <p>A la fecha, el número de miembros supera las 100 personas.</p>
        <p>
          Lo que comenzó con un sueño se ha convertido en una realidad que día a
          día crece en el conocimiento de la Palabra de Dios, en el amor por
          servirle de la mejor manera y en la fe al ver las grandes cosas que ha
          hecho Jehová con nosotros.
        </p>
        <p>
          Para el Dios que vive y reina por los siglos de los siglos sea toda la
          honra, la gloria y la alabanza.
        </p>
      </TextAndImage>

      <section className="section-sm">
        <div className="container content">
          <div className="columns is-align-items-center is-justify-content-center">
            <div className="column">
              <div className="image-wrapper">
                <img
                  alt="construccion"
                  src={"/images/montealto_2022.jpeg"}
                  className="img-fluid"
                />
                <span className="pl-5">Monte Alto</span>
              </div>
            </div>
            <div className="column">
              <div className="image-wrapper">
                <img
                  alt="construccion"
                  src={"/images/montesanto_pre2022.jpeg"}
                  className="img-fluid"
                />
                <span className="pl-5">Monte Santo</span>
              </div>
            </div>
            <div className="column">
              <div className="image-wrapper">
                <img
                  alt="construccion"
                  src={"/images/montegrande_2022.jpeg"}
                  className="img-fluid"
                />
                <span className="pl-5">Monte Grande</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <h1 className="title is-1 has-text-centered">Amén</h1>
    </>
  );
}

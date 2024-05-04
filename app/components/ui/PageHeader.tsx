import { Border, Shape1, Shape2, Shape3 } from "~/components/ui/svg/shapes";

type PageHeaderProps = {
  title: string;
  page: string;
};

export default function PageHeader({ page, title }: PageHeaderProps) {
  return (
    <div className="header has-text-centered">
      <div className="container">
        <div className="columns">
          <div className="column is-9-widescreen mx-auto">
            <h1 className="title is-1 mb-4">{title}</h1>
            <ul className="list-inline">
              <li className="list-inline-item">
                <span className="text-default">Sitio &nbsp; &nbsp; /</span>
              </li>
              <li className="list-inline-item text-primary">{page}</li>
            </ul>
          </div>
        </div>
      </div>

      <Shape1 isBanner={false} />
      <Shape2 isBanner={false} />
      <Shape3 isBanner={false} />
      <Border isBanner={false} />
    </div>
  );
}

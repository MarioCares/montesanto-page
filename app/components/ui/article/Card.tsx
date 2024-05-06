import { IPost, IPostTag } from "~/interface/post.interface";
import { Link } from "@remix-run/react";

type RecentPostCardProps = {
  post: IPost;
};

export default function RecentPostCard({ post }: RecentPostCardProps) {
  return (
    <article className="card mb-5">
      <div className="post-slider">
        <img
          src={`https://unsplash.it/860/430.webp?random=${post.id}`}
          className="card-img-top"
          alt="post-thumb"
        />
      </div>
      <div className="card-body">
        <h3 className="mb-3">
          <Link className="post-title" to={`/publicacion/${post.slug}`}>
            {post.title}
          </Link>
        </h3>
        <ul className="card-meta list-inline">
          <li className="list-inline-item">
            <Link
              to={`/publicaciones/publicador/${post.publisher}`}
              className="card-meta-author"
            >
              <img
                alt={post.publisher}
                src={`/images/avatar/${post.publisher
                  .toLowerCase()
                  .replaceAll(" ", "")}.png`}
              />
              <span>{post.publisher}</span>
            </Link>
          </li>
          <li className="list-inline-item">
            <i className="ti-timer"></i>2 Min To Read
          </li>
          <li className="list-inline-item">
            <i className="ti-calendar"></i>
            {post.postAt}
          </li>
          <li className="list-inline-item">
            <ul className="card-meta-tag list-inline">
              {post.PostTags.map((tag: IPostTag) => (
                <li key={tag.id} className="list-inline-item">
                  <Link to={`/publicaciones/tag/${tag.description}`}>
                    {tag.description}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        </ul>
        <div className="content">
          <div dangerouslySetInnerHTML={{ __html: post.introduction }} />
        </div>
        <Link
          to={`/publicacion/${post.slug}`}
          className="btn btn-outline-primary"
        >
          Leer más
        </Link>
      </div>
    </article>
  );
}

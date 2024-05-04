import { IPost } from "~/interface/post.interface";
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
          <Link className="post-title" to={post.slug}>
            {post.title}
          </Link>
        </h3>
        <ul className="card-meta list-inline">
          <li className="list-inline-item">
            <a href="author-single.html" className="card-meta-author">
              <img
                alt={post.publisher}
                src="https://demo.themefisher.com/reader-bulma/images/john-doe.jpg"
              />
              <span>{post.publisher}</span>
            </a>
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
              {post.tags?.map((tag: string) => (
                <li key={tag} className="list-inline-item">
                  <Link to={tag}>{tag}</Link>
                </li>
              ))}
            </ul>
          </li>
        </ul>
        <div className="content">
          <div dangerouslySetInnerHTML={{ __html: post.introduction }} />
        </div>
        <Link to={post.slug} className="btn btn-outline-primary">
          Leer más
        </Link>
      </div>
    </article>
  );
}

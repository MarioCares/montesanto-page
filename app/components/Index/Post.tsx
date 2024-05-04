import { IPost } from "~/interface/post.interface";
import RecentPostCard from "~/components/ui/article/Card";

type PostProps = {
  posts: Array<IPost>;
};

export default function Post({ posts }: PostProps) {
  return (
    <div className="column is-8-desktop mb-5">
      <h2 className="h5 section-title">Recent Post</h2>

      {posts.map((post: IPost) => (
        <RecentPostCard key={post.slug} post={post} />
      ))}

      <ul className="pagination justify-content-center">
        <li className="page-item page-item active ">
          <a href="#!" className="page-link">
            1
          </a>
        </li>
        <li className="page-item">
          <a href="#!" className="page-link">
            2
          </a>
        </li>
        <li className="page-item">
          <a href="#!" className="page-link">
            &raquo;
          </a>
        </li>
      </ul>
    </div>
  );
}

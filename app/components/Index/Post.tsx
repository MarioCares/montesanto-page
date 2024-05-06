import { IPost } from "~/interface/post.interface";
import RecentPostCard from "~/components/ui/article/Card";

type PostProps = {
  posts: IPost[];
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
          <button className="page-link">1</button>
        </li>
        <li className="page-item">
          <button className="page-link">2</button>
        </li>
        <li className="page-item">
          <button className="page-link">&raquo;</button>
        </li>
      </ul>
    </div>
  );
}

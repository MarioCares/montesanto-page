import { json, LoaderFunctionArgs, MetaFunction } from "@remix-run/cloudflare";
import Banner from "~/components/Index/Banner";
import FeaturedPost from "~/components/Index/FeaturedPost";
import Sidebar from "~/components/Index/Sidebar";
import Post from "~/components/Index/Post";
import { PostService } from "~/service/PostService";
import { useLoaderData } from "@remix-run/react";
import { IPost } from "~/interface/post.interface";

export const meta: MetaFunction = () => {
  return [
    { title: "MonteSanto.cl" },
    {
      name: "description",
      content: "Bienvenido a nuestra web",
    },
  ];
};

export const loader = async ({ context }: LoaderFunctionArgs) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const api_url = context.cloudflare.env.API_URL;

  const [posts, tags, categories] = await Promise.all([
    await PostService.get(api_url),
    await PostService.getTags(api_url),
    await PostService.getCategories(api_url),
  ]);
  return json({ posts, tags, categories });
};

// tema => https://github.com/themefisher/reader-bulma/tree/main

export default function Index() {
  const { posts, tags, categories } = useLoaderData<typeof loader>() as {
    posts: IPost[];
    tags: string[];
    categories: { [key: string]: number };
  };

  return (
    <>
      <Banner tags={tags} />
      <FeaturedPost />
      <section className="section-sm">
        <div className="container">
          <div className="columns is-multiline is-desktop is-justify-content-center">
            <Post posts={posts} />
            <Sidebar categories={categories} tags={tags} />
          </div>
        </div>
      </section>
    </>
  );
}

import { json, LoaderFunctionArgs } from "@remix-run/cloudflare";
import { Link, useLoaderData } from "@remix-run/react";
import { PostService } from "~/service/PostService";
import { IPost, IPostTag } from "~/interface/post.interface";
import TextAndImage from "~/components/ui/sections/TextAndImage";

export const loader = async ({ context, params }: LoaderFunctionArgs) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const api_url = context.cloudflare.env.API_URL;
  const [post] = await Promise.all([
    await PostService.getBySlug(params.slug, api_url),
  ]);
  return json({ post });
};

export default function PublicacionPost() {
  const { post } = useLoaderData<typeof loader>() as { post: IPost };
  return (
    <>
      <div className="py-4"></div>
      <section className="section">
        <div className="container">
          <div className="columns is-multiline is-desktop is-justify-content-center">
            <div className="column is-9-desktop mb-5">
              <article>
                <h1 className="h2">{post.title}</h1>
                <ul className="card-meta my-3 list-inline">
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
                <TextAndImage
                  imageAlign={"left"}
                  img={
                    <img
                      src={`https://unsplash.it/1600/800.webp?random=${post.id}`}
                      className="card-img"
                      alt="post-thumb"
                    />
                  }
                >
                  {post.introduction}
                </TextAndImage>
                <div dangerouslySetInnerHTML={{ __html: post.body }} />
                <div className="widget mt-6">
                  <nav className="level">
                    <div className="level-item has-text-centered">
                      <div>
                        <p className="heading">Escritor</p>
                        <p className="title">{post.originalAuthor}</p>
                      </div>
                    </div>
                    <div className="level-item has-text-centered">
                      <div>
                        <p className="heading">Publicado en</p>
                        <p className="title">
                          <a
                            rel="noreferrer"
                            href={post.originallyPublish}
                            target="_blank"
                          >
                            <span className="icon-text">
                              <span className="icon">
                                <i className="ti-link"></i>
                              </span>
                              <span>Visitar</span>
                            </span>
                          </a>
                        </p>
                      </div>
                    </div>
                  </nav>
                </div>
              </article>
            </div>

            {/* <div className="column is-9-desktop mt-4">
              <div className="mb-5 border-top mt-4 pt-5">
                <h3 className="mb-5">Comments</h3>

                <div className="block mb-4 pb-4">
                  <a className="is-block mb-5" href="#">
                    <img
                      src="images/post/user-01.jpg"
                      className="mr-3 rounded-circle"
                      alt=""
                    />
                  </a>

                  <a href="#!" className="h4 d-inline-block mb-3">
                    Alexender Grahambel
                  </a>
                  <p>
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                    scelerisque ante sollicitudin. Cras purus odio, vestibulum
                    in vulputate at, tempus viverra turpis. Fusce condimentum
                    nunc ac nisi vulputate fringilla. Donec lacinia congue felis
                    in faucibus.
                  </p>
                  <span className="text-black-800 mr-3 font-weight-600">
                    April 18, 2020 at 6.25 pm
                  </span>
                  <a className="text-primary font-weight-600" href="#!">
                    Reply
                  </a>
                </div>

                <div className="block">
                  <a className="is-block mb-5" href="#!">
                    <img
                      src="images/post/user-02.jpg"
                      className="mr-3 rounded-circle"
                      alt=""
                    />
                  </a>

                  <a href="#!" className="h4 d-inline-block mb-3">
                    Nadia Sultana Tisa
                  </a>
                  <p>
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                    scelerisque ante sollicitudin. Cras purus odio, vestibulum
                    in vulputate at, tempus viverra turpis. Fusce condimentum
                    nunc ac nisi vulputate fringilla. Donec lacinia congue felis
                    in faucibus.
                  </p>
                  <span className="text-black-800 mr-3 font-weight-600">
                    April 18, 2020 at 6.25 pm
                  </span>
                  <a className="text-primary font-weight-600" href="#!">
                    Reply
                  </a>
                </div>
              </div>

              <div className="pt-5">
                <h3 className="mb-5">Leave a Reply</h3>
                <form method="POST">
                  <div className="columns is-multiline">
                    <div className="input-group py-0 column is-12">
                      <textarea
                        className="input"
                        name="comment"
                        required
                      ></textarea>
                    </div>
                    <div className="input-group py-0 column is-4-desktop">
                      <input
                        className="input"
                        type="text"
                        placeholder="Name"
                        required
                      />
                    </div>
                    <div className="input-group py-0 column is-4-desktop">
                      <input
                        className="input"
                        type="email"
                        placeholder="Email"
                        required
                      />
                    </div>
                    <div className="input-group py-0 column is-4-desktop">
                      <input
                        className="input"
                        type="url"
                        placeholder="Website"
                      />
                    </div>
                  </div>
                  <button className="btn btn-primary" type="submit">
                    Comment Now
                  </button>
                </form>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
}

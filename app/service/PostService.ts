const get = async (api: string) => {
  const response = await fetch(`${api}/publicacion`);
  return await response.json();
};

const getBySlug = async (slug: string | undefined, api: string) => {
  const response = await fetch(`${api}/publicacion/${slug}`);
  return await response.json();
};

const getTags = async (api: string) => {
  const response = await fetch(`${api}/publicacion/tags`);
  return await response.json();
};

const getCategories = async (api: string) => {
  const response = await fetch(`${api}/publicacion/categorias`);
  return await response.json();
};

export const PostService = {
  get,
  getBySlug,
  getTags,
  getCategories,
};

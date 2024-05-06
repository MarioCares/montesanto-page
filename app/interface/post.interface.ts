export interface IPostTag {
  id: number;
  postId: number;
  description: string;
}

export interface IPost {
  id: number;
  slug: string;
  postAt: string;
  originalAuthor: string;
  introduction: string;
  originallyPublish: string;
  body: string;
  title: string;
  publisher: string;
  tipe: string;
  PostTags: IPostTag[];
}

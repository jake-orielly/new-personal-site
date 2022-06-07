import { BlueCheeseIsGoodPost } from "../BlogPostsContent/BlueCheeseIsGood";
import { TerraIgnotaIsGreatPost } from "../BlogPostsContent/TerraIgnotaIsGreat";

interface BlogPostArrType {
  link: string;
  post: () => JSX.Element;
  preview: () => JSX.Element;
}

export const BlogPostLinkArr: BlogPostArrType[] = [
  BlueCheeseIsGoodPost,
  TerraIgnotaIsGreatPost,
];

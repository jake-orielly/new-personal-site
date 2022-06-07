import BlogPost from "../BlogPost";
import { useParams } from "react-router-dom";
import { BlogPostLinkArr } from "../BlogPostLinkArr";

const BlogRouter = () => {
  const { id } = useParams();
  const blogPost = BlogPostLinkArr.find((post) => post.link === id ?? "")?.post;
  return !!blogPost ? <BlogPost children={blogPost()} /> : <>Not Found</>;
};

export default BlogRouter;

import BlogPostPreview from "./BlogPostPreview";
import { BlogPostLinkArr } from "./BlogPostLinkArr";

export const Blog = () => {
  return (
    <div>
      {BlogPostLinkArr.map((post) => {
        return (
          <BlogPostPreview
            key={post.link}
            children={post.preview}
            postLink={post.link}
          />
        );
      })}
    </div>
  );
};

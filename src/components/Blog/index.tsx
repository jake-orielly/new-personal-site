import BlogPostPreview from "./BlogPostPreview";
import { BlueCheeseIsGoodPreview } from "./BlogPostsContent";

export const Blog = () => {
  return (
    <div>
      <BlogPostPreview children={BlueCheeseIsGoodPreview} />
    </div>
  );
};

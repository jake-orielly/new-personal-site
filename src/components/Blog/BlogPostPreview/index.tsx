import React from "react";

interface Props {
  children: any;
}

const BlogPostPreview = ({ children }: Props) => {
  return <div>{children()}</div>;
};

export default BlogPostPreview;

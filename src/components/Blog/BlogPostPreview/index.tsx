import React from "react";
import { Link } from "react-router-dom";

interface Props {
  children: any;
  postLink: string;
}

const BlogPostPreview = ({ children, postLink }: Props) => {
  return <Link to={`/blog/${postLink}`}>{children()}</Link>;
};

export default BlogPostPreview;

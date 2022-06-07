import React from "react";

interface Props {
  children?: JSX.Element;
}

const BlogPost = ({ children }: Props) => {
  return <div>{children}</div>;
};

export default BlogPost;

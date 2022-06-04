import React from "react";

interface Props {
  children: any;
}

const BlogPost = ({ children }: Props) => {
  return <div>{children()}</div>;
};

export default BlogPost;

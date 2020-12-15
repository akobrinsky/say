import React from 'react';
import SinglePost from './SinglePost';

const ShownPosts = ({ posts }) => {
  return posts.map((post) => <SinglePost key={post.id} postData={post} />);
};

export default ShownPosts;

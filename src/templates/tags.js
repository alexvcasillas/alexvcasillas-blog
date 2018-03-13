import React from 'react';
import Link from 'gastby-link';

const Tags = ({ pathContext }) => {
  const { posts, tagname } = pathContext;
  if (posts) {
    return (
      <div>
        <span>Posts about: {tagName}:</span>
        <ul>
          {posts.map(post => {
            return (
              <li>
                <Link to={post.frontmatter.path}>{post.frontmatter.title}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
};

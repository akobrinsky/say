import React from 'react';

const RedditNavLink = ({ title, clickHandler, idx, activeIdx }) => {
  return (
    <li onClick={(e) => clickHandler(title, idx)}>
      <a href={`#${idx}`} className={idx === activeIdx ? 'is-active' : ''}>
        {title}
      </a>
    </li>
  );
};

export default RedditNavLink;

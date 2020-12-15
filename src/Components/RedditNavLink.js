import React from 'react';

const RedditNavLink = ({ title, clickHandler, idx, activeIdx, amount }) => {
  const active = idx === activeIdx;
  return (
    <li onClick={(e) => clickHandler(title, idx)}>
      <div
        className={`subreddit-nav is-flex is-align-items-center px-3 py-2 ${
          active && 'is-active'
        }`}
      >
        <span className={`subreddit-nav-link`}>{title}</span>
        <span className={`tag ml-2 ${active ? 'is-light' : 'is-primary'}`}>
          {amount}
        </span>
      </div>
    </li>
  );
};

export default RedditNavLink;

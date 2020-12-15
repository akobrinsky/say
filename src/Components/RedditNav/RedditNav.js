import React from 'react';
import RedditNavLink from './RedditNavLink/RedditNavLink';

const RedditNav = ({ categories, activeIdx, clickHandler }) => {
  return (
    <div className="is-hidden-mobile">
      <aside className="menu">
        <p className="menu-label">Subreddits</p>
        <ul className="menu-list">
          {Object.keys(categories).map((item, idx) => {
            return (
              <RedditNavLink
                key={`redditnav-${idx}`}
                title={item}
                clickHandler={clickHandler}
                idx={idx}
                amount={categories[item]}
                activeIdx={activeIdx}
              />
            );
          })}
        </ul>
      </aside>
    </div>
  );
};

export default RedditNav;

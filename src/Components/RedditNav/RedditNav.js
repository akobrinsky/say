import React from 'react';
import RedditNavLink from '../RedditNavLink/RedditNavLink';

const RedditNav = (props) => {
  return (
    <div className="is-hidden-mobile">
      <aside className="menu">
        <p className="menu-label">Subreddits</p>
        <ul className="menu-list">
          {props.categories.map((item, idx) => {
            return (
              <RedditNavLink
                key={`redditnav-${idx}`}
                title={item}
                clickHandler={props.clickHandler}
                idx={idx}
                activeIdx={props.activeIdx}
              />
            );
          })}
        </ul>
      </aside>
    </div>
  );
};

export default RedditNav;

import React from 'react';

const RedditMobileNav = ({ clickHandler, categories }) => {
  return (
    <div className="select is-hidden-desktop mb-5">
      <select onChange={(e) => clickHandler(e.target.value)}>
        {Object.keys(categories).map((item, idx) => {
          return (
            <option value={item} name={item} key={`redditmobilenav-${idx}`}>
              {item}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default RedditMobileNav;

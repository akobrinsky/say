import React, { useState } from 'react';
import RedditNav from '../Components/RedditNav';
import ShownPosts from '../Components/ShownPosts';
import RedditMobileNav from '../Components/RedditMobileNav';

const RedditWrapper = (props) => {
  const [shownPosts, setShownPosts] = useState([...props.posts]);
  const [activeIdx, setActiveIdx] = useState(0);
  const [current, setCurrent] = useState('All');

  const filterClickHandler = (selected, idx) => {
    setActiveIdx(idx);
    setCurrent(selected);
    const allPosts = [...props.posts];
    if (selected === 'All') {
      setShownPosts(allPosts);
    } else {
      const filteredPosts = allPosts.filter((el) => {
        return el.subreddit === selected;
      });
      setShownPosts(filteredPosts);
    }
  };

  return (
    <div className="container px-3 py-6">
      <div className="columns">
        <div className="column is-four-fifths">
          <h2 className="title is-3">{current} Posts</h2>
          <RedditMobileNav
            categories={props.categories}
            posts={props.posts}
            activeIdx={activeIdx}
            clickHandler={filterClickHandler}
          />
          <ShownPosts posts={shownPosts} />
        </div>
        <div className="column">
          <RedditNav
            categories={props.categories}
            posts={props.posts}
            activeIdx={activeIdx}
            clickHandler={filterClickHandler}
          />
        </div>
      </div>
    </div>
  );
};

export default RedditWrapper;

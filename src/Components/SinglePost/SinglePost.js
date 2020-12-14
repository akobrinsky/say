import React from 'react';
import Media from '../Media/Media';
import Awards from '../Awards/Awards';

const SinglePost = ({ postData }) => {
  return (
    <div className="box mb-6">
      <article className="is-flex-desktop redditmedia">
        <figure className="media-left is-flex-direction-column is-align-items-center	">
          {/* Media is for thumbnail for video thumbnail */}
          <Media postData={postData} />
        </figure>
        <div className="media-content">
          <div className="tags has-addons m-0">
            <ul className="awards ml-2">
              <Awards postData={postData} />
            </ul>

            <span className="tag">Ups</span>
            <div className="tag is-success" href="">
              {postData.ups}
            </div>
          </div>
          <h3 className="title is-5 has-text-grey-dark m-0">
            {postData.title}
          </h3>
          <p className="reddit-info is-6 has-text-grey">
            @{postData.author} - {postData.date}
          </p>
          <div>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="redditlink"
              href={`https://reddit.com/${postData.subreddit_url}`}
            >
              {postData.subreddit_url}
            </a>
          </div>
          <div>
            <a
              className="is-flex-grow-1"
              href={`https://reddit.com${postData.permalink}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Link to original post
            </a>
          </div>
        </div>
      </article>
    </div>
  );
};

export default SinglePost;

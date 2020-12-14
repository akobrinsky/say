import React from 'react';

const Media = ({ postData }) => {
  // simple hacky way to check for valid thumbnail image... there appeared to be a bunch of unpredictable placeholders
  const pattern = /^((http|https):\/\/)/;
  const hasImage = pattern.test(postData.thumbnail);

  // image or video to insert, both image and video posts have thumbs so we need to check if there is a video present first
  let insertMedia = null;
  if (hasImage && !postData.isVideo) {
    insertMedia = (
      <p className="image">
        <a href={postData.url}>
          <img
            alt={postData.title}
            className="image"
            title={postData.title}
            src={postData.thumbnail}
          />
        </a>
      </p>
    );
  }
  if (postData.isVideo) {
    insertMedia = (
      <video controls autoPlay>
        <source
          src={postData.media.reddit_video.scrubber_media_url}
          type="video/mp4"
        />
      </video>
    );
  }

  return <>{insertMedia}</>;
};

export default Media;

import React from 'react';

const Awards = ({ postData }) => {
  return postData.awards.map((award, idx) => {
    return (
      <li key={`award${idx}`} className="is-inline-block mr-2">
        <img
          alt={`award-${idx}`}
          className="image is-24x24 award-image"
          src={award.icon_url}
        />
      </li>
    );
  });
};

export default Awards;

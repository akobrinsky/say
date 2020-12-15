import React, { useEffect, useState } from 'react';
import Loader from '../Components/Loader/Loader';
import RedditWrapper from './RedditWrapper';

const RedditFetch = () => {
  const [fetchedData, setFetchedData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState({});

  useEffect(() => {
    setLoading(true);
    fetch('https://www.reddit.com/.json')
      .then((res) => res.json())
      .then((res) => {
        const { data } = res;
        const categoryObj = { All: data.dist };
        const redditPosts = data.children.map((post) => {
          const { data } = post;
          const insertPost = {
            subreddit: data.subreddit,
            title: data.title,
            subreddit_url: data.subreddit_name_prefixed,
            ups: data.ups,
            thumbnail: data.thumbnail,
            awards: data.all_awardings,
            id: data.id,
            author: data.author,
            permalink: data.permalink,
            url: data.url,
            media: data.media,
            isVideo: data.is_video,
            date: new Date(data.created * 1000).toLocaleDateString('en-US'),
          };
          categoryObj[data.subreddit] = categoryObj[data.subreddit] + 1 || 1;
          return insertPost;
        });
        // sorting right in the fetch so when we filter they will already be sorted by 'ups'
        redditPosts.sort((a, b) => b.ups - a.ups);
        setCategories({ ...categoryObj });
        setFetchedData([...redditPosts]);
        setLoading(false);
      });
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <RedditWrapper
          categories={categories}
          loading={loading}
          posts={fetchedData}
        />
      )}
    </>
  );
};

export default RedditFetch;

import React from 'react'
import './Feed.css';
import TweetBox from './TweetBox';
import Post from './Post';

function Feed() {
    return (
        <div className="feed">
            
            <div className="feed_header">
                <h2>Home</h2>
            </div>

        { /* TweetBox */ }
            <TweetBox />

        { /* Posts */ }
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />

        </div>
    )
}

export default Feed

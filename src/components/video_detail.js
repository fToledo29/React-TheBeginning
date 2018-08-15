import React from 'react';

const VideoDetail = ({video}) => {
    return (video) ? buildDetails(video) : <div> Loading... </div>;
};

const buildDetails = (video) => {
    const videoId = video.id.videoId;
    const url = `https://www.youtube.com/embed/${videoId}`;
    const videoStyle = {
        padding: '100px'
      };
    return (
        <div className="video-detail col-md-8">
            <div class="embed-responsive embed-responsive-16by9">
                <iframe class="embed-responsive-item" src={url} allowfullscreen></iframe>
            </div>
            <div className="details">
                <div>{video.snippet.title}</div>
                <div>{video.snippet.description}</div>
            </div>
        </div>
    );
};

export default VideoDetail;
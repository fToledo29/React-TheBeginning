import React from 'react';
import VidioListItem from './video_list_item';
import VideoListItem from './video_list_item';


const VideoList = (props) => {
    const videoItems = props.videos.map((video) => {
        return <VideoListItem key={video.etag} video={video} />
    });

    return (
        <ul className="col-md-8 list-group">
            {videoItems}
        </ul>
    );
};

export default VideoList;
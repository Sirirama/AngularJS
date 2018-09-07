import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {
    const videoItems = props.video.map( (v, i) => {
        return <VideoListItem vItem={v} key={v.etag} onVideoSelect={props.onSelecteVideo} />
    });
        
    return (
            <ul className="col-md-4 list-group">
                {videoItems}
            </ul>
            );
}

export default VideoList;
